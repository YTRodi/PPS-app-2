import { SafeAreaView, Text, Button } from 'react-native';
import { useAuth } from './context/AuthProvider';
import { useAsync } from './hooks';

// TODO: add Auth Stack (Login, Register, recovery password, etc)
const UnauthenticatedApp = () => {
  const { login, register } = useAuth();
  const { isLoading, isError, error, run } = useAsync();

  if (isLoading) {
    // TODO: crear componente Spinner
    return (
      <SafeAreaView>
        <Text>LOADING [register / login]...</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    // TODO: mostrar toast / alert
    return (
      <SafeAreaView>
        <Text>ERROR...</Text>
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </SafeAreaView>
    );
  }

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
