import React from 'react';
import BoxContent from '../../components/BoxContent';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { FiUser, FiUsers, FiHome, FiPhone } from 'react-icons/fi';
import { Content, Section, SectionButter } from './styles';

const Register: React.FC = () => {
  return(
    <BoxContent>
      <Content>
        <div className="sub-title">
          <h2>Cadastre um novo cliente:</h2>
        </div>
        <Section>
          <div>
            <Input name="name"  type="text" icon={FiUser} placeholder="Nome"/>
            <Input name="sobrenome"  type="text" icon={FiUsers} placeholder="Sobrenome"/>
          </div>

          <div>
            <Input name="end"  type="text" icon={FiHome} placeholder="Endereço"/>
            <Input name="phone"  type="text" icon={FiPhone} placeholder="Telefone"/>
          </div>
        </Section>

      <SectionButter>
        <Button >Cadastre-se</Button>
      </SectionButter>
      
      </Content>
    </BoxContent>
  );
}

export default Register;