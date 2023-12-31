import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

import ShowChartIcon from '@mui/icons-material/ShowChart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { NEWS_TRENDS_PATH, SENTIMENT_TRENDS_PATH } from '../App';

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const navigate: Function = useNavigate();
  const { pathname } = useLocation();

  const menus = [
    {
      title: 'News Trends',
      path: NEWS_TRENDS_PATH,
      icon: <ShowChartIcon />,
    },
    {
      title: 'Sentiment Trends',
      path: SENTIMENT_TRENDS_PATH,
      icon: <FavoriteIcon />,
    },
  ]

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          New Analytics
        </ListItem>
        {
          menus.map(({ title, path, icon }) => (
            <ListItem key={path} sx={{ ...item, ...itemCategory }}>
              <ListItemButton
                selected={pathname === path}
                onClick={() => {
                  navigate(path)
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
}
