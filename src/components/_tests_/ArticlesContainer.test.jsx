// src/components/_tests_/ArticlesContainer.test.jsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react';
import axios from 'axios';
import ArticlesContainer from '../../containers/ArticlesContainer';

jest.mock('axios');

const mockArticles = [
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

test('fetches and displays articles', async () => {
  axios.get.mockResolvedValue({ data: mockArticles });

  await act(async () => {
    render(<ArticlesContainer />);
  });

  await waitFor(() => {
    mockArticles.forEach(article => {
      expect(screen.getByText(article.title)).toBeInTheDocument();
      expect(screen.getByText(article.byline)).toBeInTheDocument();
      expect(screen.getByText(article.abstract)).toBeInTheDocument();
    });
  });
});
