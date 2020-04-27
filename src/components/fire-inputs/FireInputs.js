import React from 'react';
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

  const handleChange = (prop) => (event) => {
    const newValue = event.target.value;
    // TODO: validatae: const regex = RegExp(/^[0-9]+([.][0-9]+)?$/);
    props.setInputs({ ...props.inputs, [prop]: Number(newValue) });
  };

  return (
    <div className={classes.inputContainer}>
      <TextField
        onChange={handleChange('capital')}
        className={classes.inputField}
        helperText="Initial investment capital (€)"
        label="Capital €"
        variant="outlined"
        value={props.inputs.capital}>
      </TextField>
      <TextField
        onChange={handleChange('savings')}
        className={classes.inputField}
        helperText="Amount of money put into investments monthly (€)"
        label="Monthly savings €"
        variant="outlined"
        value={props.inputs.savings}>
      </TextField>
      <TextField
        onChange={handleChange('yield')}
        className={classes.inputField}
        helperText="The expected average annual yield (%) of your investments"
        label="Annual yield %"
        variant="outlined"
        value={props.inputs.yield}>
      </TextField>
      <TextField
        onChange={handleChange('tax')}
        className={classes.inputField}
        helperText="The percentage the goverment takes from your profits"
        label="Tax rate %"
        variant="outlined"
        value={props.inputs.tax}>
      </TextField>
      <TextField
        onChange={handleChange('expenses')}
        className={classes.inputField}
        helperText="The amount of your daily expenses, including food, rent etc."
        label="Daily expenses €"
        variant="outlined"
        value={props.inputs.expenses}>
      </TextField>
    </div>
  );
};

FireInputs.propTypes = {
  inputs: PropTypes.object,
  setInputs: PropTypes.func
};

export default FireInputs;
