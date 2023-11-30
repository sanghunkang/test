import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';


import NewsTrendChart from './NewsTrendChart';
import SentimentTrendChart from './SentimentTrendChart';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Content() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();

  const params = new URLSearchParams(search);
  const searchText = params.get('search') || '';

  const [inputText, setInputText] = useState(searchText);

  function onSearch() {
    let url = pathname;

    if (inputText) {
      url += `?search=${inputText}`;
    };

    navigate(url);
  };

  return (
    <Paper sx={{ maxWidth: 936, margin: 'auto', overflow: 'hidden' }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Toolbar>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by keywords"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
                value={inputText}
                onChange={(e: any) => {
                  setInputText(e.target.value)
                }}
                onKeyDown={(e: any) => {
                  if (e.key === 'Enter') {
                    onSearch();
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained" sx={{ mr: 1 }}
                onClick={(e: any) => {
                  onSearch();
                }}>
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {
        pathname === '/news-trends'
          ? <NewsTrendChart search={searchText} />
          : <SentimentTrendChart search={searchText} />
      }
    </Paper>
  );
}
