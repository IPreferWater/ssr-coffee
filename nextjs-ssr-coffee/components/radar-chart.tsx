import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );
  


type RadarChartProps = {
    data: any
  }

  
  export const RadarChart = ({ data }: RadarChartProps) => 
  <Radar
  data={data}
/>
  
  