import React, { useState } from 'react'
import { Table } from './Table'
import { SearchItems } from './SearchItems'

export const Main = () => {

    const [inpData, setInpData] = useState("")
    const [dataId, setDataId] = useState("")


    const slDataHandler = (id) => {
        setInpData("")
        setDataId(id)
    }

    const onChangeHandler = (e) => {
        setDataId("")
        setInpData(e.target.value)
    }



    return (
        <div className='h-fullscreen'>

            <div className='md:px-16 md:pt-8 font-semibold text-3xl '>Stocks</div>

            <div className='flex justify-center items-center flex-col text-center '>

                <div className='text-3xl font-semibold mt-3'>The easiest way to buy <br />
                    and sell stocks.</div>
                <div className='text-sm mt-3 '>
                    Stock analysis and screening tool for <br />
                    investors in India.
                </div>

                {/* search bar */}
                <div className="relative flex items-center w-1/2 h-12 mt-5 rounded-lg shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-800 pr-2"
                        type="text"
                        id="search"
                        onChange={onChangeHandler}
                        placeholder="Search something.." />
                </div>

                {/* for searching result */}
                {inpData && <SearchItems inpData={inpData} slDataHandler={slDataHandler} />}

                {/* for single data */}
                {dataId && <Table dataId={dataId} />}


            </div>

        </div>


    )
}
