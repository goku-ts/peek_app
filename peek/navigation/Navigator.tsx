import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/User/Login';
import SignupScreen from '../screens/User/Register';
import { Notes } from '../screens/Notes/Notes';



type RootStackParamList = {
    Signin: any;
    Signup: undefined;
    Notes: undefined;
  };
  
  type SigninScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signin'>;
  type SignupScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Signup'>;
  type NotesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Notes'>;
  
  type SigninScreenRouteProp = RouteProp<RootStackParamList, 'Signin'>;
  type SignupScreenRouteProp = RouteProp<RootStackParamList, 'Signup'>;
  type NotesScreenRouteProp = RouteProp<RootStackParamList, 'Notes'>;
  
  export type SigninScreenProps = {
    navigation: SigninScreenNavigationProp;
    route: SigninScreenRouteProp;
  };
  
  export type SignupProps = {
    navigation: SignupScreenNavigationProp;
    route: SignupScreenRouteProp;
  };
  
  export type NotesProps = {
    navigation: NotesScreenNavigationProp;
    route: NotesScreenRouteProp;
  };
  
  
  
  const Stack = createNativeStackNavigator<RootStackParamList>();
  


  const App: React.FC = () => (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Signin" component={SignInScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Notes" component={Notes} options={{headerLeft:undefined}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  
  export default App;