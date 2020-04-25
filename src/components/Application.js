import React from 'react';
import { theme } from '@src/themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const applicationTheme = theme();

const useStyles = makeStyles({
  applicationBase: {
    height: '100vh',
    width: '100vw',
    backgroundColor: 'lightblue'
  }
});

/** Application entry point wrapper */
const Application = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={applicationTheme}>
      <div className={classes.applicationBase}>
      </div>
    </ThemeProvider>
  );
};

export default Application;
