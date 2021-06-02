import React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Add } from './src/screens';
import { MyTabs } from './src/components';

const Stack = createStackNavigator();

const App = () => {

  return (

    <NavigationContainer >
      <Stack.Navigator headerMode={'none'}>
        <Stack.Screen name="bottomTab" component={MyTabs} />
        <Stack.Screen name="add" component={Add} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({});

export default App;
