import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ToastProvider from './ToastProvider';
import { AuthProvider } from './AuthProvider';

const AppProviders: React.FC = ({ children }) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ToastProvider>
          <AuthProvider>{children}</AuthProvider>
        </ToastProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default AppProviders;
