import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import label from '/public/images/label2.png'
import Link from 'next/link';


const pages = [
  {
    text: `НА ГЛАВНУЮ `,
    href: '/admin'
  },

];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const AdminBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"
      sx={{
        display: 'flex', alignItems: 'center', fontFamily: 'Roboto',
        backgroundColor: '#0c54a0;', color: 'white',
        boxShadow: 'box-shadow: 1px 7px 8px 0px rgba(34, 60, 80, 0.2)',
        borderTop:'solid 2px#366aa3'
      }}>
      <Container maxWidth="xl" sx={{ display: 'flex', alignItems: 'center' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: 'white', alignItems: 'center' }}
          >
            {/* <Link href={'/admin'}>
              <Typography sx={{

                textDecoration: 'none',
                fontSize: '30px',
                cursor: 'pointer',
                fontFamily: 'Roboto',
                color: '#0ff', // Цвет текста
                textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff', // Стили тени текста
                animation: 'pulse 2s infinite', // Анимация пульсации текста
                '@keyframes pulse': {
                  '0%': {
                    opacity: 0.2,
                    textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
                  },
                  '50%': {
                    opacity: 1,
                    textShadow: '0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff, 0 0 80px #0ff',
                  },
                  '100%': {
                    opacity: 0.2,
                    textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
                  },
                },
              }}>
                ADMIN
              </Typography>
            </Link> */}
            <Link href={'/'}>
              <div className="label"></div>
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"

            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.href} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: 'white', textDecoration: 'none' }}>
                    <Link href={'/'}><span style={{ color: 'white' }}>{page.text}</span></Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              fontFamily: 'Roboto',
              fontSize: '24px', // Размер шрифта
              color: '#0ff', // Цвет текста
              textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff', // Стили тени текста
              animation: 'pulse 2s infinite', // Анимация пульсации текста
              '@keyframes pulse': {
                '0%': {
                  opacity: 0.2,
                  textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
                },
                '50%': {
                  opacity: 1,
                  textShadow: '0 0 20px #0ff, 0 0 40px #0ff, 0 0 60px #0ff, 0 0 80px #0ff',
                },
                '100%': {
                  opacity: 0.2,
                  textShadow: '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff',
                },
              },
            }}
          >
            Arkont ADMIN
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: '10px', color: 'white' }}>
            {pages.map((page) => (
              <Link href={page.href} key={page.text}>
                <Typography
                  key={page.href}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', cursor: 'pointer' }}
                >
                  {page.text}
                </Typography>
              </Link>)
            )
            }
          </Box>
        </Toolbar>
      </Container>
      <style jsx>{` 
        .label {
          width: 200px;
          height: 40px;
          background-image: url('${label.src}');
          background-repeat:no-repeat;
          background-size:contain;
          cursor: pointer;
        }
      `}</style>
    </AppBar>
  );
};
export default AdminBar;


