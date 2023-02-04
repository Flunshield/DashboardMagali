
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Link, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import '../Css/Header.css';
import { Link as RouterLink } from 'react-router-dom';
import image from '../logo_Magali.png';
import { useKeycloak } from '@react-keycloak/web';
import BouttonLog from './BouttonLog';

interface HeadBandProps {
  window?: () => Window;
}

type NavRoute = {
  route: string;
  label: string;
  displayLink: boolean;
};

export default function Header(props: HeadBandProps) {

  const { keycloak } = useKeycloak();
  const isLoggin = keycloak.authenticated
  const navItems: NavRoute[] = [
    {
      route: '/NewConsultation',
      label: 'Nouvelle Consultation',
      displayLink: isLoggin ?? false,
    },
    {
      route: '/Follow-up-consultation',
      label: 'Consultation de suivi',
      displayLink: isLoggin ?? false,
    },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List className='list'>
        {navItems.map(
          (item) =>
            item.displayLink && (
              <ListItem key={item.route} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText
                    primary={
                      <Link component={RouterLink} to={item.route} className='Btn'>
                        {item.label}
                      </Link>
                    }
                  />
                </ListItemButton>
              </ListItem>
            )
        )}
        {isLoggin && <BouttonLog />}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className='Composant'>
      <AppBar component="nav" className='BackGround Composant'>
        <Toolbar>
          <Box>
           <a href='/'>
            <img src={image} alt="logo" className='logo'/>
           </a>
          </Box>
          <Box>
            <Typography
              textAlign={'left'}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              {drawer}
            </Typography>
            
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}