import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import HomePage from './pages/HomePage';
import RecipeListPage from './pages/RecipeListPage';
import RecipePage from './pages/RecipePage';
import StylesPage from './pages/StylesPage';
import RecommendationPage from './pages/RecommendationPage';
import ReportPage from './pages/ReportPage';

import Paperbase from './components/Paperbase';
import NotFound from './components/NotFound'

export const HOME_PAGE_PATH = '/home';
export const RECIPE_PAGE_PATH = '/recipe';
export const REPORT_PAGE_PATH = '/report';
export const STYLES_PAGE_PATH = '/styles';
export const RECOMMENDATION_PAGE_PATH = '/recommendation';

export const NEWS_TRENDS_PATH = '/news-trends';
export const SENTIMENT_TRENDS_PATH = '/sentiment-trends';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT7wMGSFub-AqBX7GyKzz-yleJ2xm0rPk",
  authDomain: "news-trends-ad532.firebaseapp.com",
  projectId: "news-trends-ad532",
  storageBucket: "news-trends-ad532.appspot.com",
  messagingSenderId: "250305364280",
  appId: "1:250305364280:web:d4b9d3d9fa902c4b9741cd",
  measurementId: "G-3MBZLZQMHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() {
  const analytics = getAnalytics(app);
  const { pathname, search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);

    logEvent(analytics, pathname, params);
  }, [analytics, pathname, search]) //경로가 바뀔때 현재 주서를 뒤의 변수가 바뀌면 앞의 함수를 실행하라는 뜻

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={NEWS_TRENDS_PATH} />
        }
      />
      <Route path={HOME_PAGE_PATH} element={<HomePage />} />
      <Route path={`${RECIPE_PAGE_PATH}/*`} element={<RecipePage />} />
      <Route path={RECIPE_PAGE_PATH} element={<RecipeListPage />} />
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
