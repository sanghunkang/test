import * as React from 'react';
import './RecommendationPage.css';

// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
// import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import {
  Box,
  Paper,
  Grid,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { CommonHeader } from '../components/CommonHeader';
import { useLocation } from 'react-router-dom';
import { Recipe } from '../app/types';
import { useGetRecipesQuery } from '../app/newsApi';
import { HomePageFooter } from './HomePage';


interface PlatingProps {
  recipe: Recipe;
}

function Plating({ recipe }: PlatingProps) {
  const comments = [1];
  const likes = 23;

  return (
    <Paper>
      <div className='plating'>
        {/* <iframe
          title="https://www.instagram.com/p/CzgUI6sxFwU/embed/"
          src="https://www.instagram.com/p/CzgUI6sxFwU/embed/"
          width="100%"
        // height="600" scrolling="no" 
        >

        </iframe> */}

        <div className='app-container'>
          <img src={recipe.url} alt='여기에 그림이 들어갈 예정'></img>
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
  const { search, pathname } = useLocation();
  const parts = pathname.split('/');
  const params = new URLSearchParams(search);

  const queryParams = {
    menu: params.get('menu') || '',
    theme: params.get('theme') || '',
    ingredients: params.get('ingredients') || '',
  }
  // const searchText = params.get('menu') || params.get('ingredients') || '';
  console.log(queryParams)
  const { data, isLoading } = useGetRecipesQuery(queryParams);

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
      < HomePageFooter />

    </div>
  )

}