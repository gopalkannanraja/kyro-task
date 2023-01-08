import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid, TextField, Typography, InputAdornment, Button } from '@mui/material'
import {
  Person,
  AccountBoxOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined
} from '@mui/icons-material'
import './styles.css'
import { APP_COLOR, SECONDARY_COLOR, API_BASE_URL, PROFILE_UPDATE_MESSAGE, PROFILE_UPDATE_ERROR } from '../../constants'
import Notification from '../../components/Notification'


function ProfilePage({ id }) {

  const [userFields, setUserFields] = useState({})
  const [editUesrDetails, setEditUesrDetails] = useState({})
  const [notification, setNotification] = useState({ isShow: false })
  const [goDashboardNotifi, setGoDashboardNotifi] = useState(false)


  useEffect(() => {
    if(id) {
      axios.get(`${API_BASE_URL}/user?id=${id}`)
      .then(res => {
        setUserFields(res?.data ?? {})
        setEditUesrDetails(res?.data ?? {})
      })
      .catch(err => console.log(err))
    }
  }, [id])

  const onFieldChange = e => {
    const { name, value } = e?.target
    setUserFields({ ...userFields, [name]: value })
  }

  const onSubmitFunc = e => {
    e.preventDefault()
    axios.post(`${API_BASE_URL}/save-user`, userFields)
      .then(res => {
        if(res?.data?.status) {
          setNotification({
            isShow: true,
            status: "success",
            message: res?.data?.message
          })
          setEditUesrDetails(userFields)
          setUserFields({})
          setGoDashboardNotifi(true)
        } else {
          setNotification({
            isShow: true,
            status: "error",
            message: res?.data?.message
          })
        }
      })
      .catch(err => {
        setNotification({
          isShow: true,
          status: "error",
          message: err.message
        })
      })
  }

  const onResetFunc = e => {
    setUserFields(editUesrDetails)
  }

  const notificationClose = () => setNotification({...notification, isShow: false})

  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography variant='h6'>My Profile</Typography>
        <form className='form-wrapper' onSubmit={onSubmitFunc} >
          <Grid item xs={12} container spacing={2}>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  onChange={onFieldChange}
                  value={userFields?.firstname ?? ''}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  value={userFields?.lastname ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
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
                  name="displayname"
                  value={userFields?.displayname ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  value={userFields?.email ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBoxOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
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
                  name="phonenowork"
                  type="number"
                  value={userFields?.phonenowork ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='text-field'>
                <TextField
                  id="phonenohome"
                  label="Phone No (Home)"
                  name="phonenohome"
                  type="number"
                  value={userFields?.phonenohome ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocalPhoneOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
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
                  name="location"
                  type="text"
                  value={userFields?.location ?? ''}
                  onChange={onFieldChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnOutlined />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={2} style={{padding: 20}}>
            <Grid item xs={6}>
              <Button onClick={onResetFunc} variant="contained" style={{
                background: APP_COLOR,
                color: '#000'
              }}>
                Reset
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button type='submit' variant="contained" style={{
                background: SECONDARY_COLOR,
                color: '#fff'
              }}>
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Notification 
        isShow={notification.isShow}
        handleClose={notificationClose}
        message={notification.message}
        status={notification.status}
        />
      <div className='go-to-dashboard-notifi'>
        <Notification 
          isShow={goDashboardNotifi}
          handleClose={() => setGoDashboardNotifi(false)}
          message="Go to Dashboard see your profile details"
          status="success"
          />
      </div>
    </Grid>
  )
}

export default React.memo(ProfilePage)