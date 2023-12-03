import * as React from 'react';
import './RecommendationPage.css';


import {
  TextField,
  Paper,
  Grid,
} from '@mui/material';


function RecommendationPageHeader() {
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


function Plating() {
  return (
    <Paper>
      <div className='plating'>
        <div className='app-container'>
          <img src={'sample.png'} alt='여기에 그림이 들어갈 예정'></img>
        </div>
        <Grid container>
          <Grid item xs={4}>
            <p>댓글</p>
          </Grid>
          <Grid item xs={4}>
            <p>좋아요</p>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </div>
    </Paper>
  );
}

export default function RecommendationPage() {
  return (
    <div className='recommendation-page'>
      <RecommendationPageHeader />
      <div className='app-body'>
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

    </div>
  )

}