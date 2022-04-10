import { SafeAreaView, Text, Button } from 'react-native';
import { useAuth } from './context/AuthProvider';
import { useAsync } from './hooks';

// TODO: add Core Stack (Home, Profile, etc etc)
const AuthenticatedApp = () => {
  const { user, logout } = useAuth();
  const { isLoading, isError, error, run } = useAsync();

  if (isLoading) {
    // TODO: crear componente Spinner
    return (
      <SafeAreaView>
        <Text>LOADING [logout]...</Text>
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
      <Text style={{ fontSize: 30 }}>AuthenticatedApp</Text>
      <Text>Email: {user!.email}</Text>
      <Text>Refresh token: {user!.refreshToken}</Text>
      <Button title='Salir' onPress={() => run(logout())} />
    </SafeAreaView>
  );
};

export default AuthenticatedApp;
