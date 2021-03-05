import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

//import database from '../../database.json';
import api from '../../services/api';

import { Container } from './styles';

interface UserProps {
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
    maxWidth: '90%'
  },

  table: {
    minWidth: 650,

  },

});

const TableCustomers: React.FC = () => {
  const classes = useStyles();

  const [users, setUsers] = useState<UserProps[] | null >( null );

  useEffect(() => {
    api.get('/users').then(response  => {
      setUsers(response.data.users)
    })
  }, []);




  return(
    <Container className={classes.container}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" arial-label="a dense table">
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
      
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
              <TableRow key={user.firstName}>
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableCustomers;
