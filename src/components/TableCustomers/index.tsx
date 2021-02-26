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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TableCustomers: React.FC = () => {
  const classes = useStyles();

  return(
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" arial-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Sobrenome</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Telefone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {database.map((user) => (
            <TableRow key={user.nome}>
              <TableCell component="th" scope="row">
                {user.nome}
              </TableCell>
              <TableCell align="left">{user.sobrenome}</TableCell>
              <TableCell align="left">{user.endereço}</TableCell>
              <TableCell align="left">{user.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableCustomers;
