import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import StylesPage from './pages/StylesPage';
import RecommendationPage from './pages/RecommendationPage';
import ReportPage from './pages/ReportPage';

import Paperbase from './components/Paperbase';
import NotFound from './components/NotFound'

export const HOME_PATH = '/home';
export const RECIPE_PAGE_PATH = '/recipe';
export const REPORT_PAGE_PATH = '/report';
export const STYLES_PAGE_PATH = '/Styles';
export const RECOMMENDATION_PAGE_PATH = '/recommendation';

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
      <Route path={HOME_PATH} element={<HomePage />} />
      <Route path={RECIPE_PAGE_PATH} element={<RecipePage />} />
      <Route path={STYLES_PAGE_PATH} element={<StylesPage />} />
      <Route path={RECOMMENDATION_PAGE_PATH} element={<RecommendationPage />} />
      <Route path={REPORT_PAGE_PATH} element={<ReportPage />} />


      <Route path={NEWS_TRENDS_PATH} element={<Paperbase />} />
      <Route path={SENTIMENT_TRENDS_PATH} element={<Paperbase />} />
      <Route path="*" element={<NotFound />} />
    </Routes >
  );
}

export default App;
