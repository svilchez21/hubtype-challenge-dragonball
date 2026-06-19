// captures what user types and button pressing

import React,{ useState } from 'react';

function FilterFields({ onSearch }) {
    const [searchKey, setSearchKey] = useState('');
    const [minKi, setMinKi] = useState('');
    const [maxKi, setMaxKi] = useState('');

    const handleSubmit = () => {
        // Send the input values back up to the page logic
        onSearch({ searchKey, minKi, maxKi });
    };

    return (
        <div style={{ background: '#f1f5f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
            <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#6a686c' }}>
                Type a name or the beginning of their first or second name
            </p>
            <div style={{ marginBottom: '10px' }}>
                <input 
                    type="text" 
                    placeholder="Search by name..." 
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
                    style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
            </div>
            <p style={{ margin: '0 0 6px 0', fontSize: '13px', color: '#6a686c' }}>
                Filter by Ki power range
            </p>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <input 
                    type="number" 
                    placeholder="Min Ki" 
                    value={minKi}
                    onChange={(e) => setMinKi(e.target.value)}
                    style={{ flex: 1, padding: '8px' }}
                />
                <input 
                    type="number" 
                    placeholder="Max Ki" 
                    value={maxKi}
                    onChange={(e) => setMaxKi(e.target.value)}
                    style={{ flex: 1, padding: '8px' }}
                />
            </div>
            <button 
                onClick={handleSubmit}
                onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(249, 115, 22, 0.5)';
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                }}
                style={{ 
                    width: '100%', 
                    padding: '10px', 
                    background: '#f97316', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    fontFamily: 'Inter, sans-serif'
                }}
            >
                Search
            </button>
        </div>
    );
}

export default FilterFields;