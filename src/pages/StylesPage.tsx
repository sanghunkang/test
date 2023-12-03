import * as React from 'react';
import './StylesPage.css';
import { useNavigate } from 'react-router-dom';

import {
  Grid,
  TextField,
  Paper,
} from '@mui/material';

const styles = [
  {
    name: '집들이',
    images: [
      'sample.png',
      'sample.png',
      'sample.png',
    ],
  },
  {
    name: '크리스마스',
    images: [
      'sample.png',
      'sample.png',
      'sample.png',
    ],
  },
  {
    name: '다이어트',
    images: [
      'sample.png',
      'sample.png',
      'sample.png',
    ],
  },
  {
    name: '안주',
    images: [
      'sample.png',
      'sample.png',
      'sample.png',
    ],
  },
];


interface IProps {
  style: any;
}


function StylesPageHeader() {
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

function Style({ style }: IProps) {
  const navigate = useNavigate();

  return (
    <Paper className='style'>
      <div onClick={(e) => navigate(`/recommendation?id=${style.name}`)}>
        <h1>#{style.name}</h1>
      </div>
      <div>
        <Grid container>
          {
            style.images.map((image: string) => {
              return (
                <Grid item className='style-container' xs={4}>
                  <div className='app-container'>
                    <img src={image} alt='여기에 그림이 들어갈 예정'></img>
                  </div>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </Paper>
  )
}

export default function StylesPage() {
  return (
    <div>
      <StylesPageHeader />
      <div className='app-body'>
        {styles.map((style) => {
          return (
            <Style style={style} />)
        })}
      </div>
    </div>
  )

}