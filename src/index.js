import React from 'react';

import Routes from './routes';
import NewsProvider from './context/News';

function App() {
    return (
        <NewsProvider>
            <Routes />
        </NewsProvider>
    );
}

export default App;
