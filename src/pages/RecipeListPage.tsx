import * as React from 'react';
import {
  Box,
  TextField,
  Grid,
  Paper,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CommonHeader } from '../components/CommonHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import { Recipe } from '../app/types';
import {
  RECIPE_PAGE_PATH
} from '../App';
import { useGetRecipesQuery } from '../app/newsApi';

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
  const { data, isLoading } = useGetRecipesQuery({ search: '짬뽕' });
  // console.log(data);
  if (isLoading || !data) {
    return (
      <Box sx={{
        p: 3, textAlign: 'center'
      }}>
        <CircularProgress />
      </Box >
    );
  }

  const recipes = data;

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