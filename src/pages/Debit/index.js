import React from 'react';
import { Box, makeStyles, Input, Avatar, TextField, Button, Typography } from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles(theme => ({

    root: {
        height: '400px',
        border: '1px solid',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius:      '5px',
        boxShadow: '2px 3px 20px blue',

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
        boxShadow: '2px 3px 20px blue',

        height: '250px',
        width: '350px',
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
        width: '100px',
        // border: '1px solid #858585',
        borderRadius: '4px',
        display: 'flex',
        justifyContent: 'space-Between',

        '& .MuiTypography-body1': {
            fontWeight: 'bold',
            fontSize: '14px',
            color: '#858585',
            textAlign: 'center'
        },
    },
    input: {
           height: '25px',
           width: '150px',
          border: '1px solid  ',
        color: '#858585',

        borderRadius: '4px',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-End',


    },
    Input: {
        '&.MuiInput-underline:before': {
            borderBottom: 'none',
        },
        '&..MuiInput-underline:after': {
            borderBottom: 'none'

        },
        '&.MuiInput-underline:hover:not(.mui-disabled):before': {
            borderBottom: 'none'

        },
    },

    dropdown: {
        height: 'auto',
        width: 'auto',
        alignItems: 'center',
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



export default function Debit() {
    const classes = useStyles();

    const [name, setName] = React.useState();
    const handleChange = (event) => {
        setName(event);
    };

    return (
        <Box className={classes.root}>

            <Box className={classes.text}>
                <Typography>Debit</Typography>
            </Box>

            <Box className={classes.box} >
                <Box className={classes.box2}>

                    <Box className={classes.contect}>
                        <Typography>Secect User</Typography>
                    </Box>
                    <Box className={classes.input}>
                        <TextField
                            select
                            value={name}
                            onChange={handleChange}
                            className={classes.TextField}
                        >


                            {Names.map((option) => (
                                <MenuItem key={option.value} value={option.id}>
                                    {option.label}
                                </MenuItem>
                            ))}

                        </TextField>


                    </Box>
                </Box>
                <Box className={classes.box2}>
                    <Box className={classes.contect}>
                        <Typography> Etnter Amount</Typography>
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
                    <Button type='button' color='inherit' > Pay</Button>
                </Box>

            </Box>

        </Box>
    )
}