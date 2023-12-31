import { useState } from 'react';
import {
  TextField, InputAdornment, IconButton
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

import {
  HOME_PAGE_PATH, RECIPE_PAGE_PATH,
} from '../App';
import './CommonHeader.css'
// export default () => <SearchIcon />;
export function CommonHeader() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('query') || params.get('menu') || params.get('ingredients') || '';
  // <SearchIcon />
  const [inputText, setInputText] = useState(query || '나는 배고프다');
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300); // Reset the shadow after 300ms (adjust timing as needed)
    navigate(HOME_PAGE_PATH);
  };

  function handleKeyDownEnter() {
    // let url = pathname;

    // if (inputText) {
    //   url += `?search=${inputText}`;
    // };

    // logEvent(analytics, "search", { inputText })


    navigate(RECIPE_PAGE_PATH + `?menu=${inputText}`);
  };
  // const { data, isLoading } = useGetNewsTrendsQuery({ search: search });
  // console.log(data);


  return (
    <div className='app-header'>
      <div
        className={`box ${isClicked ? 'clicked' : ''}`}
        onClick={handleClick}>
        <h1 style={{ fontFamily: 'Segoe Script' }}>Cook and Save</h1>
      </div>
      <div className='Header-input'>

        <TextField
          fullWidth
          label={'#' + query}
          variant="outlined"
          value={inputText}
          onChange={(e: any) => {
            setInputText(e.target.value)
          }}
          onKeyDown={(e: any) => {
            if (e.key === 'Enter') {
              handleKeyDownEnter();
            }
          }}
          InputProps={{
            startAdornment: (
              <SearchIcon />
            ),
          }}
        />
      </div>
    </div>
  );
}
