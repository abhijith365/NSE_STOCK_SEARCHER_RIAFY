import axios from "axios"
import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {

        setLoading(true)
        setError(null)
        setData(null)

        axios.get(url).then(res => {
            setLoading(false)
            res.data && setData(res.data)
        }).catch(e => {
            setLoading(false)

            setError(true)
            console.log(e)
        })
    }, [url])

    return { error, loading, data }
}