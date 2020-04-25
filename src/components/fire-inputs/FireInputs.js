import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  inputContainer: {
    maxWidth: '50vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputField: {
    margin: '1rem'
  }
});

const FireInputs = (props) => {
  const classes = useStyles();

  const [fireInputs, setFireInputs] = useState({ capital: 0, savings: 0, tax: 30, yield: 5 });

  const handleChange = (prop) => (event) => {
    const newValue = event.target.value;
    // TODO: validatae: const regex = RegExp(/^[0-9]+([.][0-9]+)?$/);
    setFireInputs({ ...fireInputs, [prop]: Number(newValue) });
  };

  /** Listen for fire -input changes, pass them to parent on change */
  useEffect(() => props.setInputs(fireInputs), [fireInputs]);

  return (
    <div className={classes.inputContainer}>
      <TextField
        onChange={handleChange('capital')}
        className={classes.inputField}
        helperText="Current investment capital (€)"
        label="Capital €"
        variant="outlined"
        value={fireInputs.capital}>
      </TextField>
      <TextField
        onChange={handleChange('savings')}
        className={classes.inputField}
        helperText="Amount of money put into investments monthly (€)"
        label="Monthly savings €"
        variant="outlined"
        value={fireInputs.savings}>
      </TextField>
      <TextField
        onChange={handleChange('yield')}
        className={classes.inputField}
        helperText="The expected average annual yield (%) of your investments"
        label="Annual yield %"
        variant="outlined"
        value={fireInputs.yield}>
      </TextField>
      <TextField
        onChange={handleChange('tax')}
        className={classes.inputField}
        helperText="The percentage the goverment takes from your profits"
        label="Tax rate %"
        variant="outlined"
        value={fireInputs.tax}>
      </TextField>
    </div>
  );
};

FireInputs.propTypes = {
  setInputs: PropTypes.func
};

export default FireInputs;
