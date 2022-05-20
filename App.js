import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import AppRotas from './src/appRotas';

const style = {
  flex: 1,
};

export default function App() {
  return (
    <SafeAreaView style={style}>
      <StatusBar />

        <AppRotas />
    </SafeAreaView>
  );
}
