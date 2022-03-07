import { Grid, Grow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import NewsCard from '../NewsCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '10px',
  },
}));

const NewsCards = ({ articles }) => {
  const classes = useStyles();

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} style={{ display: 'flex' }}>
            <NewsCard content={article} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
