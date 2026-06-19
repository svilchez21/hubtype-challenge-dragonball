import React, { useState } from 'react';

function CharacterRow({ character }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(251, 191, 36, 0.5)';
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
            }}
            style={{ 
                border: '4px solid #f59e0b', 
                borderRadius: '12px', 
                marginBottom: '12px', 
                backgroundColor: '#fbbf24', 
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
        >
            {/* Clickable header */}
            <div 
                onClick={() => setIsOpen(!isOpen)} 
                style={{ 
                    padding: '12px 15px', 
                    cursor: 'pointer', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    userSelect: 'none',
                    
                }}
            >
                <span style={{ fontWeight: 'bold', fontSize: '16px', fontFamily: 'Bangers, cursive', letterSpacing: '2px' }}>{character.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '15px', fontFamily: 'Bangers', letterSpacing: '2px'}}>{character.ki}</span>
                    <span style={{ color: '#92400e', fontSize: '20px' }}>{isOpen ? '∧' : '∨'}</span>
                </div>
            </div>

            {/* Expanded card */}
            {isOpen && (
                <div>
                    {/* Image */}
                    {character.image && (
                        <img 
                            src={character.image} 
                            alt={character.name} 
                            style={{ width: '100%', height: '250px', objectFit: 'contain', display: 'block' }} 
                        />
                    )}

                    {/* Name + Ki bar */}
                    <div style={{ 
                        backgroundColor: '#111', 
                        color: 'white', 
                        padding: '10px 15px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center' 
                    }}>
                        <span style={{ fontWeight: 'bold', fontSize: '22px', fontFamily: 'Bangers, cursive', letterSpacing: '2px'  }}>{character.name}</span>
                        <span style={{ fontWeight: 'bold', fontSize: '22px', fontFamily: 'Bangers, cursive', letterSpacing: '2px'  }}>{character.ki}</span>
                    </div>

                    {/* Description */}
                    <div style={{ padding: '15px', backgroundColor: '#fbbf24' }}>
                        <p style={{ margin: 0, fontSize: '15px', lineHeight: '1.5', color: '#1c1c1c', textAlign: 'justify' }}>
                            {character.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CharacterRow;