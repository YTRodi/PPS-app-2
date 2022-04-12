import 'react-native-gesture-handler';
import AppProviders from './src/context';
import { useAuth } from './src/context/AuthProvider';
import AuthenticatedApp from './src/AuthenticatedApp';
import UnauthenticatedApp from './src/UnauthenticatedApp';

export default function App() {
  return (
    <AppProviders>
      <AppState />
    </AppProviders>
  );
}

function AppState() {
  const { user } = useAuth();
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}
