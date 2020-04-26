import React from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  slider: {
  }
});

const marks = [
  {
    value: 0,
    label: '2020',
  },
  {
    value: 10,
    label: '2030',
  },
  {
    value: 20,
    label: '2040',
  },
  {
    value: 30,
    label: '2050',
  },
  {
    value: 40,
    label: '2060',
  }
];

const Timeline = (props) => {
  const classes = useStyles();

  const handleTimeSlide = (event, value) => {
    if (event.timeStamp % 10 < 1) props.setYear(value);
  };

  return (
    <div>
      <Slider
        classes={{ root: classes.slider }}
        onChange={handleTimeSlide}
        orientation="vertical"
        step={1}
        marks={marks}
        max={40}
        value={props.year}
        valueLabelDisplay='on'
        valueLabelFormat={(value) => value + 2020}/>
    </div>
  );
};

Timeline.propTypes = {
  setYear: PropTypes.func,
  year: PropTypes.number
};

export default Timeline;
