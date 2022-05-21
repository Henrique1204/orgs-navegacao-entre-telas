import React from 'react';
import ReactNative from 'react-native';

import {useRoute} from '@react-navigation/native';

const Produtor = () => {
  const {params} = useRoute();

  console.log(params);

  return <ReactNative.Text>Opa</ReactNative.Text>;
};

export default Produtor;
