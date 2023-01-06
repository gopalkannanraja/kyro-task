import { Grid, TextField, Typography, InputAdornment, Button } from '@mui/material'
import {
  Person,
  AccountBoxOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined
} from '@mui/icons-material'
import './styles.css'
import { APP_COLOR, SECONDARY_COLOR } from '../../constants'


export default function ProfilePage() {
  return (
    <Grid container>
      <Grid>
        <Typography variant='h6'>My Profile</Typography>
        <form className='form-wrapper' >
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="firstname"
                  label="First Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="lastname"
                  label="Last Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="displayname"
                  label="Display Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="email"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="phonenowork"
                  label="Phone No (Work)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="phonenohome"
                  label="Phone No (Home)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="location"
                  label="Location"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlined />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2} style={{padding: 20}}>
            <Grid item xs={6}>
              <Button variant="contained" style={{
                background: APP_COLOR,
                color: '#000'
              }}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" style={{
                background: SECONDARY_COLOR,
                color: '#fff'
              }}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
