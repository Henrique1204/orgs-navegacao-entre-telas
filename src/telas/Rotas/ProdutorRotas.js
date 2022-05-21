import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../Home';
import Produtor from '../Produtor';

const Stack = createNativeStackNavigator();

const ProdutorRotas = ({component = Home, name = 'HomeScreen'}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={name} component={component} />
      <Stack.Screen name="Produtor" component={Produtor} />
    </Stack.Navigator>
  );
};

export default ProdutorRotas;
