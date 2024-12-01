// src/CharacterGallery.js
import React, { useState } from 'react';
import Character from './Character';
import character1 from './assets/doodle-01.svg';
import character2 from './assets/doodle-02.svg';
import character3 from './assets/doodle-03.svg';
import character4 from './assets/doodle-04.svg';
import character5 from './assets/doodle-05.svg';
import './CharacterGallery.css';

function CharacterGallery() {
    const [hoveredCharacterId, setHoveredCharacterId] = useState(null);

    const characters = [
        {
            id: 1,
            name: 'Character 1',
            imageUrl: character1,
            link: '/character1',
            size: '15%',
            position: { x: '1%', y: '50%' },
        },
        {
            id: 2,
            name: 'Character 2',
            imageUrl: character2,
            link: '/character2',
            size: '15%',
            position: { x: '18%', y: '50%' },
        },
        {
            id: 3,
            name: 'Character 3',
            imageUrl: character3,
            link: '/character3',
            size: '15%',
            position: { x: '33%', y: '50%' },
        },
        {
            id: 4,
            name: 'Character 4',
            imageUrl: character4,
            link: '/character4',
            size: '15%',
            position: { x: '45%', y: '50%' },
        },
        {
            id: 5,
            name: 'Character 5',
            imageUrl: character5,
            link: '/character5',
            size: '15%',
            position: { x: '60%', y: '50%' },
        },
        // Add more characters as needed
    ];

    const handleMouseEnter = (id) => {
        setHoveredCharacterId(id);
    };

    const handleMouseLeave = () => {
        setHoveredCharacterId(null);
    };

    return (
        <div className="character-gallery">
            {characters.map((character) => (
                <Character
                    key={character.id}
                    character={character}
                    isHovered={hoveredCharacterId === character.id}
                    isOthersHovered={
                        hoveredCharacterId !== null && hoveredCharacterId !== character.id
                    }
                    onMouseEnter={() => handleMouseEnter(character.id)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}

export default CharacterGallery;
