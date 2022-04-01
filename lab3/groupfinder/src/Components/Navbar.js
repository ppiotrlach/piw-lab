
import '../App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

function Navbar() {

    return (

        <Box sx={{ flexGrow: 1, paddingBottom: '30px' }}>
            <AppBar position="static" color="inherit">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        component={Link} to="/"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h2" component="div" sx={{ flexGrow: 1, fontFamily: 'Lucida Console', fontSize: '40px' }}>
                        group finder
                    </Typography>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/add">Add notice</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;



