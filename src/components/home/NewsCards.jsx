import { Grid, Grow, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import NewsCard from '../NewsCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 1%',
    width: '100%',
    alignItems: 'baseline',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '5%',
    borderRadius: 25,
    color: 'white',
    marginBottom: 'auto',
    marginTop: '1rem',
  },
  infoCard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  title: {
    ...theme.typography.h5,
  },
}));

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  const infoCards = [
    {
      color: '#f5b400',
      title: 'Latest News',
      info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
      text: 'Give me the news',
    },
    {
      color: '#0f9d58',
      title: 'News by Categories',
      info: 'Business, General, Health, Science, Sports, Technology',
      text: 'Give me the latest Technology news',
    },
    {
      color: '#db4437',
      title: 'News by Terms',
      info: 'Bitcoin, Shiba Token, Smartphones, Apple, Tayyip Erdoğan...',
      text: 'What about Bitcoin',
    },
    {
      color: '#4285f4',
      title: 'News in Turkish language',
      info: 'You will get news from Milliyet, Hurriyet, Sözcü, Kanald, Haberglobal, Posta, Shiftdelete...',
      text: 'Give me the news in Turkish language',
    },
  ];

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container spacing={1}>
          {infoCards.map((infoCard) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(' ')[2]}</strong> <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }

  return (
    <Grow in>
      <Grid className={classes.container} container spacing={1}>
        {articles.map((article, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2}
            style={{ display: 'flex' }}
          >
            <NewsCard content={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
