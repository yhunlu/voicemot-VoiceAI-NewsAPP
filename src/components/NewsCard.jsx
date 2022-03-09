import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import React from 'react';
import newstemp from '../news-template.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  border: {
    border: 'solid',
  },
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    borderBottom: '10px solid #3b3b3b',
  },
  cardHeader: {
    flexDirection: 'column',
  },
  activeCard: {
    borderBottom: '10px solid #fed316',
  },
  grid: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    padding: '0 16px 8px 16px',
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const NewsCard = ({
  content: { description, publishedAt, source, title, url, urlToImage },
  i,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.cardHeader}
        title={source.name}
        subheader={new Date(publishedAt).toDateString()}
      />
      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          heigth="500"
          image={urlToImage || newstemp}
          alt={url}
        />
        <Typography className={classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="text.secondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary">
          Continue Reading...
        </Button>
        <Typography variant="h5" color="text.secondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
