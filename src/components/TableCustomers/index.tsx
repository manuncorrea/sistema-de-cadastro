import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { MdEdit, MdDeleteForever } from 'react-icons/md';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import api from '../../services/api';

import { Container } from './styles';

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

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },

  tableContainer: {
    maxWidth: '98%',
    maxHeight: 440,
  },

  table: {
    minWidth: 650,
    
  },
});

const TableCustomers: React.FC = () => {

  const classes = useStyles();
 
  const [users, setUsers] = useState<UserProps[] | null >( null );

  async function ListUsers() {
   await api.get('/users').then(response  => {
      setUsers(response.data.users)
      console.log(users)
    })
  }
  useEffect(() => {
    ListUsers()
  });


  async function DeleteUsers (id: string) {
   await api.delete(`users/${id}`).then(() => {
      ListUsers()
    })
  }

  
  return(
    <>
    <Container className={classes.container}>
       {users  && (
      <TableContainer component={Paper} className={classes.tableContainer}>
          <Table id="tabela" className={classes.table} size="small" arial-label="a dense table" stickyHeader >
          <TableHead>
            <TableRow className="cabecalho">
              <TableCell className="cabecalho-text">Nome</TableCell>
              <TableCell className="cabecalho-text">Sobrenome</TableCell>
              <TableCell className="cabecalho-text">Estado</TableCell>
              <TableCell className="cabecalho-text">Cidade</TableCell>
              <TableCell className="cabecalho-text">Bairro</TableCell>
              <TableCell className="cabecalho-text">Rua</TableCell>
              <TableCell className="cabecalho-text">Numero</TableCell>
              <TableCell className="cabecalho-text">Telefone</TableCell>
              <TableCell className="cabecalho-text">Ações</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {user.firstName}
                </TableCell>
                <TableCell align="left">{user.lastName}</TableCell>
                <TableCell align="left">{user.address.state}</TableCell>
                <TableCell align="left">{user.address.city}</TableCell>
                <TableCell align="left">{user.address.neighborhood}</TableCell>
                <TableCell align="left">{user.address.street}</TableCell>
                <TableCell align="left">{user.address.number}</TableCell>
                <TableCell align="left">{user.phone}</TableCell>
                <TableCell align="left">
                  <button>
                    <Link to={`/updataclients/${user._id}`}>
                      <MdEdit />
                    </Link>
                  </button>
              
                  <button onClick={() => DeleteUsers(user._id)}>
                    <MdDeleteForever  />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
       
      </TableContainer>
      )}
      {!users &&
        (<h1>Não existe usuarios, cadastrados!!</h1>)
      } 
    </Container>

    </>
    
  );
}

export default TableCustomers;
