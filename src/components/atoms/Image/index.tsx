import React from 'react';

import { Container } from './styles';

export interface ImageProps {
  source: string;
  width: string;
  height: string;
}

const Image: React.FC<ImageProps> = ({ source, width, height, children }) => {
  return (
    <Container source={source} width={width} height={height}>
      {children}
    </Container>
  );
};

export default Image;
