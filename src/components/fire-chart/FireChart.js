/* eslint-disable */
import React from 'react';
import { ResponsiveWaffle } from '@nivo/waffle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  chartContainer: {
    height: '500px',
    width: '50vw',
    backgroundColor: 'white'
  }
});

const data = [
  {
    "id": "money",
    "label": "Days of ours",
    "value": 57.53,
    "color": "#468df3"
  }
];

const FireChart = () => {
  const classes = useStyles();

  const Waffle = ({ data }) => (
    <ResponsiveWaffle
      data={data}
      total={365}
      rows={40}
      columns={10}
      emptyColor="#cccccc"
      margin={{ top: 10, right: 10, bottom: 10, left: 120 }}
      colors={{ scheme: 'dark2' }}
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
      <Waffle data={data}/>
    </div>
  )
};

export default FireChart;
