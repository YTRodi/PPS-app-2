import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './AuthProvider';

const AppProviders: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      <AuthProvider>{children}</AuthProvider>
    </NavigationContainer>
  );
};

export default AppProviders;
