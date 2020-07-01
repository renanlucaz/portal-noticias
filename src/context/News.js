import React, { createContext, useState, useContext } from 'react';

const NewsContext = createContext();

export default function NewsProvider({ children }) {
    const [news, setNews] = useState([]);

    return (
        <NewsContext.Provider value={{ news, setNews }}>
            {children}
        </NewsContext.Provider>
    );
}

export function useNews() {
    const context = useContext(NewsContext);
    const { news, setNews } = context;
    return { news, setNews };
}
