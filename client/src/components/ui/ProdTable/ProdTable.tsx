import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import type { BackendRequestWithUserType, ProductType } from '../../../redux/singleRequestSlice/singleRequestsType';

type TablePropsType = {
  request: BackendRequestWithUserType;
};



function Row(props: { prod: ProductType }): JSX.Element {
  const { prod } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {prod.title}
        </TableCell>
        <TableCell align="right">{prod.price}</TableCell>
        <TableCell align="right">{prod.count}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Описание
              </Typography>
              <p>{prod.description}</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


export default function ProdTable({request}: TablePropsType): JSX.Element {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Название продукта</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Количество&nbsp;(у.е.)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {request.Products.map((prod) => (
            <Row key={prod.id} prod={prod} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
