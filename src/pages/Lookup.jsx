import React, { useState, useEffect } from 'react';
import FilterFields from '../components/FilterFields'; 
import CharacterAccordion from '../components/CharacterAccordion';

function Lookup({ masterList }) {
    // 1/2 LOGIC
    // Search fields tracking as variables
    const [searchValues, setSearchValues] = useState({ searchKey: '', minKi: '', maxKi: '' });
    // characters that currently comply with filters. Start off as all
    const [filteredCharacters, setFilteredCharacters] = useState([]);


    useEffect(() => {
        const { searchKey, minKi, maxKi } = searchValues;
        
        const results = (masterList || []).filter((character) => {
            const matchesName = character.name.toLowerCase().split(' ').some(word => word.startsWith(searchKey.toLowerCase()));
            
            const characterKi = parseKi(character.ki);

            const matchesMinKi = minKi === '' || characterKi >= Number(minKi);
            const matchesMaxKi = maxKi === '' || characterKi <= Number(maxKi);

            return matchesName && matchesMinKi && matchesMaxKi;
        });

        setFilteredCharacters(results);
    }, [masterList, searchValues]); // Re-runs filtering whenever data or search parameters shift

    // mathematical 
    const handleSearch = (incomingFields) => {
        setSearchValues(incomingFields);
    };

    // 2/2 RENDERED UI
    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}> 
                <h2 style={{ fontFamily: 'Bangers, cursive', fontSize: '40px', letterSpacing: '2px', margin: 0 }}>
                    Dragon Ball Character Finder
                </h2>
                <img 
                    src="/src/assets/images/LOGO.png" 
                    alt="Dragon Ball Logo" 
                    style={{ height: '60px', objectFit: 'contain' }}
                />
            </div>
           
        <FilterFields onSearch={handleSearch} />

        <h4 style={{fontFamily: 'Bangers', letterSpacing: '1px' }}>{filteredCharacters.length} results found</h4>
        
        <CharacterAccordion characters={filteredCharacters} />
        </div>
    );
}

const parseKi = (kiString) => {
    if (!kiString) return 0; // if kiString is empty

    const cleanStr = kiString.replace(/[,.]/g, '').toLowerCase().trim();
    const words = ['billion', 'trillion', 'quadrillion', 'quintillion', 'septillion', 'googolplex']
    if ( words.some(word => cleanStr.includes(word))) {
        return Infinity;
    }

    if (cleanStr.includes('unknown')) return 0;

    return Number(cleanStr);
};

export default Lookup;