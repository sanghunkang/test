import * as React from 'react';
import './HomePage.css';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
// import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import { getCategories, getRecipes, rankings } from '../app/sampleData';
import {
  Grid,
  Paper,
  // TextField,
} from '@mui/material';
import { CommonHeader } from '../components/CommonHeader';

import {
  RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  STYLES_PAGE_PATH,
  REPORT_PAGE_PATH,
} from '../App';
import { useNavigate } from 'react-router-dom';

function HomePageBody() {
  const navigate = useNavigate();
  const categories = getCategories();
  const recipes = getRecipes();

  return (
    <Grid
      className='app-body'
      container
      spacing={1.3}
    >
      {
        categories.map((category) => {
          return (
            <Grid item xs={3} key={category.name}>
              <Paper onClick={(e) => navigate(RECIPE_PAGE_PATH + `?theme=${category.theme}`)}>
                <div className='Body-category'>
                  <div className='app-container'>
                    <img src={category.img} alt='여기에 그림이 들어갈 예정'></img>
                  </div>
                  <div>
                    <h5>{category.name}</h5>
                  </div>
                </div>
              </Paper>
            </Grid>
          );
        })
      }
      <Grid item xs={12} spacing={2}>
        <Paper >
          <div className='Body-card'>
            <div>
              <h1>실시간 인기 음식 컨텐츠</h1>
            </div>
            {
              recipes.map((recipe) => {
                return (
                  <div>
                    <a href={`/recipe/${recipe.id}`}>
                      <p>{recipe.description}</p>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} spacing={2}>
        <Paper>
          <div className='Body-card'>
            <div>
              <h1>이번달 절약 이벤트</h1>
            </div>
            <Grid container>
              {
                rankings.map((ranking, i) => {
                  return (
                    <React.Fragment>
                      <Grid item xs={2}>{i + 1}</Grid>
                      <Grid item xs={5}>{ranking.name}</Grid>
                      <Grid item xs={5}>{ranking.amountSaved}</Grid>
                    </React.Fragment>
                  );
                })
              }
            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

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

export default function Home() {
  return (
    <div>
      <CommonHeader />
      <HomePageBody />
      <HomePageFooter />
    </div>
  );
}
