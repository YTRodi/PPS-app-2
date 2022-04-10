import React, {
  createContext,
  useEffect,
  useCallback,
  useMemo,
  useContext,
} from 'react';
import { SafeAreaView, Text } from 'react-native';
import { useAsync } from '../../hooks';
import * as auth from '../../auth';

export interface AuthContextProps {
  user: auth.User | null;
  login: (form: auth.AuthProps) => Promise<any>;
  register: (form: auth.AuthProps) => Promise<any>;
  logout: () => Promise<any>;
}

const AuthContext = createContext({} as AuthContextProps);
AuthContext.displayName = 'AuthContext';

const AuthProvider: React.FC = props => {
  const {
    data: user,
    status,
    error,
    isLoading,
    isIdle,
    isError,
    isSuccess,
    setData,
    setError,
  } = useAsync();

  useEffect(() => {
    const unsubscribe = auth.getCurrentUser(setData);
    return unsubscribe;
  }, []);

  const login = useCallback(
    (form: auth.AuthProps) =>
      auth.login(form).then(
        ({ user }) => setData(user),
        error => setError(error)
      ),
    [setData, setError]
  );

  const register = useCallback(
    (form: auth.AuthProps) =>
      auth.register(form).then(
        ({ user }) => setData(user),
        error => setError(error)
      ),
    [setData]
  );

  const logout = useCallback(
    () =>
      auth.logout().then(
        () => {},
        error => setError(error)
      ),
    [setData]
  );

  const value = useMemo<AuthContextProps>(
    () => ({ user, login, register, logout }),
    [user, login, register, logout]
  );

  if (isLoading || isIdle) {
    // return <FullPageSpinner />;
    return (
      <SafeAreaView>
        {/* // TODO: crear componente Spinner */}
        <Text>LOADING...</Text>
      </SafeAreaView>
    );
  }

  if (isError) {
    // return <FullPageErrorFallback error={error} />;
    return (
      <SafeAreaView>
        <Text>ERROR...</Text>
        {/* // TODO: mostrar un cartel de error de acuerdo al campo error.code (ejemplo: auth/email-already-in-use) */}
        <Text>{JSON.stringify(error, null, 2)}</Text>
      </SafeAreaView>
    );
  }

  if (isSuccess) {
    return <AuthContext.Provider value={value} {...props} />;
  }

  throw new Error(`Unhandled status: ${status}`);
};

function useAuth() {
  const context = useContext(AuthContext);
  if (Object.keys(context).length === 0) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
