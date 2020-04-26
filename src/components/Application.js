import React, { useState, useEffect } from 'react';
import { theme } from '@src/themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import FireInputs from '@src/components/fire-inputs/FireInputs';
import FireChart from '@src/components/fire-chart/FireChart';
import Timeline from '@src/components/timeline/Timeline';
import { daysInHammoc, fireCalculations } from '@src/components/fire-calc/fireCalculations';

const applicationTheme = theme();

const useStyles = makeStyles({
  applicationBase: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  applicationRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});

/** Application entry point wrapper */
const Application = () => {
  const classes = useStyles();

  const [year, setYear] = useState(0);

  useEffect(() => {
    const investmentStatus = fireCalculations(15000, 5, 30, 500, year);
    console.log(investmentStatus.capital);
    console.log(daysInHammoc(57, investmentStatus.yield));
  }, [year]);

  const handleFireInputs = (inputs) => {
    console.log(inputs);
  };

  return (
    <ThemeProvider theme={applicationTheme}>
      <div className={classes.applicationBase}>
        <div className={classes.applicationRow}>
          <FireChart/>
          <Timeline setYear={setYear}/>
        </div>
        <FireInputs setInputs={handleFireInputs}/>
      </div>
    </ThemeProvider>
  );
};

export default Application;
