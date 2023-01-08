import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  IconButton,
  Button,
  Grid,
  ListItem,
  ListItemText,
} from '@mui/material'
import { MenuRounded, Add } from "@mui/icons-material"
import { Routes, Route, Link } from 'react-router-dom'
import AppBar from './components/AppBar'
import DrawerHeader from './components/DrawerHeader'
import Drawer from './components/Drawer'
import { APP_COLOR, MENU_LIST, SECONDARY_COLOR } from './constants';
import MenuItem from './components/MenuItem'
import ProfilePage from './containers/ProfilePage'
import RightSideBar from './components/RightSideBar'
import Dashboard from './containers/Dashboard'


const open = true;

function App() {

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar elevation={0} position="fixed" open={open}>
          <Toolbar>
            <Grid container spacing={2} style={{ paddingTop: 20 }}>
              <Grid item xs={7}>
                <Typography style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: 500
                }} noWrap component="div">
                  Good Morning, Adam
                  <Typography
                    style={{
                      color: APP_COLOR,
                      fontSize: 12
                    }}
                    component="p">April 28, 2022</Typography>
                </Typography>
              </Grid>
              <Grid item xs={5} style={{ backgroundColor: '#f8f8f8' }}>
                <Grid container spacing={2}>
                  <Grid item xs={5}>
                    <Button variant="contained" style={{
                      background: SECONDARY_COLOR,
                      color: '#fff'
                    }} startIcon={<Add />}>
                      Add Project
                    </Button>
                  </Grid>
                  <Grid item xs={7} style={{ position: 'relative', top: -14 }}>
                    <ListItem alignItems="flex-start">
                      <img alt="user" style={{ width: 50, borderRadius: 15 }} src={require('./assets/1.jpg')} />
                      <ListItemText
                        primary="Adam"
                        style={{
                          color: '#000',
                          fontSize: 16,
                          fontWeight: 500,
                          paddingLeft: 20
                        }}
                        secondary={
                          <>
                            <Typography
                              sx={{
                                display: 'inline',
                                color: APP_COLOR,
                                fontSize: 12
                              }}
                              component="span"
                              variant="body2"
                            >
                              Project Mannager
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Link to="/">
              <img alt="logo" style={{ position: 'relative', right: -20 }} src={require('./assets/kyro-logo.jpg')} height="65" />
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                marginRight: 5,
                position: 'relative',
                right: -30
              }}
            >
              <MenuRounded />
            </IconButton>
          </DrawerHeader>
          <List>
            {MENU_LIST.map(text => <Link key={text} to={`/${text}`}>
              <MenuItem text={text} open={open} />
            </Link>)}
          </List>
          <div style={{
            position: 'relative',
            bottom: -60
          }}>
            <MenuItem key="Logout" text="Logout" open={true} />
          </div>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path='/' element={<ProfilePage />} />
            <Route path='/home' element={<ProfilePage />}>
              <Route path=':id' element={<ProfilePage />} />
            </Route>
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Box>
      </Box>
      <RightSideBar />
    </>
  )
}

export default App
