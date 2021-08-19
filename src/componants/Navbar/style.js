import React from 'react';
import { makeStyles } from '@material-ui/core';;

const useStyles = makeStyles( theme => ({
    Box: {

        width: '50%',
        marginTop: '90px',
        marginRight: 'auto',
        marginLeft: 'auto',
        boxShadow: '2px 3px  10px ',
        background: 'white'

    },
    Tabs: {
        // boxShadow:   '2px 3px 30px #858585',
        border: '1px solid',
        height:"auto",
        width: '100%',
        justifyContent:"space-Between",
        display:"flex",
        '& .MuiTab-root': {
            minWidth: `calc(100% /6)`,
            fontSize: '7.5px',
            fontWeight:'bold',
            color: '#858585',
             fontStyle: theme.typography.poppinsBold,
        },

        "& .PrivateTabIndicator-root-19": {
            background: 'black'
        },

    },
    tab: {
        width:"24px",
        justifyContent:"space-Between",
        
        "& .MuiAvatar-img": {
            width: '24px',
            height: 'auto',

        },


    }



}));
export default useStyles;
