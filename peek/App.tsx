import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { Notes } from './screens/Notes/Notes';
import SignupScreen from './screens/User/Register';
import SignInScreen from './screens/User/Login';
import PostForm from './screens/Notes/Edits';
import Navigator from './navigation/Navigator';

const App=()=>{
  return (
    <>
    <StatusBar style="light" />  
    <Navigator/>
    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
