import { useFetch } from "../Hooks/useFetch"

export const SearchItems = ({ inpData, slDataHandler }) => {


    const { data, loading } = useFetch(`http://127.0.0.1:8888/stockName?name=${inpData}`)

    return (
        <ul className='w-3/6'>
            {loading ? "Loading..." : data?.map((items) => {
                return (
                    <li key={items._id} onClick={() => { slDataHandler(items._id) }}
                        className="hover:cursor-pointer text-red-500 py-4 text-left  mt-1 pl-5 hover:bg-neutral-50 rounded-lg shadow-md bg-slate-100 overflow-hidden">
                        {items.Name}
                    </li>)
            })}
        </ul>
    )
}
