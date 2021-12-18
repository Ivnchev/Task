import { createStyles, makeStyles } from '@mui/styles';
import { useContext } from 'react';
import logo from '../../images/PP-logo.png';
import { DrawerComponent } from './Drawer';
import { Link } from "react-router-dom";
import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { AuthContext } from '../../context/AuthContext'

const useStyles = makeStyles((theme) => createStyles({

    toolbar: {
        justifyContent: 'space-between',
        background: '#ffffff',
    },
    logo: {
        flexGrow: 'initial',
        cursor: 'pointer',
        maxHeight: '50px',
        paddingTop: '3px',
        width: 'auto',
        imageRendering: 'crisp-edges',
    },
    appBar: {
        zIndex: '9999!important' as any,
        width: '100%'
    },
    userLogo: {
        color: 'gray',
        marginTop: '.5rem'
    },
    menuWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '5rem'
    }

}));

export const Navigation: React.FunctionComponent = () => {

    const user = useContext(AuthContext)
    const classes = useStyles();

    return (
        <AppBar position='sticky' className={classes.appBar}>
            <CssBaseline />
            <Toolbar className={classes.toolbar}>
                <Link to="/" >
                    <img className={classes.logo} src={logo} alt="logo" />
                </Link>
                <div className={classes.menuWrapper}>
                    <Link to="/login" >
                        {
                            user
                            ? (<AccountBoxIcon className={classes.userLogo} />)
                            : (<MeetingRoomIcon className={classes.userLogo} />)
                        }
                        
                    </Link>
                    <DrawerComponent />
                </div>
            </Toolbar>
        </AppBar >
    );
}