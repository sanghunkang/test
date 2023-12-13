import * as React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
// import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';

import {
  Grid,
  Paper,
  // TextField,
} from '@mui/material';

import {
  RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  STYLES_PAGE_PATH,
  REPORT_PAGE_PATH,
} from '../App';
import { useNavigate } from 'react-router-dom';

export function HomePageFooter() {
    const navigate = useNavigate();
  
    return (
      <Grid container className='app-footer'>
        <Grid item xs={3}>
          <div>
  
            <HomeIcon
              sx={{ fontSize: '32px' }}
              onClick={(e) => { navigate(HOME_PAGE_PATH) }}
            />
          </div>
          <div>
            홈
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
  
            <RestaurantOutlinedIcon
              sx={{ fontSize: '32px' }}
              onClick={(e) => { navigate(RECIPE_PAGE_PATH) }}
            />
          </div>
          <div>
            재료별
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
  
            <TagOutlinedIcon
              sx={{ fontSize: '32px' }}
              onClick={(e) => { navigate(STYLES_PAGE_PATH) }}
            />
          </div>
          <div>
            테마별
          </div>
        </Grid>
        <Grid item xs={3}>
          <div>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: '32px' }}
              onClick={(e) => { navigate(REPORT_PAGE_PATH) }}
            />
          </div>
          <div>
            절약리포트
          </div>
  
        </Grid>
      </Grid>
    );
  };