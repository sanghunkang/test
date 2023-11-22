import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {

  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{
          zIndex: 0,
          paddingTop: '16px',
          paddingBottom: '16px',
        }}
      >
        <Toolbar>
          <Typography color="inherit" variant="h5" component="h1">
            News Trends
          </Typography>
          {/* <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              
            </Grid>
          </Grid> */}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
