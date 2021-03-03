import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

import database from '../../database.json';
import { Container } from './styles';

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

  return(
    <Container className={classes.container}>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" arial-label="a dense table">
          <TableHead>
            <TableRow className="cabecalho">
              <TableCell className="cabecalho-text">Nome</TableCell>
              <TableCell className="cabecalho-text">Sobrenome</TableCell>
              <TableCell className="cabecalho-text">Cidade</TableCell>
              <TableCell className="cabecalho-text">CEP</TableCell>
              <TableCell className="cabecalho-text">Endereço</TableCell>
              <TableCell className="cabecalho-text">Numero</TableCell>
              <TableCell className="cabecalho-text">Telefone</TableCell>
      
            </TableRow>
          </TableHead>
          <TableBody>
            {database.map((user) => (
              <TableRow key={user.nome}>
                <TableCell component="th" scope="row">
                  {user.nome}
                </TableCell>
                <TableCell align="left">{user.sobrenome}</TableCell>
                <TableCell align="left">{user.cidade}</TableCell>
                <TableCell align="left">{user.cep}</TableCell>
                <TableCell align="left">{user.endereço}</TableCell>
                <TableCell align="left">{user.numero}</TableCell>
                <TableCell align="left">{user.telefone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default TableCustomers;
