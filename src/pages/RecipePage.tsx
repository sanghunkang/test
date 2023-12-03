import * as React from 'react';
import './RecipePage.css';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // 1) 요약
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'; // 2) 공유
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'; // 3) 책갈피
// import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'; // 3) 책갈피
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'; // 4) 노트보기
import {
  Button,
  Grid,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import {
  // RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  // STYLES_PAGE_PATH,
  // REPORT_PAGE_PATH,
} from '../App';
import { steps, tags, ingredients } from '../app/sampleData';

function Banner() {
  return (
    <div className='Banner'>
      <div className='app-container'>
        <img src={'sample.png'} alt='여기에 그림이 들어갈 예정'></img>
      </div>
    </div>
  )
}

function RecipeDetails() {
  return (
    <div className='recipe-details'>
      <h1>
        통감자 오븐구이
      </h1>
      <Grid container>
        <Grid xs={12}>
          <Button>남은 재료 레시피</Button>
        </Grid>
        {
          steps.map((step, i) => {
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
    </div>
  );
}

function RecipePageFooter() {
  const navigate = useNavigate();


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
      <Banner />
      <RecipeDetails />
      <RecipePageFooter />
    </div>
  );
}