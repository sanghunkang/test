import * as React from 'react';
import {
  TextField,
  Grid,
  Paper,
} from '@mui/material';
import { CommonHeader } from '../components/CommonHeader';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';
import {
  RECIPE_PAGE_PATH
} from '../App';
// import { useGetNewsTrendsQuery } from '../app/newsApi';

interface RecipeRowProps {
  recipe: Recipe;
}

function RecipeRow({ recipe }: RecipeRowProps) {
  const navigate = useNavigate();


  return (
    <Paper>
      <Grid container>
        <Grid item className='app-container' xs={2}>
          <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
        </Grid>
        <Grid item className='app-container' xs={10}>
          <p onClick={(e) => navigate(RECIPE_PAGE_PATH + `/${recipe.id}`)}>
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

export default function RecipeListPage() {
  return (
    <div>
      <CommonHeader />
      <RecipeListPageBody />
    </div>

  );
}