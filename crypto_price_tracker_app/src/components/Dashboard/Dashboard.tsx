import React, { useState, useEffect} from "react";
import { Drawer as MUIDrawer,
    ListItem, 
    List, 
    ListItemText, 
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    Button,
    CssBaseline, 
    Box,
    Dialog, // new item
    DialogActions, // new item
    DialogContent, // new item
    DialogContentText, // new item
    DialogTitle // new item
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { ChevronRight,ChevronLeft } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../Theme/theme";
import axios from 'axios';
import { ListCoins } from "../../api";
import { DataTable } from "../DataTable";
import { BarChart } from "../Charts";






const drawerWidth = 240;

const myStyles = {
    appBar : {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        width: drawerWidth,
        alignItems: 'center',
        padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
        marginLeft: 0,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
    }),
        marginLeft: 0,
    },
    toolbar:{
        display: 'flex',
    },
    toolbar_button: {
        marginLeft: 'auto',
        backgroundColor: theme.palette.primary.contrastText
    }
    };


export const Dashboard = () => {
    // const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleDialogClickOpen = () => {
        setDialogOpen(true);
    }
    
    const handleDialogClickClose = () => {
        setDialogOpen(false);
    }
    const itemsList = [
    {
        text: 'Home',
        onClick: () => navigate('/')
    },
    {
        text: 'Chart',
        onClick: () => navigate('/Chart')
    },

    {
        text: 'Decentralized App',
        onClick: () => navigate('/Dapp')
    },

    {
        text: 'Sign Out',
        onClick: () => navigate('/signin')
    },

    ]
    // useEffect(() => {
    //     axios
    //         .get(ListCoins())
    //         .then(response => {
    //             setCoins(response.data);
    //             console.log(response.data);
    //         })
    //             .catch(error => console.log(error));
    //     }, []);


    return (
        <Box sx={{display:'flex'}} >
            <CssBaseline />
            <AppBar
            sx={open ? myStyles.appBarShift : myStyles.appBar } 
            position="fixed"
            >
            <Toolbar sx={myStyles.toolbar}>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={ open ? myStyles.hide : myStyles.menuButton }
            >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap> Crypto Currency Dashboard</Typography>
                {/* <Button sx={myStyles.toolbar_button} onClick={handleDialogClickOpen}>Connect MetaMask</Button> */}

            </Toolbar>
            </AppBar>
            <MUIDrawer
            sx={open ? myStyles.drawer : myStyles.hide}
            variant="persistent"
            anchor="left"
            open={open}
            style={{width:drawerWidth}}
            >
            <Box
                sx={myStyles.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
                </IconButton>
            </Box>
            <Divider />
            <List>
            {itemsList.map((item, index) => {
                const { text, onClick } = item;
                return (
                <ListItem button key={text} onClick={onClick}>
                <ListItemText primary={text} />
                </ListItem>
                );
            })}
            </List>
            </MUIDrawer>
            <Box sx={ myStyles.content } >
            <Box sx={ myStyles.drawerHeader }/>
    
            <h1>Crypto Currency by Total Market Cap</h1>
            
 
      <DataTable />
      <br />
      <br />
      {/* <BarChart /> */}
      
     
        
            
        
            </Box>
        </Box>
        )
    };