import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [news, setNews] = useState([])
    const [totalNews, setTotalNews] = useState(0)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            const newsActives = data.articles.filter( n => n.url != 'https://removed.com' && n.urlToImage != null) 

            setNews(newsActives) 
            setTotalNews(newsActives.length)
        }
        consultarAPI()
    }, [categoria])
    
    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }

    return(
        <NewsContext.Provider
            value={{
                categoria,
                handleChangeCategoria,
                news
            }}
        >
            {children} 
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext