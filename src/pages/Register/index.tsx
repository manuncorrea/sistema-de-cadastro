import React from 'react';
import BoxContent from '../../components/BoxContent';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { FiUser, FiUsers, FiHome, FiGlobe, FiMapPin, FiPhone } from 'react-icons/fi';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';

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
            <Input name="Estago"  type="text" icon={FiGlobe} placeholder="Estado"/>
            <Input name="city"  type="text" icon={FaCity} placeholder="Cidade"/>
          </div>

          <div className="teste">
            <Input name="bairro"  type="text" icon={FiHome} placeholder="Bairro"/>
            <Input name="rua"  type="text" icon={FiMapPin} placeholder="Rua"/>
            <Input name="number"  type="text" icon={AiOutlineFieldNumber} placeholder="Numero"/>
          </div>
      
          <div className="phone">
            <Input name="phone"  type="text" icon={FiPhone} placeholder="Telefone"/>
          </div>
        </Section>

      <SectionButter>
        <Button className="btn" >Cadastre-se</Button>
      </SectionButter>
      
      </Content>
    </BoxContent>
  );
}

export default Register;