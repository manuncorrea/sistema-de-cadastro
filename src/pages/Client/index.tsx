import React from 'react';
import BoxContent from '../../components/BoxContent';
import TableCustomers from '../../components/TableCustomers';
import { Content, Container } from './styles';

const Client: React.FC = () => {
  return(
    <BoxContent>
      <Content>
        <div className="sub-title">
          <h2>Tabela de Clientes:</h2>
        </div>
        <Container>
         
        </Container>
      </Content>
    </BoxContent>
  );
}

export default Client;