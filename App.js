
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LogsScreen from './screens/LogsScreen';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0Y4kSUomRbQG2sl7Qfk0JIhATXHJwcpQ",
  authDomain: "urjournal-b81d2.firebaseapp.com",
  projectId: "urjournal-b81d2",
  storageBucket: "urjournal-b81d2.appspot.com",
  messagingSenderId: "570590754389",
  appId: "1:570590754389:web:d70dfd3b8c0f015493c6dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen options={{headerShown: false}} name='Logs' component={LogsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
