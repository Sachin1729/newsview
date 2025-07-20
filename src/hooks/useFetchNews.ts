import { useEffect, useState } from 'react';
import { fetchNews } from '../api/newsApi';
import type { NewsItem } from '../types/news';

export const useFetchNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNews()
      .then(setNews)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { news, loading, error };
};