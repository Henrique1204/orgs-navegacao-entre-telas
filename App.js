import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';

const style = {
  flex: 1,
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={style}>
      <StatusBar />

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />

          <Tab.Screen
            name="Melhores Produtores"
            component={MelhoresProdutores}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
