import React from 'react';
import { makeStyles, Box, Card, CardMedia, Typography, Avatar, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
    dashboardpage: {
           height: '600px',
        width: '100%',
        border: '1px solid ',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        // boxShadow: '2px 3px 10px black',
        background: 'white'

    },

    cardbox: {
        height: '200px',
        width: '90%',
        // border: '1px solid ',
        marginTop: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        justifyContent: 'space-Around',
        placeItems: 'center'
    },

    Card: {
        display: 'flex',
        justifyContent: 'space-Between',
        height: '150px',
        borderRadius: '10px',
        width: '45%',
        // border: '1px solid ',
        boxShadow: '2px 3px 10px black'
    },
    CardMedia: {
        height: '90px',
        width: "90px",
        margin: '15px 0 0   10px'
    },
    textcard: {
        height: '90px',
        width: "150px",
        // border: '1px solid',
        marginTop: '35px'


    },
    totaltext: {
        display: 'flex',
        justifyContent: 'flex-Start',
        // border: '1px solid',
        height: '30px',
        width: '100%',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#858585'
    },

    preBox: {

        fontWeight: 'bold',
        fontSize: '12px',
        color: 'green'
    },

    wavebox: {
        alignItems: 'center',
        placeItems: 'center',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-Around',
        height: '30px',
        width: '100%',
        // border: '1px solid'
    },

    wave: {
        height: '30px',
        width: '50px'
    },


    root: {
           height: '250px',
        border: '1px solid',
         marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        // boxShadow: '2px 3px 20px blue',


    },
    text: {

        marginLeft: '40px',

        width: '130px',
        marginTop: '15px',
        color: '#858585',
        // borderBottom: '1px solid',
        textAlign: 'center',
        '& .MuiTypography-body1': {
            fontWeight: 'bold',
            fontSize: '16px'

        },
    },

    Box: {
        // boxShadow: '2px 3px 10px blue',

        //    height: '300px',
            width: '90%',
        border: '1px solid',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
    },
    table: {
          width: '100%',
        fontWeight: 'bold',
        '& .MuiTableCell-alignRight': {
            fontWeight: 'bold',
            color: '#858585',
            fontSize: '12px'
        }
    },
    status: {
        fontWeight: 'bold',
        fontSize: '10px',
        color: 'white',
        backgroundColor: 'black',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    },
    payBtn: {
        fontWeight: 'bold',
        fontSize: '10px',
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
        // boxShadow: '2px 3px 10px blue',

        border: 'unset',

        "& .MuiTableRow-root": {

        },

        "&.MuiTableCell-body": {
            color: 'yellow',


        }
    }
})
function Dashboard() {
    const classes = useStyles();
    return (
<>

        <Box className={classes.dashboardpage}>

            <Box className={classes.cardbox}>
                <Card className={classes.Card}>
                    <Box className={classes.CardMedia}>
                        <CardMedia
                            className={classes.CardMedia}
                            image='/assets/images/rounded.svg'
                        />
                    </Box>

                    <Box
                        className={classes.textcard}>

                        <Box className={classes.totaltext}>
                            <Typography><h3>Total Shopping</h3></Typography>
                        </Box>

                        <Box className={classes.wavebox}>
                            <Typography className={classes.preBox}> 22.8%</Typography>
                            <CardMedia
                                image='/assets/images/wave.svg'
                                className={classes.wave}

                            />
                        </Box>

                    </Box>


                </Card>
                <Card className={classes.Card}>
                    <Box className={classes.CardMedia}>
                        <CardMedia
                            className={classes.CardMedia}
                            image='/assets/images/rounded.svg'
                        />
                    </Box>

                    <Box
                        className={classes.textcard}>

                        <Box className={classes.totaltext}>
                            <Typography><h4>Current Balance</h4></Typography>
                        </Box>

                        <Box className={classes.wavebox}>
                            <Typography className={classes.preBox}> 22.8%</Typography>
                            <CardMedia
                                image='/assets/images/wave.svg'
                                className={classes.wave}

                            />
                        </Box>

                    </Box>
                </Card>
            </Box>
          
            <Box className={classes.root}>
                <Box className={classes.text}>
                    <Typography>Latest payment</Typography>
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

        </Box>

        
       </>
    )

};


function createData(NAME, AMOUNT, STATUS, DATE, ACTIONS) {
    return { NAME, AMOUNT, STATUS, DATE, ACTIONS };
}

const rows = [
    createData('mukesh', '100', 'Active', '12/Dec/2021', 'DeActivate'),
    createData('Asgar', '100', 'DeActive', '12/Dec/2021', 'DeActivate'),


];

export default Dashboard;