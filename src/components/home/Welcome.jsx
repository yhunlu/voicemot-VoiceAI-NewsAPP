import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { makeStyles } from '@mui/styles';
import WtoN from 'words-to-num';
import { toast } from 'react-toastify';

import NewsCards from './NewsCards';
import Header from '../ui/Header';

const alanKey =
  'a5a750f34ab3aa5708a4fa401835990c2e956eca572e1d8b807a3e2338fdd0dc/stage';

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    color: 'black',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '120px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: 'rgba(21, 101, 192)',
  },
  image: {
    marginLeft: 20,
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    padding: '3%',
    borderRadius: 10,
    color: 'white',
    backgroundColor: 'rgba(21, 101, 192)',
    margin: '0 12px',
    textAlign: 'center',
    height: '25vmin',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
      textAlign: 'center',
      width: '100%',
      height: 'initial',
      '&:nth-of-type(1)': {
        marginBottom: '12px',
      },
    },
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
}));

const Welcome = () => {
  // const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const [alanInstance, setAlanInstance] = useState();

  useEffect(() => {
    if (alanInstance != null) return;

    setAlanInstance(
      alanBtn({
        key: alanKey,
        onCommand: ({ command, articles, number }) => {
          if (command === 'newHeadlines') {
            setNewsArticles(articles);
            setActiveArticle(-1);
          } else if (command === 'highlight') {
            setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          } else if (command === 'open') {
            const parsedNumber =
              number.length > 2 ? WtoN.convert(number) : number;
            const article = articles[parsedNumber - 1];

            if (parsedNumber > articles.length) {
              toast.error('Please try that again...');
            } else if (article) {
              window.open(article.url, '_blank');
              toast.info('Opening...');
            } else {
              toast.warning('Please try that again...');
            }
          }
        },
      })
    );
  }, []);

  return (
    <div>
      <Header />
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default Welcome;
