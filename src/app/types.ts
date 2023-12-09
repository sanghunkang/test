export type SearchReqParams = {
  search: string;
}

export type NewsTrendItem = {
  date: string;
  doc_count: number;
}

export type NewsTrends = {
  trends: NewsTrendItem[];
}

export type SentimentTrendItem = {
  date: string;
  positive: number;
  neutral: number;
  negative: number;
  sentiment: number;
}

export type SentimentTrends = {
  trends: SentimentTrendItem[];
}

export type Category = {
  name: string;
  img: string;
}

export type Ingredient = {
  name: string;
  amount: string;
}

export type Ranking = {
  name: string;
  amountSaved: string;
}

export type Recipe = {
  id: number;
  name: string;
  style: string;
  img: string;
  description: string;
  tags: string[];
  steps: string[];
  ingredients: Ingredient[];
}

// export type Recipes = {
//   recipes: REcip 
// }