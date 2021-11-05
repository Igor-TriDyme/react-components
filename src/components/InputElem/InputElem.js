import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from '@mui/material';
import ToolTips from '../ToolTips';
import './InputElem.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
  input: {
    color: 'blue',
    // backgroundColor: 'lightblue'
  },
  inputAdornment: {
    paddingRight: '1em',
    color: 'black'
  }
}));

const InputElem = ({
  data,
  onChange
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl
        className={clsx(classes.margin, classes.withoutLabel, classes.textField)}
      // variant="outlined"
      >
        <InputLabel htmlFor="outlined-adornment-amount">{data.description}</InputLabel>
        <Input
          className={classes.input}
          value={data.value}
          startAdornment={
            <InputAdornment
              position="start"
              className={classes.inputAdornment}
            >
              {data.text}
              <ToolTips
                description={data.description}
                target={data.text}
              />
            </InputAdornment>}
          endAdornment={<InputAdornment position="end">{data.unit}</InputAdornment>}
          onChange={onChange}
        />
      </FormControl>
    </div>
  );
};


InputElem.propTypes = {
  data: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

InputElem.defaultProps = {
  onChange: undefined,
};

export default InputElem;