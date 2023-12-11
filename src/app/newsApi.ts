import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as t from './types';

export const newsApi = createApi({
  reducerPath: 'news-api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://ib6gpgzgmk.execute-api.ap-northeast-2.amazonaws.com/dev/',
  }),
  endpoints: (builder) => ({
    getNewsTrends: builder.query<t.NewsTrends, t.SearchReqParams>({
      query: ({search}) => `news-trends?search=${search}`,
    }),
    getSentimentTrends: builder.query<t.SentimentTrends, t.SearchReqParams>({
      query: ({search}) => `sentiment-trends?search=${search}`,
    }),
    getRecipes: builder.query<t.Recipe[], t.SearchReqParams>({
      query: ({search}) => `recommend_recipe?search=${search}`,
    }),
  }),
});

export const { 
  useGetNewsTrendsQuery, 
  useGetSentimentTrendsQuery,
  useGetRecipesQuery,
 } = newsApi;