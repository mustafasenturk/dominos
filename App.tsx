import React, { useEffect, useState } from 'react';
import {DarkTheme, DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './src/screens/Tabs';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { navigationRef } from './src/routes/type';
import 'react-native-gesture-handler';


const Stack = createNativeStackNavigator();

const App = () => {


  const [fontsLoaded] = useFonts({
    'Comfortaa-Bold': require('./src/assets/fonts/Comfortaa-Bold.ttf'),
    'Comfortaa-Regular': require('./src/assets/fonts/Comfortaa-Regular.ttf'),
    'Comfortaa-Light': require('./src/assets/fonts/Comfortaa-Light.ttf'),
    'Comfortaa-Medium': require('./src/assets/fonts/Comfortaa-Medium.ttf'),
    'Comfortaa-SemiBold': require('./src/assets/fonts/Comfortaa-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={'Tabs'}
          screenOptions={{
            headerShadowVisible: false,
          }}>
         <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{headerShown: false}}
          />
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
