import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"My name is 
          <Text style={styles.name}>
            Desmond Owusu Ansah
          </Text>
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006adc',
    alignItems: 'center',
    fontSize: '24px',
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  }
});
