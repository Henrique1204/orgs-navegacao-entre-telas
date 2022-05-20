import React from 'react';

import ProdutorRotas from './ProdutorRotas';
import MelhoresProdutores from '../MelhoresProdutores';

const MelhoresProdutoresRotas = () => {
  return (
    <ProdutorRotas
      name="MelhoresProdutoresScreen"
      component={MelhoresProdutores}
    />
  );
};

export default MelhoresProdutoresRotas;
