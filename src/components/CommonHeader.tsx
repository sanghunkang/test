import { useState } from 'react';
import {
  TextField,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  HOME_PAGE_PATH, RECIPE_PAGE_PATH,
} from '../App';
import './CommonHeader.css'

export function CommonHeader() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get('query') || '';

  const [inputText, setInputText] = useState(query || '나는 배고프다');

  function handleKeyDownEnter() {
    // let url = pathname;

    // if (inputText) {
    //   url += `?search=${inputText}`;
    // };

    // logEvent(analytics, "search", { inputText })


    navigate(RECIPE_PAGE_PATH + `?query=${inputText}`);
  };
  // const { data, isLoading } = useGetNewsTrendsQuery({ search: search });
  // console.log(data);


  return (
    <div className='app-header'>
      <div onClick={(e) => navigate(HOME_PAGE_PATH)}>
        <h1>Cook and Save</h1>
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
        />
      </div>
    </div>
  );
}