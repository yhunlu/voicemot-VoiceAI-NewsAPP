import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import WtoN from 'words-to-num';
import { toast } from 'react-toastify';

import NewsCards from './NewsCards';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

const alanKey = import.meta.env.VITE_ALAN_API_KEY;

const Welcome = () => {
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
      <Footer />
    </div>
  );
};

export default Welcome;
