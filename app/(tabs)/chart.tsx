import EChart from '@/components/Echarts';
import React from 'react';
import { View } from 'react-native';

export default function ChartScreen() {
  const xBase = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const actual = [820, 932, 901, 934, 1290, 1330, 1320];
  const upper = [890, 970, 950, 960, 1360, 1380, 1370];
  const lower = [780, 850, 820, 840, 1260, 1280, 1270];

  const chartOptions = {
    title: {
      text: 'Dotted Band Lines (Upper & Lower)',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Actual', 'Upper Bound', 'Lower Bound'],
    },
    xAxis: {
      type: 'category',
      data: xBase,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Upper Bound',
        type: 'line',
        data: upper,
        smooth: true,
        lineStyle: {
          type: 'dashed',
          color: '#FF6B6B',
          width: 2,
        },
        symbol: 'none',
      },
      {
        name: 'Lower Bound',
        type: 'line',
        data: lower,
        smooth: true,
        lineStyle: {
          type: 'dashed',
          color: '#4BC0C0',
          width: 2,
        },
        symbol: 'none',
      },
      {
        name: 'Actual',
        type: 'line',
        data: actual,
        smooth: true,
        lineStyle: {
          color: '#5470C6',
          width: 3,
        },
        symbol: 'circle',
        symbolSize: 6,
      },
    ],
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <EChart option={chartOptions} />
    </View>
  );
}
