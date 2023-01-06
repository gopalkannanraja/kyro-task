import { Box, Card, CssBaseline, Drawer, Grid, IconButton, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import { RIGHT_DRAWER_WIDTH } from '../../constants';


export default function RightSideBar() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: RIGHT_DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: RIGHT_DRAWER_WIDTH,
            backgroundColor: '#f8f8f8'
          },
        }}
        variant="persistent"
        anchor="right"
        open={true}
      >
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}>
          <Grid style={{position: 'relative', top: -30}}>
            <img alt="user" src={require('../../assets/2.jpg')} style={{borderRadius: 15}} />
            <IconButton style={{ position: 'relative', top: -20, left: -25 }} color="primary" aria-label="upload picture" component="label">
              <input hidden accept="image/*" type="file" />
              <Card style={{
                width: 38,
                height: 35,
                color: '#7a86a1',
                borderRadius: 8
              }}>
                <PhotoCamera style={{position: 'relative', top: 4}}/>
              </Card>
            </IconButton>
          </Grid>
          <Grid style={{position: 'relative', left: -20, top: -30}}>
            <Typography
              component="div"
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: 500,
                textAlign: 'center'
              }}
              variant="subtitle1"
            >
              Adam Levine
            </Typography>
            <Typography
              style={{
                color: '#7a86a1',
                fontSize: 12
              }}
              component="div"
              variant="subtitle2"
            >
              adamlevine@kyro.us
            </Typography>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}