import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderTitle } from '@/shared/UI/HeaderTitle/HeaderTitle';
import { Divider, List, ListItem, Stack, Typography } from '@mui/material';
import { Link } from 'react-scroll';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  justifyContent: 'space-between',
}));

export const MobileNavbar = () => {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="end"
          sx={{ mr: 2, ...(open && { display: 'none' }), color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          height: '100%',

          flexShrink: 0,
          '& .MuiDrawer-paper': {
            position: 'absolute',
            zIndex: 3,
            width: '100%',
            boxSizing: 'border-box',
            height: '100vh',
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader sx={{ height: '80px' }}>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <HeaderTitle textColor="black" />
            <IconButton onClick={handleDrawerClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Stack>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <Box width="100%" sx={{ cursor: 'pointer' }}>
              <Link
                to="section-1"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    color="gray"
                    fontFamily="Graphik"
                    fontWeight={400}
                    lineHeight="32px"
                  >
                    Как это работает?
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosOutlinedIcon />
                  </IconButton>
                </Stack>
              </Link>
            </Box>
          </ListItem>
          <Divider />
          <ListItem>
            <Box width="100%" sx={{ cursor: 'pointer' }}>
              <Link
                to="section-2"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    color="gray"
                    fontFamily="Graphik"
                    fontWeight={400}
                    lineHeight="32px"
                  >
                    3-й блок
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosOutlinedIcon />
                  </IconButton>
                </Stack>
              </Link>
            </Box>
          </ListItem>
          <Divider />
          <ListItem>
            <Box width="100%" sx={{ cursor: 'pointer' }}>
              <Link
                to="section-3"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    color="gray"
                    fontFamily="Graphik"
                    fontWeight={400}
                    lineHeight="32px"
                  >
                    Вопросы и ответы
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosOutlinedIcon />
                  </IconButton>
                </Stack>
              </Link>
            </Box>
          </ListItem>
          <Divider />
          <ListItem>
            <Box width="100%" sx={{ cursor: 'pointer' }}>
              <Link
                to="section-4"
                spy={true}
                smooth={true}
                onClick={handleDrawerClose}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    color="gray"
                    fontFamily="Graphik"
                    fontWeight={400}
                    lineHeight="32px"
                  >
                    Форма
                  </Typography>
                  <IconButton>
                    <ArrowForwardIosOutlinedIcon />
                  </IconButton>
                </Stack>
              </Link>
            </Box>
          </ListItem>
          <Divider />
        </List>
      </Drawer>
    </Box>
  );
};
