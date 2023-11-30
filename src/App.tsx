import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Paperbase from './components/Paperbase';
import NotFound from './components/NotFound'

export const NEWS_TRENDS_PATH = '/news-trends';
export const HOME_PATH = '/home';
export const SENTIMENT_TRENDS_PATH = '/sentiment-trends';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={NEWS_TRENDS_PATH} />
        }
      />
      <Route path={HOME_PATH} element={<Home />} />
      <Route path={NEWS_TRENDS_PATH} element={<Paperbase />} />
      <Route path={SENTIMENT_TRENDS_PATH} element={<Paperbase />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
