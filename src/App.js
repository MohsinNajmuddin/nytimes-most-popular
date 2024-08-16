// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlesContainer from './containers/ArticlesContainer';
import ArticleDetailWrapper from './components/ArticleDetailWrapper';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArticlesContainer />} />
        <Route path="/article/:id" element={<ArticleDetailWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
