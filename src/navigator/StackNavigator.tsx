import { createStackNavigator } from '@react-navigation/stack';
import { Home, Login } from '../screens';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
