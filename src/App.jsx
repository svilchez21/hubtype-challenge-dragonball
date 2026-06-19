import React, { useState, useEffect } from 'react';
import Lookup from './pages/Lookup';

function App() {
    // Why state? If data changes, React needs to know to re-render the screen.
    const [characters, setCharacters] = useState([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => { // data fetching from an API is async
        
        fetch('https://dragonball-api.com/api/characters?limit=58') // 58 dragon ball characters
            .then((response) => response.json())
            .then((data) => {
                // The API wraps characters inside an items array or direct array
                setCharacters(data.items || data); // forces App() to run a second time ie App is the component that owns this state
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching Dragon Ball characters:", error);
                setLoading(false);
            });
    }, []); // Empty dependency array ie "only run on mount"

    if (loading) return <div>Loading Dragon Ball characters...</div>;

    // We successfully have data! Now pass it to our main page view.
    return <Lookup masterList={characters} />; // invoke the lookup component now that we have prefetched the list of characters
}

export default App;