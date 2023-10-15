import React from 'react';
import { LogBox } from 'react-native';
import TabNavigator from './src/navigations/TabNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigations/NavigationService'
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
