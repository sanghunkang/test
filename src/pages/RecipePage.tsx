import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipePage.css';

// import HomeIcon from '@mui/icons-material/Home';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // 1) 요약
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'; // 2) 공유
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'; // 3) 책갈피
// import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'; // 3) 책갈피
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'; // 4) 노트보기
import CircularProgress from '@mui/material/CircularProgress';
import {
  Box,

  Button,
  Divider,
  Grid,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  RECIPE_PAGE_PATH,
  // HOME_PAGE_PATH,
  // STYLES_PAGE_PATH,
  // REPORT_PAGE_PATH,
} from '../App';
import { useGetRecipesQuery } from '../app/newsApi';
import { Recipe } from '../app/types';

function RecipeDetails() {
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const navigate = useNavigate();
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

  const recipeId = parseInt(parts[parts.length - 1]); // FIXME
  const recipe = data.filter((recipe) => recipe.id == recipeId)[0]; // FIXME
  const ingredients = recipe.ingredients.join(',')
  console.log(recipeId, recipe);

  return (
    <div>
      <div className='Banner'>
        <div className='app-container'>
          <img src={recipe.img || '../sample.png'} alt='여기에 그림이 들어갈 예정' />
        </div>
      </div>
      <div className='recipe-details'>
        <p>
          심심함을 달래기 위한 텍스트
        </p>
        <h1>
          {recipe.name}
        </h1>
        <Grid container>
          <Grid item xs={3}>
            <h3>난이도</h3>
          </Grid>
          <Grid item xs={3}>
            <p>{recipe.level}</p>
          </Grid>
          <Grid item xs={3}>
            <h3>배달비용</h3>
          </Grid>
          <Grid item xs={3}>
            <p>{50000}원</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={3}>
            <h3>조리시간</h3>
          </Grid>
          <Grid item xs={3}>
            <p>{recipe.time}</p>
          </Grid>
          <Grid item xs={3}>
            <h3>요리비용</h3>
          </Grid>
          <Grid item xs={3}>
            <p>{7000}원</p>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={(e) => navigate(RECIPE_PAGE_PATH + `?query=${recipe.ingredients.join(',')}`)}>
              <h3>남은 재료 레시피</h3>
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          {
            recipe.ingredients.map((ingredient, i) => {
              return (
                <Grid item xs={6}>
                  <h3>{ingredient.name}</h3>
                  <p>{ingredient.amount}</p>
                </Grid>
              );
            })
          }
        </Grid>
        <Divider />
        <Grid container>
          {
            recipe.steps.map((step, i) => {
              return (
                <React.Fragment>
                  <Grid xs={3}>
                    <h3>Step {i + 1}</h3>
                  </Grid>
                  <Grid xs={9}>
                    <p>{step}</p>
                  </Grid>
                </React.Fragment>
              );
            })
          }
        </Grid>
      </div >
    </div >
  );
}

function RecipePageFooter() {
  // const navigate = useNavigate();
  return (
    <Grid container className='Footer'>
      <Grid item xs={3} spacing={2}>
        <div>
          <DescriptionOutlinedIcon sx={{ fontSize: '32px' }} />
        </div>
        <div>
          요약
        </div>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <div>
          <ShareOutlinedIcon sx={{ fontSize: '32px' }} />
        </div>
        <div>
          공유
        </div>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <div>
          <BookmarkBorderOutlinedIcon sx={{ fontSize: '32px' }} />
        </div>
        <div>
          책갈피
        </div>
      </Grid>
      <Grid item xs={3} spacing={2}>
        <div>
          <TextsmsOutlinedIcon sx={{ fontSize: '32px' }} />
        </div>
        <div>
          노트보기
        </div>
      </Grid>
    </Grid>
  );
};

export default function RecipePage() {

  return (
    <div>
      <RecipeDetails />
      <RecipePageFooter />
    </div>
  );
}