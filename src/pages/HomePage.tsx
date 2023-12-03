import * as React from 'react';
import './HomePage.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';
// import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
// import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined';
import {
  Grid,
  Paper,
  TextField,
} from '@mui/material';

import {
  RECIPE_PAGE_PATH,
  STYLES_PAGE_PATH,
  REPORT_PAGE_PATH,
} from '../App';
import { useNavigate } from 'react-router-dom';



function HomePageHeader() {
  return (
    <div className='app-header'>
      <div>
        <h1>Cook and Save</h1>
      </div>
      <div className='Header-input'>
        <TextField
          fullWidth
          label="Outlined"
          variant="outlined"
        />
      </div>
    </div>
  );
}

function HomePageBody() {

  const categories = [
    '한식',
    '중식',
    '일식',
    '아시안',
    '양식',
    '돈까쓰',
    '분식',
    '디저트',
  ];

  const rankings = [
    {
      name: '엘라의 테이블',
      amountSaved: '258,600원',
    },
    {
      name: '짱아쫑아맘',
      amountSaved: '212,400원',
    },
    {
      name: '엘라의 밥상',
      amountSaved: '3,258,600원',
    },
  ];

  const recipes = [
    {
      id: 1,
      description: '나혼다산다에 나온 간편 안주 대호평!'
    },
    {
      id: 2,
      description: '파이브가이즈 더현대 서울 오픈! 웨이팅 대신 집에서 땅콩기름 감자튀김과 햄버거를!'
    },
  ]



  return (
    <Grid
      className='app-body'
      container
      spacing={2}
    >
      {
        categories.map((el) => {
          return (
            <Grid item xs={3} key={el}>
              <Paper>
                <div className='Body-category'>
                  <div>
                    <FavoriteIcon fontSize='large' />
                  </div>
                  <div>
                    {el}
                  </div>
                </div>
              </Paper>
            </Grid>
          );
        })
      }
      <Grid item xs={12} spacing={2}>
        <Paper >
          <div className='Body-card'>
            <div>
              <h1>실시간 인기 음식 컨텐츠</h1>
            </div>
            {
              //  </div> onClick={(e) => navigate(`/recipe?id=${recipe.id}`)}></Paper>
              recipes.map((recipe) => {
                return (
                  <div>
                    <a href={`/recipe?id=${recipe.id}`}>
                      <p>{recipe.description}</p>
                    </a>
                  </div>
                )
              })
            }
          </div>
        </Paper>
      </Grid>

      <Grid item xs={12} spacing={2}>
        <Paper>
          <div className='Body-card'>

            <div>
              <h1>이번달 절약 이벤트</h1>
            </div>
            <Grid container>
              {
                rankings.map((ranking, i) => {
                  return (
                    <React.Fragment>
                      <Grid item xs={2}>{i + 1}</Grid>
                      <Grid item xs={5}>{ranking.name}</Grid>
                      <Grid item xs={5}>{ranking.amountSaved}</Grid>
                    </React.Fragment>
                  );
                })
              }

            </Grid>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

function HomePageFooter() {
  const navigate = useNavigate();

  return (
    <Grid container className='Footer'>
      <Grid item xs={2} spacing={2}>
        <FavoriteIcon sx={{ fontSize: '32px' }} />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <RestaurantOutlinedIcon
          sx={{ fontSize: '32px' }}
          onClick={(e) => { navigate(RECIPE_PAGE_PATH) }}
        />
      </Grid>
      <Grid item xs={4} spacing={2}>
        <HomeIcon
          sx={{ fontSize: '48px' }}
        />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <TagOutlinedIcon
          sx={{ fontSize: '32px' }}
          onClick={(e) => { navigate(STYLES_PAGE_PATH) }}
        />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <PersonOutlineOutlinedIcon
          sx={{ fontSize: '32px' }}
          onClick={(e) => { navigate(REPORT_PAGE_PATH) }}
        />
      </Grid>
    </Grid>
  );
};

export default function Home() {
  return (
    <div>
      <HomePageHeader />
      <HomePageBody />
      <HomePageFooter />
    </div>
  );
}
