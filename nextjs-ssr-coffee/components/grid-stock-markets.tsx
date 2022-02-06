import React from 'react'; // we need this to make JSX compile

type GridStockMarketProps = {
  stocks: StockMarketProps[]
}

type StockMarketProps = {
    title:string,
    isUp : boolean,
    amount : number
}

export const GridStockMarket = ({ stocks }: GridStockMarketProps) => 
<div className="">
  <div className='grid grid-cols-3 text-center p-4 m-4'>
  {stocks.map((stock, index) => (
        <div key={index} className='shadow-lg rounded-lg overflow-hidden'>
          <h2>{stock.title}</h2>
          <div>          
          {stock.isUp ? '+' : '-' } {stock.amount}
            </div>
          </div>
      ))}
  </div>
  </div>

