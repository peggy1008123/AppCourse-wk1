import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
    <View style={styles.header}>
      <Text style={styles.headerText}>HW1</Text>
    </View>
    <View style={styles.container}>
      <Text style={styles.containerText}>110819033</Text>
      <Text style={styles.containerText}>林姵綺</Text>
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 30,
    flex: 0.1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,

  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerText:{
    color: '#fff',
    fontSize: 20,
  }
});
