import { makeStyles } from '@mui/styles';
import { Grid, Typography, IconButton } from '@mui/material';

import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import instagram from '../images/instagram.svg';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '18rem',
  },
  link: {
    color: '#003d00',
    fontSize: '1.25rem',
    textAlign: 'center',
    justifyContent: 'center',
  },
  linkColumn: {
    width: '20rem',
  },
  linkContainer: {
    [theme.breakpoints.down('md')]: {
      marginBottom: '3rem',
    },
  },
  icon: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  '@global': {
    body: {
      margin: 0,
    },
    a: {
      textDecoration: 'none',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  const socialMedia = [
    {
      icon: facebook,
      alt: 'facebook',
      link: 'http://www.facebook.com',
    },
    {
      icon: twitter,
      alt: 'twitter',
      link: 'http://www.twitter.com',
    },
    {
      icon: instagram,
      alt: 'instagram',
      link: 'http://www.instagram.com',
    },
  ];

  return (
    <footer className={classes.footer}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        {/* Social Media Icons */}
        <Grid item>
          <Grid container>
            {socialMedia.map((platform) => (
              <Grid item key={platform.link}>
                <IconButton
                  classes={{ root: classes.icon }}
                  component="a"
                  disableRipple
                  href={platform.link}
                >
                  <img src={platform.icon} alt={platform.alt} />
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6" className={classes.link}>
        copyright reserved by voicemot
      </Typography>
    </footer>
  );
};

export default Footer;
