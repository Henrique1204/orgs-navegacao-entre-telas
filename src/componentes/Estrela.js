import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';

import {estrela, estrelaCinza} from '../assets';

export default function Estrela({
  aoPressionar,
  desabilitada = true,
  preenchida,
  grande = false,
}) {
  const estilos = estilosFuncao(grande);

  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }

    return estrelaCinza;
  };

  return (
    <TouchableOpacity onPress={aoPressionar} disabled={desabilitada}>
      <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
  });
