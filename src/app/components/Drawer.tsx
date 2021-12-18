import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createStyles, makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';
import { Fragment, useState, useContext } from "react";
import { AuthContext } from '../../context/AuthContext'
import { Link } from "react-router-dom";

const useStyles = makeStyles(() =>
    createStyles({
        link: {
            textDecoration: "none",
            color: "black",
            fontSize: "20px",
        },
        icon: {
            color: "white"
        },
        drawer: {
            zIndex: 9999,
        },
    })
);

export const DrawerComponent: React.FunctionComponent = () => {

    const user = useContext(AuthContext)
    const [openDrawer, setOpenDrawer] = useState(false);

    const classes = useStyles();

    const CloseDrawer = () => {
        setOpenDrawer(false)
    }

    return (
        <Fragment>
            <Drawer
                open={openDrawer}
                onClose={CloseDrawer}
                anchor="right"
                className={classes.drawer}
            >
                <List sx={{ mt: 7 }}>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Link className={classes.link} to="/">Home</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Link className={classes.link} to="/about">About</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemText>
                            <ListItemIcon>
                                <ArrowForwardIosIcon />
                            </ListItemIcon>
                            <Link className={classes.link} to="/login">{user ? 'User' : 'Login'}</Link>
                        </ListItemText>
                    </ListItem>
                    <ListItem onClick={CloseDrawer}>
                        <ListItemIcon>
                            <ArrowForwardIosIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Link className={classes.link} to="/contactsUs">Contact us</Link>
                        </ListItemText>
                    </ListItem>
                    {
                        user
                            ? (
                                <ListItem onClick={CloseDrawer}>
                                    <ListItemIcon>
                                        <ArrowForwardIosIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Link className={classes.link} to="/tickets">Tickets</Link>
                                    </ListItemText>
                                </ListItem>
                            )
                            : ''
                    }
                </List>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </Fragment>
    );
}