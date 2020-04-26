import React from 'react';
import { theme } from '@src/themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FireInputs from '@src/components/fire-inputs/FireInputs';
import FireChart from '@src/components/fire-chart/FireChart';
import fireCalculations from '@src/components/fire-calc/fireCalculations';

const years = [0, 1, 2, 3, 4, 5];

years.map(year => {
  console.log(fireCalculations(15000, 5, 30, 500, year));
});

const applicationTheme = theme();

const useStyles = makeStyles({
  applicationBase: {
    height: '100%',
    width: '100%',
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
        <FireChart></FireChart>
        <FireInputs setInputs={handleFireInputs}/>
      </div>
    </ThemeProvider>
  );
};

export default Application;
