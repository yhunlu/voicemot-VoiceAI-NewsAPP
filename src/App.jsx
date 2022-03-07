import { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import logo from './logo.svg';
import './App.css';
import NewsCards from './components/home/NewsCards';
import { ThemeProvider } from '@mui/styles';
import theme from './components/ui/theme';

const alanKey =
  'a5a750f34ab3aa5708a4fa401835990c2e956eca572e1d8b807a3e2338fdd0dc/stage';

function App() {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>voicemot</h1>
        <NewsCards articles={newsArticles} />
      </div>
    </ThemeProvider>
  );
}

export default App;
