import React from 'react';
import Plot from 'react-plotly.js';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



import { useGetSentimentTrendsQuery } from '../app/newsApi';

interface IProps {
  search: string;
}

export default function SentimentTrendChart({ search }: IProps) {
  const { data, isLoading } = useGetSentimentTrendsQuery({ search: search });

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

  const traces: Plotly.Data[] = ['positive', 'neutral', 'negative'].map((x) => ({
    x: data.trends.map((el: any) => el.date),
    y: data.trends.map((el: any) => (el as any)[x]),
    type: 'scatter',
    mode: 'lines+markers',
    name: x
  }));

  return (
    <Plot
      data={traces}
      layout={{ autosize: true }}
      style={{ width: '100%', height: '360px' }}
    />
  );
}