// src/components/ArticleDetail.jsx
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const ArticleDetail = ({ article }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 2 }}>
      {article.media && article.media.length > 0 && article.media[0]['media-metadata'] && article.media[0]['media-metadata'].length > 0 && (
        <CardMedia
          component="img"
          image={article.media[0]['media-metadata'][2].url}
          alt={article.title}
        />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.byline}
        </Typography>
        <Typography variant="body1" component="p" sx={{ marginTop: 2 }}>
          {article.abstract}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ArticleDetail;
