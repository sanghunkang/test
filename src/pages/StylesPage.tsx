import * as React from 'react';
import './StylesPage.css';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {
  RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  STYLES_PAGE_PATH,
  RECOMMENDATION_PAGE_PATH,
  REPORT_PAGE_PATH,
} from '../App';
import { getRecipes } from '../app/sampleData';
import { CommonHeader } from '../components/CommonHeader';

interface StyleProps {
  style: string;
}

function Style({ style }: StyleProps) {
  const navigate = useNavigate();
  const recipes = getRecipes();

  return (
    <Paper className='style'>
      <Grid container spacing={1} onClick={(e) => navigate(RECOMMENDATION_PAGE_PATH + `?query=${style}`)}>
        <Grid item xs={11}>
          <h3>#{style}</h3>
        </Grid>
        <Grid item xs={1}>
          <ArrowForwardIosIcon />
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        {
          recipes.map((recipe, i) => {
            return (
              <Grid
                item
                className='style-container'
                xs={4}
                onClick={(e) => navigate(RECIPE_PAGE_PATH + `/${recipe.id}`)}
              >
                <div className='app-container'>
                  <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
                </div>
              </Grid>
            )
          })
        }
      </Grid>
    </Paper >
  )
}

function StylesPageBody() {
  const styles = [
    '직전 요리와 연관성 높은 요리',
    '안주',
    '다이어트',
  ]

  return (
    <div className='app-body'>
      {
        styles.map((style) => <Style style={style} />)
      }

    </div>
  )
}

function HomePageFooter() {
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



export default function StylesPage() {


  return (
    <div>
      <CommonHeader />
      <StylesPageBody />
      <HomePageFooter />
    </div>
  )

}