/* eslint-disable */
import React, { useState } from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  chartContainer: {
    height: '500px',
    width: '50vw',
    display: 'flex',
    flexDirection: 'row',
    margin: '20px',
    backgroundColor: 'white'
  },
  slider: {
    margin: '60px !important',
    height: '50% !important'
  }
});

const FireChart = () => {
  const classes = useStyles();

  const [timeline, setTimeline] = useState(0);
  const handleTimeSlide = (event, value) => {
    (event.timeStamp % 10 < 1) && setData({ ...data, value });
    if ( data.value > 364 ) {
      setColors('purple_orange');
    } else {
      setColors('dark2');
    }
  };

  const [colors, setColors] = useState('dark2');
  const [data, setData] = useState(
    {
      "id": "money",
      "label": "Days of ours",
      "value": 0,
      "color": "#468df3"
    }
  );

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

  const Waffle = ({ data, colors }) => (
    <ResponsiveWaffle
      data={[ data ]}
      total={365}
      rows={73}
      columns={5}
      emptyColor="#cccccc"
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: colors }}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.3 ] ] }}
      animate={true}
      motionStiffness={90}
      motionDamping={11}
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: false,
          translateX: -100,
          translateY: 0,
          itemsSpacing: 4,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          itemTextColor: '#777',
          symbolSize: 20
        }
      ]}/>
  );

  return (
    <div className={classes.chartContainer}>
      <Waffle data={data} colors={colors}/>
      <Slider
        classes={{ root: classes.slider }}
        onChange={handleTimeSlide}
        orientation="vertical"
        defaultValue={0}
        step={1}
        marks={marks}
        max={40}
        valueLabelDisplay='on'
        valueLabelFormat={(value) => value + 2020}/>
    </div>
  )
};

export default FireChart;
