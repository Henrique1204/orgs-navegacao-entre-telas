import React from 'react';
import ReactNative from 'react-native';

import {useRoute} from '@react-navigation/native';

import Estilos from './estilos';
import Cesta from './componentes/Cesta';
import TopoProdutor from './componentes/Topo';

const Produtor = () => {
  const {
    params: {nome, imagem, cestas},
  } = useRoute();

  return (
    <ReactNative.FlatList
      data={cestas}
      renderItem={({item}) => <Cesta {...item} produtor={{nome, imagem}} />}
      style={Estilos.lista}
      ListHeaderComponent={<TopoProdutor imagem={imagem} nome={nome} />}
    />
  );
};

export default Produtor;
