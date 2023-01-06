import {
  Badge,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import {
  Home,
  Settings,
  GridViewRounded,
  Logout
} from "@mui/icons-material"
import { APP_COLOR, MESSAGE_COUNT, SECONDARY_COLOR } from '../../constants';

const renderMenuIcons = menu => {
  switch (menu) {
    case 'Home': return <Home style={{ color: APP_COLOR}} />;
    case 'Projects': return <img alt="project" style={{ width: 30, position: 'relative', right: 2}} src={require('../../assets/projects.jpg')} />;
    case 'Dashboard': return <GridViewRounded style={{ color: APP_COLOR }} />;
    case 'Messages': return <img alt="message" style={{ width: 30, position: 'relative', right: 2 }} src={require('../../assets/message.jpg')} />;
    case 'Documents': return <img alt="document" style={{ width: 30, position: 'relative', right: 2 }} src={require('../../assets/document.jpg')} />;
    case 'Organizations': return <img alt="organization" style={{ width: 30, position: 'relative', right: 2 }} src={require('../../assets/organization.jpg')} />;
    case 'Settings': return <Settings style={{ color: APP_COLOR }} />;
    case 'Logout': return <Logout style={{ color: APP_COLOR }} />;
    default: return;
  }
}

const MenuItem = ({text, open}) => {
  return (
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {renderMenuIcons(text)}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            opacity: open ? 1 : 0,
            left: (text === "Home" || text === "Dashboard" || text === "Settings") ? 6: 0,
            position: 'relative'
          }}
        />
        {text === "Messages" && open && <Badge
          badgeContent={MESSAGE_COUNT}
          style={{ }}
          sx={{
            "& .MuiBadge-badge": {
              color: "white",
              position: 'relative',
              left: -35,
              top: 10,
              backgroundColor: SECONDARY_COLOR,
              height: 25,
              borderRadius: 15
            }
          }}
        />}
      </ListItemButton>
    </ListItem>
  )
}

export default MenuItem