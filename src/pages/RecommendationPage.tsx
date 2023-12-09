import * as React from 'react';
import './RecommendationPage.css';

// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import {
  TextField,
  Paper,
  Grid,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';

function RecommendationPageHeader() {
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

interface PlatingProps {
  recipe: Recipe;
}

function Plating({ recipe }: PlatingProps) {
  const comments = [1];
  const likes = 23;

  return (
    <Paper>
      <div className='plating'>
        <div className='app-container'>
          <img src={recipe.img} alt='여기에 그림이 들어갈 예정'></img>
        </div>
        <Grid container>
          <Grid item xs={4}>
            <p>
              <ThumbUpOutlinedIcon />
              {likes}
            </p>
          </Grid>
          <Grid item xs={4}>
            <p>
              <SmsOutlinedIcon />
              {comments.length}
            </p>
          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default function RecommendationPage() {
  const recipes = getRecipes();

  return (
    <div className='recommendation-page'>
      <RecommendationPageHeader />
      <div className='app-body'>
        <Grid container>
          <Grid item xs={6}>
            {
              recipes.map((recipe, i) => {
                return i % 2 === 0 ? <Plating recipe={recipe} /> : null;
              })
            }
          </Grid>
          <Grid item xs={6}>
            {
              recipes.map((recipe, i) => {
                return i % 2 === 1 ? <Plating recipe={recipe} /> : null;
              })
            }
          </Grid>
        </Grid>
      </div>

    </div>
  )

}