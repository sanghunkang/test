import * as React from 'react';
import './RecommendationPage.css';


import {
  Paper,
  Grid,
} from '@mui/material';



function Plating() {
  return (
    <Paper>
      <div className='plating'>
        <div>
          <img src={'sample.png'} alt='여기에 그림이 들어갈 예정'></img>
        </div>
        <div>
          <h3>댓글</h3>
          <h3>좋아요</h3>
        </div>
      </div>
    </Paper>
  );
}

export default function RecommendationPage() {
  return (
    <div className='recommendation-page'>
      <Grid container>
        <Grid item xs={6}>
          <Plating />
          <Plating />
          <Plating />
        </Grid>
        <Grid item xs={6}>
          <Plating />
          <Plating />
          <Plating />
        </Grid>
      </Grid>

    </div>
  )

}