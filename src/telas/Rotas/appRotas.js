import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutoresRotas from './MelhoresProdutoresRotas';

import Coracao from '../../assets/coracao.svg';
import Home from '../../assets/home.svg';

const Tab = createBottomTabNavigator();

const IconsTab = {
  'Melhores Produtores': Coracao,
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route: {name}}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C7C7C7',
          tabBarIcon: ({color}) => {
            const Icon = IconsTab?.[name] || Home;

            return <Icon color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={ProdutorRotas} />

        <Tab.Screen
          name="Melhores Produtores"
          component={MelhoresProdutoresRotas}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
