import React from 'react';
import ReactNative from 'react-native';

import Estilos from '../estilos';

import Topo from '../../../componentes/Topo';
import useTextos from '../../../hooks/useTextos';
import {topo as ImagemTopo} from '../../../assets/produtores';

const TopoProdutor = ({imagem, nome}) => {
  const {tituloProdutor, tituloCestas} = useTextos();

  return (
    <>
      <Topo titulo={tituloProdutor} imagem={ImagemTopo} altura={150} />

      <ReactNative.View style={Estilos.conteudo}>
        <ReactNative.View style={Estilos.logo}>
          <ReactNative.Image source={imagem} style={Estilos.produtorImage} />

          <ReactNative.Text style={Estilos.produtor}>{nome}</ReactNative.Text>
        </ReactNative.View>

        <ReactNative.Text style={Estilos.cestas}>
          {tituloCestas}
        </ReactNative.Text>
      </ReactNative.View>
    </>
  );
};

export default TopoProdutor;
