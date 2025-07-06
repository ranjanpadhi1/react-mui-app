import { Link, useLocation } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import Home from '../home/Home';
import About from '../about/About';
import Help from '../help/Help';

export const mainListItems = [
  { text: 'Home', path: '/', icon: <HomeRoundedIcon />, component: <Home/>},
  { text: 'About', path: '/about', icon: <AssignmentRoundedIcon />, component: <About/> },
  { text: 'Help', path: '/help', icon: <HelpRoundedIcon />, component: <Help/> }
];

const secondaryListItems: any[] = [
  // { text: 'Logout', icon: <SettingsRoundedIcon /> },
  // { text: 'About', icon: <InfoRoundedIcon /> },
  // { text: 'Feedback', icon: <HelpRoundedIcon /> },
];
// ... other imports

export default function MenuContent() {
  const location = useLocation(); // 👈 Get current route path

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              to={item.path}
              selected={location.pathname === item.path} // 👈 Highlight current
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: 'block' }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
