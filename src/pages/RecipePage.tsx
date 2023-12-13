import * as React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipePage.css';

// import HomeIcon from '@mui/icons-material/Home';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined'; // 1) 요약
// import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'; // 2) 공유
// import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined'; // 3) 책갈피
// import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined'; // 3) 책갈피
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'; // 4) 노트보기
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CircularProgress from '@mui/material/CircularProgress';
import {
  Box,

  Button,
  Divider,
  Grid,
} from '@mui/material';
import { HomePageFooter } from './HomePage';
import { useNavigate } from 'react-router-dom';
import {
  RECIPE_PAGE_PATH,
  // HOME_PAGE_PATH,
  // STYLES_PAGE_PATH,
  // REPORT_PAGE_PATH,
} from '../App';
import { useGetRecipesQuery } from '../app/newsApi';

function RecipeDetails() {
  const { pathname } = useLocation();
  const parts = pathname.split('/');
  const recipeId = parseInt(parts[parts.length - 1]); // FIXME
  const navigate = useNavigate();
  const { data, isLoading } = useGetRecipesQuery({ id: recipeId });

  if (isLoading || !data) {
    return (
      <Box sx={{
        p: 3, textAlign: 'center'
      }}>
        <CircularProgress />
      </Box >
    );
  }

  const recipe = data.filter((recipe) => recipe.id == recipeId)[0]; // FIXME

  return (
    <div>
      <div className='Banner'>
        <div className='app-container'>
          <img src={recipe.url || '../sample.png'} alt='여기에 그림이 들어갈 예정' />
        </div>
      </div>
      <div className='recipe-details'>

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
            <h3>외식비용</h3>
          </Grid>
          <Grid item xs={3}>
            <p>{Math.round(recipe.outcost / recipe.servings).toLocaleString()}원</p>
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
            <p>{Math.round(recipe.selfcost / recipe.servings).toLocaleString()}원</p>
          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={7}>
            <Button
              onClick={(e) => window.location.href = 'https://youtu.be/N82hJpl5cMM?si=LzOwLnCqGSyK18Wa'}
              className="blinking-button" // blinking-button 클래스 추가
              style={{ color: 'red', fontWeight: 'bold' }}
            >
              <YouTubeIcon /><h4>영상 보기</h4>
            </Button>

            <Button
              onClick={(e) => window.location.href = 'https://youtu.be/w1TyPvPPg3s'}
              className="blinking-button" // blinking-button 클래스 추가
              style={{ color: 'red', fontWeight: 'bold' }}
            >
              <MusicNoteIcon /><h4>노래로 듣기</h4>
            </Button>
          </Grid>
          <Grid item xs={5}>
            <Button onClick={(e) => navigate(RECIPE_PAGE_PATH + `?ingredients=${recipe.ingredients.join(',')}`)}>
              <h3>남은재료 레시피</h3>
            </Button>
            {/* "유투브로 이동" 버튼 스타일을 수정하고 애니메이션을 적용합니다. */}

          </Grid>
        </Grid>
        <Divider />
        <Grid container>
          <Grid item xs={6}></Grid>
          <p>
            {recipe.description}
          </p>
        </Grid>
        <Divider />


        <Grid container>
          {
            recipe.grams.map((ingredient, i) => {
              const [name, amount] = ingredient.split(' ');

              return (
                <Grid item xs={6}>
                  <Grid container>
                    <Grid item xs={6}>
                      <h4>{name}</h4>

                    </Grid>
                    <Grid item xs={6}>
                      <p>{amount}</p>

                    </Grid>
                  </Grid>
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

export default function RecipePage() {

  return (
    <div>
      <RecipeDetails />
      <HomePageFooter />
    </div>
  );
}