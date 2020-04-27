import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveWaffle } from '@nivo/waffle';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  chartContainer: {
    height: '500px',
    width: '140px',
    display: 'flex',
    flexDirection: 'row',
    margin: '10px'
  },
  labelsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  verticalText: {
    writingMode: 'vertical-rl'
  }
});

const months = ['January', 'February', 'March', 'April', 'May' , 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
months.reverse();

const FireChart = (props) => {
  const classes = useStyles();

  const [data, setData] = useState(
    {
      "id": "Days of the year paid with annual yield",
      "label": "Days paid by investment yield",
      "value": 0
    }
  );

  useEffect(() => setData({ ...data, ['value']: props.daysInHammoc}), [props.daysInHammoc]);

  const Waffle = ({ data }) => (
    <ResponsiveWaffle
      data={[ data ]}
      total={365}
      rows={73}
      columns={5}
      emptyColor="#dddddd"
      colors={{ scheme: "pink_yellowGreen" }}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}/>
  );

  Waffle.propTypes = {
    data: PropTypes.object
  };

  return (
    <div className={classes.chartContainer}>
      <div className={classes.labelsContainer}>
        { months.map((month, index) => {
          return (
            <Typography variant='caption' key={`month-${index}`}> {month} </Typography>
          )
        })}
      </div>
      <Waffle data={data}/>
      <Typography
        variant='overline'
        classes={{ root: classes.verticalText }}>
        Days per year you can live from your investments&apos; profits
      </Typography>
    </div>
  )
};

FireChart.propTypes = {
  capital: PropTypes.number,
  daysInHammoc: PropTypes.number
};

export default FireChart;
