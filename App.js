import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TopBar from "./components/TopBar";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
});
