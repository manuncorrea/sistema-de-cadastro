import React, { useState } from 'react';

import BoxContent from '../../components/BoxContent';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { 
  FiUser, 
  FiUsers, 
  FiHome, 
  FiGlobe, 
  FiMapPin, 
  FiPhone 
} from 'react-icons/fi';

import {toast, ToastContainer, Zoom} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';

import { Content, Section, SectionButter } from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router';

const Register: React.FC = () => {
  const history = useHistory();

  const [firstName, setFirstName]  = useState('');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [phone, setPhone] = useState('');

  async function CreateUsers() {
    try{
      if(!(await api.post('/users/create', {
        firstName,
        lastName,
        address: {
          state,
          city,
          neighborhood,
          street, 
          number,
        },
        phone,
      })
      )) {
        throw Error('');
      }history.push(`/clients`)

      return toast.success('Cliente cadastrado com sucesso!', {autoClose: 2000})
    }
    catch({ response }){
      if(!response || !response.data || !response.data.errors){
        return toast.error('Ocorreu um problema, preencha todos os campos.',  {autoClose: 2000});
      }

      return toast.error(response.data.errors[0]);
    }
  }
    

  return(
    <>
    <ToastContainer draggable={false} transition={Zoom} autoClose={8000} />
    <BoxContent>
      <Content>
        <div className="sub-title">
          <h2>Cadastre um novo cliente:</h2>
        </div>
        <Section>
          <div>
            <Input 
              onChange={e => setFirstName(e.target.value)} 
              name="firstName"  
              type="text" icon={FiUser} 
              placeholder="Nome"
            />
            <Input
             onChange={e => setLastName(e.target.value)}
             name="lastName"  
             type="text" 
             icon={FiUsers} 
             placeholder="Sobrenome"
             />
          </div>

          <div>
            <Input 
              onChange={e => setState(e.target.value)}
              name="state"  
              type="text" 
              icon={FiGlobe} 
              placeholder="Estado"
            />
              
            <Input 
              onChange={e => setCity(e.target.value)}
              name="city"  
              type="text" 
              icon={FaCity} 
              placeholder="Cidade"
            />
              
          </div>

          <div>
            <Input 
              onChange={e => setNeighborhood(e.target.value)}
              name="neighborhood"  
              type="text" 
              icon={FiHome} 
              placeholder="Bairro"
            />
            <Input 
              onChange={e => setStreet(e.target.value)}
              name="street"  
              type="text" 
              icon={FiMapPin} 
              placeholder="Rua"
            />
            <Input 
              onChange={e => setNumber(e.target.value)}
              name="number"  
              type="text" 
              icon={AiOutlineFieldNumber} 
              placeholder="Numero"
            />
          </div>
      
          <div className="phone">
            <Input 
              onChange={e => setPhone(e.target.value)}
              name="phone"  
              type="text" 
              icon={FiPhone} 
              placeholder="Telefone"
            />
          </div>
          <SectionButter>
            <Button onClick={CreateUsers} type="submit" className="btn" >Cadastrar</Button>
          </SectionButter>
        </Section>

      
      
      </Content>
    </BoxContent>
    </>
  );
}

export default Register;


