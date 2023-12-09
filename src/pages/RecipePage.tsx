import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipePage.css';

// import HomeIcon from '@mui/icons-material/Home';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // 1) 요약
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'; // 2) 공유
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'; // 3) 책갈피
// import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'; // 3) 책갈피
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'; // 4) 노트보기
import {
  Button,
  Grid,
} from '@mui/material';

// import { useNavigate } from 'react-router-dom';
import {
  // RECIPE_PAGE_PATH,
  // HOME_PAGE_PATH,
  // STYLES_PAGE_PATH,
  // REPORT_PAGE_PATH,
} from '../App';
import { getRecipes } from '../app/sampleData';
import { Recipe } from '../app/types';

function RecipeDetails() {
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const recipeId = parseInt(parts[parts.length - 1]); //
  const recipes = getRecipes();
  const recipe = recipes[recipeId - 1];

  return (
    <div>


      <div className='Banner'>
        <div className='app-container'>
          <img src='/sample.png' alt='여기에 그림이 들어갈 예정' />
        </div>
      </div>
      <div className='recipe-details'>
        <h1>
          {recipe.name}
        </h1>
        <Grid container>
          <Grid item xs={6}>
            <p>xxxx</p>
          </Grid>
          <Grid item xs={6}>
            <Button>남은 재료 레시피</Button>
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