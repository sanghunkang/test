import * as React from 'react';
import {
  TextField,
  Grid,
  Paper,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';
import {
  HOME_PAGE_PATH,
} from '../App';
// import { useGetNewsTrendsQuery } from '../app/newsApi';

interface RecipeRowProps {
  recipe: Recipe;
}

function RecipeRow({ recipe }: RecipeRowProps) {



  return (
    <Paper>
      <Grid container>
        <Grid item className='app-container' xs={2}>
          <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
        </Grid>
        <Grid item className='app-container' xs={10}>
          <a href={`/recipe/${recipe.id}`}>
            {recipe.name}
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}

function RecipeListPageHeader() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('query') || '';


  // const { data, isLoading } = useGetNewsTrendsQuery({ search: search });
  // console.log(data);


  return (
    <div className='app-header'>
      <div onClick={(e) => navigate(HOME_PAGE_PATH)}>
        <h1>Cook and Save</h1>
      </div>
      <div className='Header-input'>
        <TextField
          fullWidth
          label={'#' + query}
          variant="outlined"
        />
      </div>
    </div>
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
      <RecipeListPageHeader />
      <RecipeListPageBody />
    </div>

  );
}