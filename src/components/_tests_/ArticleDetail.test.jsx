// src/components/_tests_/ArticleDetail.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleDetail from '../ArticleDetail';

const article = {
  id: 1,
  title: 'Test Article',
  byline: 'Author 1',
  abstract: 'Abstract 1',
  url: 'https://example.com'
};

test('renders article detail with title, byline, abstract, and url', () => {
  const { getByText } = render(<ArticleDetail article={article} />);
  
  expect(getByText('Test Article')).toBeInTheDocument();
  expect(getByText('Author 1')).toBeInTheDocument();
  expect(getByText('Abstract 1')).toBeInTheDocument();
  expect(getByText('Read more')).toHaveAttribute('href', 'https://example.com');
});
