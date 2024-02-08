
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import SwapVerticalCircleIcon from '@mui/icons-material/SwapVerticalCircle';
import BalanceIcon from '@mui/icons-material/Balance';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import DarkModeSwitch from '../darkmode/DarkModeSwitch';


export default function Navbar() {
  const darkMode = useSelector((state: any) => state.darkMode.darkMode);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('xl'));

  const handleMobile = () => {
    setMobileOpen(!mobileOpen);
  };

  const navRoutes = [
    { path: '/', name: 'In- och utleveranser', icon: <SwapVerticalCircleIcon /> },
    { path: '/inventories', name: 'Lagersaldo', icon: <BalanceIcon /> },
    { path: '/warehouses', name: 'Lager', icon: <WarehouseIcon /> },
    { path: '/products', name: 'Produkter', icon: <QrCode2Icon /> }
  ];

  return (
    <nav>
        <AppBar position="static" style={{ backgroundColor: darkMode ? 'black' : '#E8E8E8' }}>
          <Toolbar>
            <Grid container justifyContent="flex-start" alignItems="center">
              <Grid item>
                {isMobile 
                ? 
                <IconButton edge="start" onClick={handleMobile}>
                    <MenuIcon />
                  </IconButton>
                :
                  <NavLink to='/'>
                    <Avatar alt="Päron AB" src="https://i.ibb.co/WP1fLYk/favicon.png" />
                  </NavLink>
                }
              </Grid>
              <Grid item>
                <Typography color="text.primary" className='navlink' style={{ marginLeft: '0.5rem' }}>Päron AB</Typography>
              </Grid>
            </Grid>
            {!isMobile
            &&
              <Grid container justifyContent="center">
                {navRoutes.map((route) => (
                  <Grid item key={route.path}>
                    <NavLink to={route.path}>
                      <Button>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item><Typography color="text.primary" className='navlink'>{route.icon}</Typography></Grid>
                          <Grid item><Typography color="text.primary" className='navlink'>{route.name}</Typography></Grid>
                        </Grid>
                      </Button>
                    </NavLink>
                  </Grid>
                ))}
              </Grid>
            }
            {!isMobile
            &&
            <Grid container justifyContent="flex-end">
                <Grid item>
                  <DarkModeSwitch />
                </Grid>
            </Grid>
            }
          </Toolbar>
        </AppBar>
        <Drawer open={mobileOpen} onClose={handleMobile}>
          <Grid container direction="column" alignItems="center" sx={{ p: 2 }}>
            <Grid item>
              <Avatar alt="Päron AB" src="https://i.ibb.co/WP1fLYk/favicon.png" />
            </Grid>
            <Grid item>
              <Typography color="text.primary" sx={{ mt: 1 }}>
                Päron AB
              </Typography>
            </Grid>
          </Grid>
          <Divider />
            <List>
              {navRoutes.map((route) => (
                <ListItem key={route.path} disablePadding>
                  <ListItemButton>
                    <NavLink to={route.path}>
                      <Button>
                        <Grid container alignItems="center" spacing={1}>
                          <Grid item><Typography color="text.primary" className='navlink'>{route.icon}</Typography></Grid>
                          <Grid item><Typography color="text.primary" className='navlink'>{route.name}</Typography></Grid>
                        </Grid>
                      </Button>
                    </NavLink>
                  </ListItemButton>
                </ListItem>
              ))}
              <ListItem>
                <DarkModeSwitch />
              </ListItem>
            </List>
        </Drawer>
    </nav>
  );
};