import React, { useEffect, useState } from 'react';
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

import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaCity } from 'react-icons/fa';

import { Content, Section, SectionButter } from './styles';
import api from '../../services/api';
import { useHistory, useParams } from 'react-router';

interface UserProps {
  _id: string;
  firstName: string;
  lastName: string;
  address: AdressProps;
  phone: string;
}

interface AdressProps{
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
}

interface UpdateClientsProps{
  id: string;
}


const UpdataClients: React.FC<UserProps> = () => {
  const param =  useParams<UpdateClientsProps>()  

  // Redirecionando a rota para tabela de clientes
  const history = useHistory();

  const [firstName, setFirstName]  = useState('');
  const [lastName, setLastName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [phone, setPhone] = useState('');
  
 // eslint-disable-next-line
  const [users, setUsers] = useState<UserProps>();

  // Trazendo os dados do clientes
  useEffect(() => {
    api.get(`users/${param.id}`).then(response  => {
      const user:UserProps = response.data.users;

      setFirstName(user.firstName);
      setLastName(user.lastName);
      setState(user.address.state);
      setCity(user.address.city);
      setNeighborhood(user.address.neighborhood);
      setStreet(user.address.street);
      setNumber(user.address.number);
      setPhone(user.phone);

     setUsers(response.data.users)
     console.log(response.data.users)
     
   })
  }, [param.id]);
 
  // Atualizando os dados do cliente
  async function UpdateUsers(id: string) {
    await api.put(`users/${id}`, {
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
    });
    history.push(`/clients`) 
  }

 
  return(
    <BoxContent>
      <Content>
        <div className="sub-title">
          <h2>Editar clientes:</h2>
        </div>
        <Section>
          <div>
            <Input 
              onChange={e => setFirstName(e.target.value)} 
              name="firstName"  
              value={firstName || ''}
              type="text" icon={FiUser} 
              placeholder="Nome"
            />
            <Input
             onChange={e => setLastName(e.target.value)}
             value={lastName || ''}
             name="lastName"  
             type="text" 
             icon={FiUsers} 
             placeholder="Sobrenome"
             />
          </div>

          <div>
            <Input 
              onChange={e => setState(e.target.value)}
              value={state || ''}
              name="state"  
              type="text" 
              icon={FiGlobe} 
              placeholder="Estado"
            />
            <Input 
              onChange={e => setCity(e.target.value)}
              value={ city || ''}
              name="city"  
              type="text" 
              icon={FaCity} 
              placeholder="Cidade"
            />
          </div>

          <div>
            <Input 
              onChange={e => setNeighborhood(e.target.value)}
              value={ neighborhood || ''}
              name="neighborhood"  
              type="text" 
              icon={FiHome} 
              placeholder="Bairro"
            />
            <Input 
              onChange={e => setStreet(e.target.value)}
              value={street || ''}
              name="street"  
              type="text" 
              icon={FiMapPin} 
              placeholder="Rua"
            />
            <Input 
              onChange={e => setNumber(e.target.value)}
              value={ number || ''}
              name="number"  
              type="text" 
              icon={AiOutlineFieldNumber} 
              placeholder="Numero"
            />
          </div>
      
          <div className="phone">
            <Input 
              onChange={e => setPhone(e.target.value)}
              value={ phone || ''}
              name="phone"  
              type="text" 
              icon={FiPhone} 
              placeholder="Telefone"
            />
          </div>
          <SectionButter>
            <Button onClick={() => UpdateUsers(param.id)} type="submit" className="btn" >Salvar</Button>
          </SectionButter>
        </Section>
      
      </Content>
    </BoxContent>
  );
}

export default UpdataClients;