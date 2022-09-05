
import { useFetch } from '../Hooks/useFetch'

export const Table = ({ dataId }) => {
    const { data, loading } = useFetch(`http://127.0.0.1:8888/stock?id=${dataId}`)

    return (<>
        {loading ? "Loading..." : data &&
            <div className="w-3/5 mt-5 rounded-lg shadow-lg bg-white overflow-hidden">
                <div className='pt-5 pl-4 pb-10 font-semibold text-xl '>{data.Name}</div>

                <div className='flex '>

                    <div className='flex-1'>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span className=''>Market Cap</span>
                            <span className='text-red-500 text-right '>₹{data.MarketCap}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Current Price </span>
                            <span className='text-red-500  '>₹{data.CurrentMarketPrice}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span className=''>Stock P/E</span>
                            <span className='text-red-500 '>₹{data.StockP_E}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Debt</span>
                            <span className='text-red-500  '>₹{data.Debt}</span>
                        </div>

                    </div>

                    <div className='flex-1 '>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Dividnet Yield</span>
                            <span className='text-red-500 '>₹{data.DividendYield}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>ROCE</span>
                            <span className='text-red-500 '>₹{data.ROCE}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>ROE</span>
                            <span className='text-red-500 '>₹{data.ROEPreviousAnnum}</span>
                        </div>

                    </div>

                    <div className='flex-1 '>

                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Debt Equality </span>
                            <span className='text-red-500'>₹{data.DebttoEquity}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Eps</span>
                            <span className='text-red-500 '>₹{data.EPS}</span>
                        </div>
                        <div className="flex justify-between pb-2 mx-2 text-sm rounded-sm bg-neutral-50 shadow-sm">
                            <span>Reserves</span>
                            <span className='text-red-500 '>₹{data.Reserves}</span>
                        </div>

                    </div>

                </div>
            </div>}
    </>

    )
}
