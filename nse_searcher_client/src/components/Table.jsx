import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Table = ({ data }) => {
    const [singleData, setSingleData] = useState({})

    useEffect(() => {
        const fetchData = () => {
            try {
                data && axios.get(`http://127.0.0.1:8888/stock?id=${data}`).then(res => setSingleData(res.data))

            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [data])

    return (
        <div className="w-3/5 mt-5 rounded-lg shadow-lg bg-white overflow-hidden">
            <div className='pt-5 pl-4 pb-10 font-semibold text-xl '>{singleData.Name}</div>

            <div className='flex '>

                <div className='flex-1'>

                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span className=''>Market Cap</span>
                        <span className='text-red-500 text-right '>₹{singleData.MarketCap}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Current Price </span>
                        <span className='text-red-500  '>₹{singleData.CurrentMarketPrice}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span className=''>Stock P/E</span>
                        <span className='text-red-500 '>₹{singleData.StockP_E}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Debt</span>
                        <span className='text-red-500  '>₹{singleData.Debt}</span>
                    </div>

                </div>

                <div className='flex-1 '>

                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Dividnet Yield</span>
                        <span className='text-red-500 '>₹{singleData.DividendYield}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>ROCE</span>
                        <span className='text-red-500 '>₹{singleData.ROCE}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>ROE</span>
                        <span className='text-red-500 '>₹{singleData.ROEPreviousAnnum}</span>
                    </div>

                </div>

                <div className='flex-1 '>

                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Debt Equality </span>
                        <span className='text-red-500'>₹{singleData.DebttoEquity}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Eps</span>
                        <span className='text-red-500 '>₹{singleData.EPS}</span>
                    </div>
                    <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                        <span>Reserves</span>
                        <span className='text-red-500 '>₹{singleData.Reserves}</span>
                    </div>

                </div>

            </div>
        </div>
    )
}
