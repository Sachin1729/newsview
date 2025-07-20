import axios from 'axios';
import type { NewsItem } from '../types/news';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fetchNews = async (): Promise<NewsItem[]> => {
  const response = await API.get('/news');
  const data = response.data as { news: NewsItem[] };
  return data.news;
};