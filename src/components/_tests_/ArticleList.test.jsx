// src/components/_tests_/ArticleList.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // Correct import for jest-dom
import ArticleList from '../ArticleList';

const articles = [
  {
    id: 1,
    title: 'Test Article 1',
    byline: 'Author 1',
    abstract: 'Abstract 1',
  },
  {
    id: 2,
    title: 'Test Article 2',
    byline: 'Author 2',
    abstract: 'Abstract 2',
  },
];

test('renders list of articles with correct titles, bylines, and abstracts', () => {
  render(
    <MemoryRouter>
      <ArticleList articles={articles} />
    </MemoryRouter>
  );

  articles.forEach(article => {
    expect(screen.getByText(article.title)).toBeInTheDocument();
    expect(screen.getByText(article.byline)).toBeInTheDocument();
    expect(screen.getByText(` — ${article.abstract}`)).toBeInTheDocument();
  });
});
