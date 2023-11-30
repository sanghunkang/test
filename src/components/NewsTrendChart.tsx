import React from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



import { useGetNewsTrendsQuery } from '../app/newsApi';

interface IProps {
  search: string;
}

export default function NewsTrendChart({ search }: IProps) {
  const { data, isLoading } = useGetNewsTrendsQuery({ search: search });

  console.log(data);
  if (isLoading || !data) {
    return (
      <Box sx={{
        p: 3, textAlign: 'center'
      }}>
        <CircularProgress />
      </Box >
    );
  }

  const trace: Plotly.Data = {
    x: data.trends.map((el) => el.date),
    y: data.trends.map((el) => el.doc_count),
    type: 'scatter',
    mode: 'lines+markers',
  }

  return (
    <Plot
      data={[trace]}
      layout={{ autosize: true }}
      style={{ width: '100%', height: '360px' }}
    />
  );
}