
import { Box, Typography, List, ListItem, ListItemButton, ListItemText, Link, AppBar, Toolbar } from '@mui/material';
import React from 'react';
import '../Css/Header.css';
import { Link as RouterLink } from 'react-router-dom';
import image from '../logo_Magali.png';

interface HeadBandProps {
  window?: () => Window;
}

type NavRoute = {
  route: string;
  label: string;
  displayLink: boolean;
};

export default function Header(props: HeadBandProps) {

  const navItems: NavRoute[] = [
    {
      route: '/',
      label: 'Accueil',
      displayLink: true,
    },
    {
      route: '/newConsultation',
      label: 'Nouvelle Consultation',
      displayLink: true,
    },
    {
      route: '/Follow-up-consultation',
      label: 'Consultation de suivi',
      displayLink: true,
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
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }} className='Composant'>
      <AppBar component="nav" className='BackGround Composant'>
        <Toolbar>
          <Box>
            <img src={image}className='logo' />
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