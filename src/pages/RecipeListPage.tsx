import * as React from 'react';
import {
  TextField,
  Grid,
} from '@mui/material';
import { useLocation } from 'react-router-dom';


function RecipeRow() {
  return (
    <Grid container>
      <Grid item className='app-container' xs={2}>
        <img src={'sample.png'} alt='여기에 그림이 들어갈 예정'></img>
      </Grid>
      <Grid item className='app-container' xs={10}>
        버섯장조림
      </Grid>
    </Grid>
  );
}

function RecipeListPageHeader() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const style = params.get('style') || '';

  return (
    <div className='app-header'>
      <div>
        <h1>Cook and Save</h1>
      </div>
      <div className='Header-input'>
        <TextField
          fullWidth
          label={'#' + style}
          variant="outlined"
        />
      </div>
    </div>
  );
}

function RecipeListPageBody() {
  return (
    <div className='app-body'>
      {
        [1, 2, 3, 4].map((i) => <RecipeRow />)
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