import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Recipe from './pages/Recipe';
import ReportPage from './pages/ReportPage';

import Paperbase from './components/Paperbase';
import NotFound from './components/NotFound'

export const HOME_PATH = '/home';
export const RECIPE_PATH = '/recipe';
export const REPORT_PATE_PATH = '/report';

export const NEWS_TRENDS_PATH = '/news-trends';
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
      <Route path={RECIPE_PATH} element={<Recipe />} />
      <Route path={REPORT_PATE_PATH} element={<ReportPage />} />


      <Route path={NEWS_TRENDS_PATH} element={<Paperbase />} />
      <Route path={SENTIMENT_TRENDS_PATH} element={<Paperbase />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
