// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import WhatIsRN from './src/screens/WhatIsRN';
import ComponentsScreen from './src/screens/ComponentsScreen';
import HooksScreen from './src/screens/HooksScreen';
import NavigationScreen from './src/screens/NavigationScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  WhatIsRN: undefined;
  Components: undefined;
  Hooks: undefined;
  Navigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WhatIsRN" component={WhatIsRN} />
        <Stack.Screen name="Components" component={ComponentsScreen} />
        <Stack.Screen name="Hooks" component={HooksScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
