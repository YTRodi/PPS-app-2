import { SafeAreaView, Text, Button } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
import { FullPageSpinner } from './components';
import { useAuth } from './context/AuthProvider';
import { useAsync } from './hooks';
import { mapAuthError } from './helpers';

// TODO: add Auth Stack (Login, Register, recovery password, etc)
const UnauthenticatedApp = () => {
  const { login, register } = useAuth();
  const { isLoading, isError, error, run } = useAsync();
  const toast = useToast();

  if (isLoading) {
    return <FullPageSpinner />;
  }

  if (isError) {
    const errorMessage = mapAuthError(error);
    toast.show(errorMessage, { type: 'danger' });
  }

  // TODO: add form and create FormGroup component
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}>UnauthenticatedApp</Text>
      <Button
        title='Iniciar sesión'
        onPress={() => {
          run(login({ email: 'cami@gmail.com', password: 'Password1' }));
        }}
      />
      <Button
        title='Registrar'
        onPress={() => {
          run(register({ email: 'cami@gmail.com', password: 'Password1' }));
        }}
      />
    </SafeAreaView>
  );
};

export default UnauthenticatedApp;
