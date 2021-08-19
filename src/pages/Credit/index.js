import React from 'react';
import { makeStyles, Box, Typography, TextField, Avatar, Button, Input, createGenerateClassName } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';




const useStyles = makeStyles(theme => ({
    root: {
        height: '400px',
        border: '1px solid',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '2px 3px 20px blue',
        borderRadius: '5px'
    },
    text: {
        
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '60px',
        marginTop: '15px',
        color: '#858585',
        borderBottom: '1px solid',
        textAlign: 'center',
        '& .MuiTypography-body1': {
            fontWeight: 'bold',
            fontSize: '20px'

        },


    },
    box: {
        boxShadow: '2px 3px 20px red',
        height: '250px',
            width: '50%',
        border: '1px solid',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',

    },
    box2: {
        height: '40px',
           width: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '5px',
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'space-Between',
        // border: '1px solid',
        alignItems: 'center',
    },
    contect: {
        height: '25px',
        textAlign: 'center',
        width: '30%',
        // border: '1px solid #858585',
        borderRadius: '4px',

        '& .MuiTypography-body1': {
            fontWeight: 'bold',
            fontSize: '12px',
            color: '#858585',
            textAlign: 'center'
        },
    },
    input: {
        height: '25px',
           width: '150px',
        border: '1px solid ',
        color: '#858585',
        borderRadius: '4px',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-End',
    },


    Input: {

        "& .MuiInput-underline:before": {
            borderBottom: 'none'
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
            borderBottom: 'none'

        },
    },

    btn: {
        
        marginTop: '25px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '20px',
        height: '40px',
        width: '150px',
        background: 'blue',
        color: 'white',

        textAlign: 'center',
        "& .MuiButton-label": {
            fontWeight: 'bold',

        }

    },
    TextField: {

        "& .MuiInput-underline:before": {
            borderBottom: 'none'
        },
        '& .MuiInput-underline:after': {
            borderBottom: 'none'
        },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before ': {
            borderBottom: 'none'

        },
    }

}))

const Names = [
    {
        id: 0,
        label: 'Asgar ali',
    },
    {
        id: 1,
        label: 'mukes sir',
    },
    {
        id: 2,
        label: 'mohd mr Abdullah ',
    },
    {
        id: 3,
        label: 'irfan sir',
    },
    {
        id: 4,
        label: 'Nasim brother',
    },

    {
        id: 5,
        label: 'BabuSaheb',
    },
];


export default function Creid() {
    const classes = useStyles();

    const [name, setName] = React.useState();
    const handleChange = (event) => {
        setName(event);
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.text}>
                <Typography>Credit</Typography>
            </Box>

            <Box className={classes.box} >
                <Box className={classes.box2}>

                    <Box className={classes.contect}>
                        <Typography>Secect User</Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField
                            select
                            FormHelperTextProps = " select user"
                           
                            value={name}
                            onChange={handleChange}
                            className={classes.TextField}>


                            {Names.map((obj) => (
                                <MenuItem value={obj.id}>
                                    {obj.label}
                                </MenuItem>
                            ))}

                        </TextField>


                    </Box>
                </Box>
                <Box className={classes.box2}>
                    <Box className={classes.contect}>
                        <Typography> Enter Amount</Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField type = 'number' className={classes.TextField} />

                    </Box>


                </Box>
                <Box className={classes.box2}>
                    <Box className={classes.contect}>
                        <Typography>Description</Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField className={classes.TextField} />
                    </Box>


                </Box>
                <Box className={classes.btn} >
                    <Button type='button' color='inherit' > ADD</Button>
                </Box>

            </Box>

        </Box>
    )

}