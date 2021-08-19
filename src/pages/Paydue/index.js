import React from 'react';
import { Box, makeStyles, Input, Avatar, Typography, Button, } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
    root: {
        height: '400px',
        border: '1px solid',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        boxShadow: '2px 3px 10px blue',
        

    },
    text: {

        marginLeft: 'auto',
        marginRight: 'auto',
          width: '80px',
        marginTop: '15px',
        color: '#858585',
        borderBottom: '1px solid',
        textAlign: 'center',
        '& .MuiTypography-body1': {
            fontWeight: 'bold',
            fontSize: '20px'

        },
    },

    Box: {
        boxShadow: '2px 3px 10px blue',

        height: '300px',
        width: '600px',
        border: '1px solid',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
    },
    table: {
        boxShadow: '2px 3px 10px blue',

        fontWeight: 'bold',
        '& .MuiTableCell-alignRight': {
            fontWeight: 'bold',
            color: '#858585',
            fontSize: '12px'
        }
    },
    status: {
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    payBtn: {
        fontWeight: 'bold',
        fontSize: '12px',
        color: 'white',
        backgroundColor: 'blue',
        borderRadius: '20px',
        padding: '3px 10px',
        display: 'inline-block'
    },
    TableHead: {

        "& .MuiTableCell-head": {
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#858585'
        },


    },

    tableBody: {
        boxShadow: '2px 3px 10px blue',

        "&.MuiTableCell-body": {
            color: 'yellow',


        }
    }

}))


function createData(NAME, AMOUNT, STATUS, DATE, ACTIONS) {
    return { NAME, AMOUNT, STATUS, DATE, ACTIONS };
}

const rows = [
    createData('mukesh', '100', 'Pay', '12/Dec/2021', 'due'),

];



export default function Paydue() {
    const classes = useStyles();
    return (

        <Box className={classes.root}>
            <Box className={classes.text}>
                <Typography>Paydue</Typography>
            </Box>
            <Box className={classes.Box}>

                <Table className={classes.table} aria-label="customized table">

                    <TableHead className={classes.TableHead} >
                        <TableRow>
                            <TableCell>NAME</TableCell>
                            <TableCell >AMOUNT</TableCell>
                            <TableCell >STATUS</TableCell>
                            <TableCell >DATE</TableCell>
                            <TableCell >ACTIONS</TableCell>
                        </TableRow>
                    </TableHead>


                    <TableBody className={classes.tableBody} >

                        {rows.map((row) => (
                            <TableRow key={rows.name}>

                                <TableCell >{row.NAME}</TableCell>
                                <TableCell >{row.AMOUNT}</TableCell>
                                <TableCell>
                                    <Typography className={classes.status}>
                                        {row.STATUS}
                                    </Typography>
                                </TableCell>
                                <TableCell >{row.DATE}</TableCell>
                                <TableCell>
                                    <Button className={classes.payBtn} >
                                        {row.ACTIONS}
                                    </Button>
                                </TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>


            </Box>

        </Box>
    )
}
