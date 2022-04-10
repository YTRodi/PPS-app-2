import { Button, Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text>Home screen</Text>
      {/* <Button title='go to Login' onPress={() => navigate('Login')} /> */}
      <Button
        title='go to Login'
        onPress={() => {
          fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json));
        }}
      />
    </View>
  );
};

export default Home;
