import React from 'react';

import ReactNative from 'react-native';

import Texto from './Texto';

import {topo, voltar as VoltarSVG} from '../assets';
import Gradiente from '../assets/gradiente.svg';
import {useNavigation} from '@react-navigation/native';

const largura = ReactNative.Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

const Topo = ({titulo, imagem = topo, altura = ALTURA_PADRAO}) => {
  const estilos = funcaoEstilos(altura);

  const {goBack} = useNavigation();

  return (
    <>
      <ReactNative.Image source={imagem} style={estilos.topo} />

      <Gradiente
        width={largura}
        height={(130 / 360) * largura}
        style={estilos.gradiente}
      />

      <Texto style={estilos.titulo}>{titulo}</Texto>

      <ReactNative.TouchableOpacity
        onPress={goBack}
        style={estilos.botaoVoltar}>
        <VoltarSVG color="white" style={estilos.voltar} />
      </ReactNative.TouchableOpacity>
    </>
  );
};

const funcaoEstilos = altura =>
  ReactNative.StyleSheet.create({
    topo: {
      width: '100%',
      height: altura,
    },
    gradiente: {
      position: 'absolute',
    },
    titulo: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    botaoVoltar: {
      position: 'absolute',
      padding: 17,
    },
    voltar: {
      width: 24,
      height: 24,
    },
  });

export default Topo;
