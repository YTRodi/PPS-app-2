import { ScrollView, View, StyleSheet } from 'react-native';
import { Title, Paragraph } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAuth } from '../../context/AuthProvider';

function Home() {
  const { bottom } = useSafeAreaInsets();
  const { user } = useAuth();

  return (
    <ScrollView style={{ paddingBottom: bottom }}>
      <View style={styles.container}>
        <Title>Información del usuario:</Title>
        <Paragraph>{JSON.stringify(user, null, 2)}</Paragraph>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});

export default Home;
