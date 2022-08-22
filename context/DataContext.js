import React, {createContext, useState} from "react"
import {useRouter} from "next/router";
import axios from "axios"

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [results, setResults] = useState([])
    const router = useRouter()
    const pathname = router.pathname
    const movieId = router.query.id

    // client side fetching
    const onChange = (e) => {
        (async () => {
           try {
               axios.get(
                   `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
               )
                   .then((res) => {
                       if (!res.data.errors) {
                           setResults(res.data.results);
                       } else {
                           setResults([]);
                       }
                   });
           }  catch (err) {
               console.log(err);
               setResults([])
           } finally {
               if (e.target.value.length === 0) {
                   setResults([])
               }
           }
        })()
    }

    return (
        <DataContext.Provider value={{
            results, onChange, movieId, pathname
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext