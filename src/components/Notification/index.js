import React from 'react'
import { Snackbar, IconButton } from '@mui/material'
import MuiAlert from '@mui/material/Alert'
import CloseIcon from '@mui/icons-material/Close'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Notification({ isShow, handleClose, message, status }) {
  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={isShow}
      onClose={handleClose}
      message={message}
      key="notification"
      action={action}
    >
      <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}