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
    <Paper style={{ marginBottom: '12px' }} onClick={(e) => navigate(RECIPE_PAGE_PATH + `/${recipe.id}`)}>
      <Grid container spacing={2}>
        <Grid item className='app-container' xs={4}>
          <img src={recipe.img || 'sample.png'} alt={'x'} style={{ borderRadius: '12px', width: '100%' }} ></img>
        </Grid>
        <Grid item className='app-container' xs={8}>
          <p style={{ fontSize: '13px' }}>
            {recipe.name}
          </p>
          <div style={{ fontSize: '10px', marginTop: '-7px', color: 'grey' }}><br />외식비용: {recipe.outcost} <span style={{ fontSize: '10px', color: 'black' }}>vs 요리비용: {recipe.selfcost}</span></div>
          <div style={{ fontSize: '12px', marginTop: '-12px', color: 'red' }}><br />절약금액: {recipe.outcost - recipe.selfcost}↓</div>
          <div style={{ fontSize: '10px', marginTop: '-3px', color: 'grey' }}><br />{`${recipe.level} | ${recipe.time}`}</div>
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
      <div>
        <p style={{ fontSize: '12px' }}>{`총 `}
          <span style={{ color: 'orange', fontSize: '14px' }}>{recipes.length}</span>
          {`개 검색결과`}
        </p>
      </div>
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