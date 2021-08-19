import React from 'react';
import { Box, makeStyles, Tabs, Tab, Avatar } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import useStyles from './style';
import Credit from '../../pages/Credit';
import Dashboard from '../../pages/Dashboard';
import Shoping from '../../pages/Shoping';
import Debit from '../../pages/Debit';
import Paydue from '../../pages/Paydue';
import Addmembers from '../../pages/Addmembers';





const array = [

    {
        label: 'Dashboard',
        icon: <Avatar variant="square" src="/assets/images/dashboardicon.svg" />
    },
    {
        label: 'Credit',
        icon: <Avatar src="/assets/images/credit.svg" />
    },
    {
        label: 'Debit',
        icon: <Avatar src="/assets/images/debit.svg" />
    },
    {
        label: 'Paydue',
        icon: <Avatar src="/assets/images/paydue.svg" />
    },
    {
        label: 'Shoping',
        icon: <Avatar src="/assets/images/shoping.svg" />
    },
    {
        label: 'Addmembers',
        icon: <Avatar src="/assets/images/addmembers.svg" />
    }
];



function Tabpanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && <div>{children}</div>
            }

        </div>
    )

}











export default function Navbar() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
          setValue(newValue);
    }

    return (
        <Box className={classes.Box}>
            <Tabs
                className={classes.Tabs}
                value={value}
                onChange={handleChange}
            >
                  {array.map((obj) => (
                    <Tab className={classes.tab} label={obj.label}
                        icon={obj.icon}>
                    </Tab>
                ))}
            </Tabs>


            <Tabpanel value={value} index={0}  >
                <Dashboard />
            </Tabpanel>

            <Tabpanel value={value} index={1}  >
                <Credit />
            </Tabpanel>

            <Tabpanel value={value} index={2}  >
                <Debit />
            </Tabpanel>

            <Tabpanel value={value} index={3}  >
                <Paydue />
            </Tabpanel>

            <Tabpanel value={value} index={4}  >
                <Shoping />
            </Tabpanel>
            <Tabpanel value={value} index={5}  >
                <Addmembers />
            </Tabpanel>




        </Box>
    )
}
