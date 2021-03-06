import React, { useState, useEffect } from 'react';
import { theme } from '@src/themes/theme';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import FireInputs from '@src/components/fire-inputs/FireInputs';
import FireChart from '@src/components/fire-chart/FireChart';
import Timeline from '@src/components/timeline/Timeline';
import { yieldPaidDays, fireCalculations } from '@src/components/fire-calc/fireCalculations';

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
    justifyContent: 'center',
    alignItems: 'center'
  }
});

/** Application entry point wrapper */
const Application = () => {
  const classes = useStyles();

  const [daysInHammoc, setDaysInHammoc] = useState(0);
  const [year, setYear] = useState(0);
  const [fireInputs, setFireInputs] = useState({ capital: 15000, savings: 500, tax: 30, yield: 5, expenses: 60 });
  const [capital, setCapital] = useState(fireInputs.capital);

  useEffect(() => {
    if (fireInputs) {
      console.log(fireInputs);
      const investmentStatus = fireCalculations(
        fireInputs.capital,
        fireInputs.yield,
        fireInputs.tax,
        fireInputs.savings,
        year
      );

      setCapital(investmentStatus.capital);
      setDaysInHammoc(yieldPaidDays(fireInputs.expenses, investmentStatus.yield));
    }
  }, [year, fireInputs]);

  return (
    <ThemeProvider theme={applicationTheme}>
      <div className={classes.applicationBase}>
        <Typography variant='h5'> Value of investments: </Typography>
          <Typography>
            {new Intl.NumberFormat('fi-FI', { style: 'currency', currency: 'EUR' }).format(capital)}
          </Typography>
        <div className={classes.applicationRow}>
          <FireChart
            capital={capital}
            daysInHammoc={daysInHammoc}
          />
          <Timeline
            setYear={setYear}
            year={year}/>
        </div>
        <FireInputs
          inputs={fireInputs}
          setInputs={setFireInputs}/>
      </div>
    </ThemeProvider>
  );
};

export default Application;
