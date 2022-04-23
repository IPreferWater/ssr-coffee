import Link from 'next/link'
import Layout from '../components/Layout'
import {IconLogo} from '../components/icon-logo';
import {RadarChart} from '../components/radar-chart';
import {LineChart} from '../components/line-chart';
import {PieChart} from '../components/pie-chart';
import {GridStockMarket} from '../components/grid-stock-markets';
import { request } from 'http';




//const IndexPage = () => (
  export default function IndexPage() {

    const dataRadarProduction = {
      labels: ['Columbia', 'Brazil', 'Other America ','Vietnam' ,  'Other Asia and Pacific','Africa'],
      datasets: [
        {
          label: 'arabica (60kg bags)',
          data: [24142,90396,59842, 5654, 13573,  19763],
          backgroundColor: 'rgb(194,135,41,0.5)',
          borderColor: '#010101',
          borderWidth: 1,
        },
        {
          label: 'robusta (60kg bags)',
          data: [6985, 30283,1238, 51656, 17256,  21954],
          backgroundColor: 'rgb(216,172,99,0.5)',
          borderColor: '#3E2413',
          borderWidth: 1,
        }
      ],
    };

    const dataRadarSales = {
      labels: ['Netherlands', 'Canada', 'France','Italy' ,'Germany','United States'],
      datasets: [
        {
          label: 'import (60kg bags)',
          data: [13537,14632,34893, 18009,42773 ,  68662],
          backgroundColor: 'rgb(194,135,41,0.5)',
          borderColor: '#010101',
          borderWidth: 1,
        }
      ],
    };

    const dates = ['26 january', '27 january', '28 january', '29 january', '30 january'];
     const dataLineStockIn = {
      labels: dates,
      datasets: [
        {
          label: 'Rio',
          data: [28,30,45,41,1],
          backgroundColor: 'rgb(194,135,41,0.5)',
          borderColor: 'rgb(194,135,41)',
        },
        {
          label: 'Roubaix',
          data: [2,24,80,4,3],
          backgroundColor: 'rgb(216,172,99,0.5)',
          borderColor: 'rgb(216,172,99)',
        },
      ],
    };

    const dataLineStockOut = {
      labels: dates,
      datasets: [
        {
          label: 'Rio',
          data: [84,45,26,51,66],
          backgroundColor: 'rgb(194,135,41,0.5)',
          borderColor: 'rgb(194,135,41)',
        },
        {
          label: 'Roubaix',
          data: [2,8,20,24,16],
          backgroundColor: 'rgb(216,172,99,0.5)',
          borderColor: 'rgb(216,172,99)',
        },
      ],
    };

    const dataStockRepartitions = {
      labels: [
        'Rio',
        'Roubaix'
      ],
      datasets: [{
        label: 'bags (60kg)',
        data: [450, 225],
        backgroundColor: [
          'rgb(194,135,41)',
          'rgb(216,172,99,0.5)'          
        ],
        hoverOffset: 4
      }]
    };

    const dataStockMarket = {
      stocks : [
        {
          title:"company 1",
          isUp : true,
          amount : 0.864
        },
        {
          title:"company 2",
          isUp : false,
          amount : 1.864
        },
        {
          title:"company 3",
          isUp : true,
          amount : 0.045
        },
        {
          title:"company 4",
          isUp : true,
          amount : 0.864
        },
        {
          title:"company 5",
          isUp : false,
          amount : 1.864
        },
        {
          title:"company 6",
          isUp : false,
          amount : 0.045
        }
      ]
    }

  return (<Layout>
    <div>
    <div className='flex flex-row items-end'>
    <IconLogo/>
    <h1 className='text-zinc-700'>Super Coffee Company</h1>
    </div>
    </div>

    <div className='flex flex-row'>
    <div className='w-full sm:w-1/2'>
      <h2>buy</h2>
    <RadarChart data={dataRadarProduction}/>
    
    </div>

    <div className='w-full sm:w-1/2'>
      <h2>buy</h2>
      <RadarChart data={dataRadarSales}/>
    </div>
    </div>

        <div className='flex flex-row'>
    <div className='w-full lg:w-1/2'>
      <h2>entry stock by warehouse bags(60kg)</h2>
    <LineChart data={dataLineStockIn}/>
    
    </div>

    <div className='w-full lg:w-1/2'>
      <h2>exit stock by warehouse bags(60kg)</h2>
      <LineChart data={dataLineStockOut}/>
    </div>
    </div>    

    






    <div className='flex flex-row'>
    <div className='w-full lg:w-1/2'>
      <h2>stock in warehouse bags(60kg)</h2>
    <PieChart data={dataStockRepartitions}/>    
    </div>
    <div className='w-full lg:w-1/2'>
      <h2>stock market</h2>
      <GridStockMarket stocks={dataStockMarket.stocks}/>
    </div>
        
    </div>    

    
  
  </Layout>)
}

//export async function getServerSideProps() {
  export async function getStaticProps() {

  //const event = await request(`localhost:3002/report`); 
  const res = await fetch(`http:127.0.0.1:3002/report`)
  const data = await res.json()
  console.log(data);
  return {
    props: {
       
    },
    //revalidate: 5
  }
}
