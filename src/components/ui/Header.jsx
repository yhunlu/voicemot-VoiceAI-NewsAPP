import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import logo from '../../favicon.png';

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginRight: 'auto',
    },
  },
  icon: {
    height: '3rem',
    width: '7rem',
  },
  logoText: {
    color: theme.palette.common.logotext,
  },
  logotextsec: {
    color: theme.palette.common.logotext2,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar className={classes.logoContainer} disableGutters>
        <Button>
          <img className={classes.icon} src={logo} alt="logo" />
          <Typography variant="h3">
            <span className={classes.logoText}>voice</span>
            <span className={classes.logotextsec}>mot</span>
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
