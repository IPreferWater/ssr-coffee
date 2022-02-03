import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


  ChartJS.register(ArcElement, Tooltip, Legend);
  


type PieChartProps = {
    data: any
  }

  
  export const PieChart = ({ data }: PieChartProps) => 
  <Pie
  data={data}
/>
  
  