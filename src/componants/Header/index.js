import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Toolbar: {
       
        borderBottom: '2px solid black',
        display: 'flex',
        justifyContent: 'space-Between',
        paddingLeft: '60px',
        paddingRight:    '60px',
        background:' #FAF0E6',
        // boxShadow:   '2px 3px 20px #858585',




    },
    leftSection: {
        height: '40px',
        width: '300px',
        alignItems: 'center'
        ,
        // border: '1px solid black',

        '& .MuiAvatar-root': {

            borderRadius: 'unset',
            overflow: 'unset'

        }

    },

    rightSection: {
        height: '50px',
        width: '250px',
        // border: '2px solid black',
        display: 'flex',
        justifyContent: 'space-Around',
        alignItems: 'center'


    },
    name: {
        textAlign: 'center',
      width: '100px',
        // border: '1px solid black',
        '& .MuiTypography-body1': {
            fontSize: '12px',
            textAlign: 'center',
              color: theme.palette.text.primary,
              fontStyle: theme.typography.poppinsBold,
      fontWeight: 'bold',

              




        }


    },
    pic: {
        height: '50px',
        width: '50px',
        // border: '1px solid black',
        borderRadius: '50%',


    }


}))


export default function Header() {
    const classes = useStyles();
    return (
        <AppBar 
        color = 'defualt'
        position="static">
            <Toolbar className={classes.Toolbar} >
                <Box className={classes.leftSection}> <Avatar src='assets/images/leftloco.svg' className={classes.leftSection} /></Box>
                <Box className={classes.rightSection}>
                    <Box className={classes.name}>

                        <Typography> Mr Asgar </Typography>
                    </Box>
                    <Box className={classes.pic}>
                        <Avatar src='assets/images/asgar.jpeg' className={classes.pic} />
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    )
}