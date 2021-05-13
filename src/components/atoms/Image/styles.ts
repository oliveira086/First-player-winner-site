import styled from 'styled-components';

import { ImageProps } from './index';

export const Container = styled.div<ImageProps>`
  background-image: url(${props => props.source});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  content: '';
  width: ${props => props.width};
  height: ${props => props.height};
`;
