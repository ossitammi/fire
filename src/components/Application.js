import React from 'react';
import { theme } from '@src/themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FireInputs from '@src/components/fire-inputs/FireInputs';
const applicationTheme = theme();

const useStyles = makeStyles({
  applicationBase: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  }
});

/** Application entry point wrapper */
const Application = () => {
  const classes = useStyles();

  const handleFireInputs = (inputs) => {
    console.log(inputs);
  };

  return (
    <ThemeProvider theme={applicationTheme}>
      <div className={classes.applicationBase}>
        {/*
          <FireChart></FireChart>
          <Timeline></Timeline>
        */}
        <FireInputs setInputs={handleFireInputs}/>
      </div>
    </ThemeProvider>
  );
};

export default Application;
