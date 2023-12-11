import * as React from 'react';
import {
  TextField,
  Grid,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import { CommonHeader } from '../components/CommonHeader';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';
import {
  RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  STYLES_PAGE_PATH,
  REPORT_PAGE_PATH,
} from '../App';
// import { useGetNewsTrendsQuery } from '../app/newsApi';

interface RecipeRowProps {
  recipe: Recipe;
}

function RecipeRow({ recipe }: RecipeRowProps) {
  const navigate = useNavigate();


  return (
    <Paper onClick={(e) => navigate(RECIPE_PAGE_PATH + `/${recipe.id}`)}>
      <Grid container>
        <Grid item className='app-container' xs={2}>
          <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
        </Grid>
        <Grid item className='app-container' xs={10}>
          <p>
            {recipe.name}
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}

function RecipeListPageBody() {
  const recipes = getRecipes();

  return (
    <div className='app-body'>
      {
        recipes.map((recipe, i) => <RecipeRow recipe={recipe} />)
      }
    </div>
  );
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

export default function RecipeListPage() {
  return (
    <div>
      <CommonHeader />
      <RecipeListPageBody />
      <HomePageFooter />
    </div>

  );
}