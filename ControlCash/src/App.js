import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import HomeScreen from './Screens/HomeScreens';


export default function App() {
  return (
      <View style={styles.container}>
      <HomeScreen/> 
       <Header />    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
