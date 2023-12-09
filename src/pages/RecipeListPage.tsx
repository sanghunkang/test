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
    <Paper style={{ marginBottom: '12px' }}>
      <Grid container spacing={2}>
        <Grid item className='app-container' xs={4}>
          <img src={recipe.img} alt='여기에 그림이 들어갈 예정' style={{ borderRadius: '12px', width: '100%' }} ></img>
        </Grid>
        <Grid item className='app-container' xs={8}>
          <a href={`/recipe/${recipe.id}`} style={{fontSize: '13px'}}>
            {recipe.name}
          </a>
          <div style={{ fontSize: '10px', marginTop: '-7px', color: 'grey' }}><br />외식비용: {recipe.outcost} <span style={{fontSize:'10px', color: 'black' }}>vs 요리비용: {recipe.selfcost}</span></div>
          <div style={{ fontSize: '12px', marginTop: '-12px', color: 'red' }}><br />절약금액: {recipe.outcost - recipe.selfcost}↓</div>
          <div style={{ fontSize: '10px',marginTop: '-3px', color: 'grey' }}><br />{`${recipe.level} | ${recipe.time}`}</div>
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
      <RecipeListPageHeader />
      <RecipeListPageBody />
    </div>

  );
}