import * as React from 'react';
import {
  Box,
  TextField,
  Grid,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { CommonHeader } from '../components/CommonHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import { Recipe } from '../app/types';
import {
  RECIPE_PAGE_PATH,
  HOME_PAGE_PATH,
  STYLES_PAGE_PATH,
  REPORT_PAGE_PATH,
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
          <img src={recipe.url || 'sample.png'} alt={'x'} style={{ borderRadius: '12px', width: '100%' }} ></img>
        </Grid>
        <Grid item className='app-container' xs={8}>
          <p style={{ fontSize: '13px' }}>
            {recipe.name}
          </p>
          <div style={{ fontSize: '10px', marginTop: '-7px', color: 'grey' }}><br />외식비용: {recipe.outcost.toLocaleString()}원 <span style={{ fontSize: '10px', color: 'black' }}>vs 요리비용: {recipe.selfcost.toLocaleString()}원</span></div>
          <div style={{ fontSize: '12px', marginTop: '-12px', color: 'red' }}><br />절약금액: {(recipe.outcost - recipe.selfcost).toLocaleString()}원↓</div>
          <div style={{ fontSize: '10px', marginTop: '-3px', color: 'grey' }}><br />{`${recipe.level} | ${recipe.time}`}</div>
        </Grid>
      </Grid>
    </Paper>
  );
}


function RecipeListPageBody() {
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

function HomePageFooter() {
  const navigate = useNavigate();

  return (
    <Grid container className='app-footer'>
      <Grid item xs={3}>
        <div>

          <HomeIcon
            sx={{ fontSize: '32px' }}
            onClick={(e) => { navigate(HOME_PAGE_PATH) }}
          />
        </div>
        <div>
          홈
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>

          <RestaurantOutlinedIcon
            sx={{ fontSize: '32px' }}
            onClick={(e) => { navigate(RECIPE_PAGE_PATH) }}
          />
        </div>
        <div>
          재료별
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>

          <TagOutlinedIcon
            sx={{ fontSize: '32px' }}
            onClick={(e) => { navigate(STYLES_PAGE_PATH) }}
          />
        </div>
        <div>
          테마별
        </div>
      </Grid>
      <Grid item xs={3}>
        <div>
          <PersonOutlineOutlinedIcon
            sx={{ fontSize: '32px' }}
            onClick={(e) => { navigate(REPORT_PAGE_PATH) }}
          />
        </div>
        <div>
          절약리포트
        </div>

      </Grid>
    </Grid>
  );
};

export default function RecipeListPage() {
  return (
    <div>
      <CommonHeader />
      <RecipeListPageBody />
      <HomePageFooter />
    </div>

  );
}