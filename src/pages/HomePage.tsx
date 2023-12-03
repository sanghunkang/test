import * as React from 'react';
import './HomePage.css';
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
  HOME_PAGE_PATH,
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
    {
      name: '한식',
      img: '1한식.png',
    },
    {
      name: '중식',
      img: '2중식.png',
    },
    {
      name: '일식',
      img: '3일식.png',
    },
    {
      name: '아시안',
      img: '4아시안.png',
    },
    {
      name: '양식',
      img: '5양식.png',
    },
    {
      name: '돈까쓰',
      img: '6돈까쓰.png',
    },
    {
      name: '분식',
      img: '7분식.png',
    },
    {
      name: '디저트',
      img: '8디저트.png',
    },
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
        categories.map((category) => {
          return (
            <Grid item xs={3} key={category.name}>
              <Paper>
                <div className='Body-category'>
                  <div className='app-container'>
                    <img src={category.img} alt='여기에 그림이 들어갈 예정'></img>
                  </div>
                  <div>
                    <h5>{category.name}</h5>
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
          레시피
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
          스타일
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
          마이페이지
        </div>

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
