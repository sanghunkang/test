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
import { CommonHeader } from '../components/CommonHeader';
import { useLocation } from 'react-router-dom';
import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';

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
      <CommonHeader />
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