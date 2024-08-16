// src/components/ArticleDetailWrapper.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import ArticleDetail from './ArticleDetail';

const ArticleDetailWrapper = () => {
  const location = useLocation();
  const article = location.state?.article;

  if (!article) {
    return <div>No article data available</div>;
  }

  return <ArticleDetail article={article} />;
};

export default ArticleDetailWrapper;
