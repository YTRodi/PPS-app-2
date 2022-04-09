import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

const Home = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <Text>Home screen</Text>
      <Button title='go to Login' onPress={() => navigate('Login')} />
    </View>
  );
};

export default Home;
