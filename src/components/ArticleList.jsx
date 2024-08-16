// src/components/ArticleList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const ArticleList = ({ articles }) => (
  <List>
    {articles.map(article => (
      <ListItem key={article.id}>
        <Link to={`/article/${article.id}`} state={{ article: article }} style={{ textDecoration: 'none' }}>
          <ListItemText 
            primary={article.title} 
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {article.byline}
                </Typography>
                {" — " + article.abstract}
              </React.Fragment>
            } 
          />
        </Link>
      </ListItem>
    ))}
  </List>
);

export default ArticleList;
