// src/containers/ArticlesContainer.jsx
import React, { useState, useEffect } from 'react';
import { fetchMostViewedArticles } from '../services/api';
import ArticleList from '../components/ArticleList';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const ArticlesContainer = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchMostViewedArticles(1);
        setArticles(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  if (loading) return <Container sx={{ textAlign: 'center', marginTop: 2 }}><CircularProgress /></Container>;

  return (
    <Container>
        <Typography sx={{ textAlign: 'center'}} variant="h1" gutterBottom> NY Times Most Popular Articles</Typography>
        <ArticleList articles={articles} />
    </Container>
  );
};

export default ArticlesContainer;
