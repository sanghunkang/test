import * as React from 'react';
import './Recipe.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import {
  Button,
  Grid,
} from '@mui/material';

function Banner() {
  return (
    <div className='Banner'>
      <img src='sample.png' alt='여기에 그림이 들어갈 예정'></img>
    </div>
  )
}

const steps = [
  '감자는 껍질 째 깨끗이 씻은 후 오븐팬에 올려 올리브오일과 소금, 후춧가루를 뿌려 200도에서 50분 정도 구워주세요.\r\n(tip. 전자레인지 용기에 담아 랩을 씌운 후 레인지로 익히면 간단하답니다)',
  '베이컨은 1cm 길이로 자른 후 달군 팬에 노릇하게 구워주세요. 실파는 송송 썰어주세요.',
  '익힌 감자의 가운데 칼집을 낸 후 가운데를 벌려 주세요. 감자 가운데에 소금, 후춧가루를 뿌린 후 버터를 1작은술씩 넣어주세요.',
  '체다치즈를 뿌린 후 사워크림을 올려주세요. 베이컨과 실파, 소금, 후춧가루를 뿌려 완성해 주세요.',
]

const tags = [
  '간식',
  '메인요리',
];

const ingredients = [ //2~3인분	
  {
    name: '킹감자',
    amount: '4개',
  },
  {
    name: '베이컨',
    amount: '4장',
  },
  {
    name: '실파',
    amount: '1개',
  },
  {
    name: '체다치즈',
    amount: '1 / 2컵',
  },
  {
    name: '버터',
    amount: '2큰술',
  },
  {
    name: '사워크림',
    amount: '2큰술',
  },
  {
    name: '소금',
    amount: '약간',
  },
  {
    name: '후춧가루',
    amount: '약간',
  },
  {
    name: '올리브오일',
    amount: '적당량'
  },
];

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
  return (
    <Grid container className='Footer'>
      <Grid item xs={2} spacing={2}>
        <FavoriteIcon sx={{ fontSize: '32px' }} />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <FavoriteIcon sx={{ fontSize: '32px' }} />
      </Grid>
      <Grid item xs={4} spacing={2}>
        <HomeIcon sx={{ fontSize: '48px' }} />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <FavoriteIcon sx={{ fontSize: '32px' }} />
      </Grid>
      <Grid item xs={2} spacing={2}>
        <FavoriteIcon sx={{ fontSize: '32px' }} />
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