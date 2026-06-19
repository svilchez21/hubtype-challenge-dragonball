import React from 'react';
import CharacterRow from './CharacterRow';

function CharacterAccordion({ characters }) {
    return (
        <div>
            {characters.length > 0 ? (
                characters.map((char) => (
                    <CharacterRow key={char.id} character={char} />
                ))
            ) : (
                <p>No warriors match your criteria.</p>
            )}
        </div>
    );
}

export default CharacterAccordion;