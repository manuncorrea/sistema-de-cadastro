import React from 'react';

import { Container } from './styles';

const BoxContent: React.FC = ({ children }) => {
  return <Container data-testid="box-content">{children}</Container>
}
export default BoxContent;