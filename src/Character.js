import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Character.css';

function Character({
    character,
    isHovered,
    isOthersHovered,
    onMouseEnter,
    onMouseLeave,
}) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(character.link);
    };

    const style = {
        '--x': character.position?.x || '0%',
        '--y': character.position?.y || '0%',
        maxWidth: character.size || '20%',
        left: character.position?.x || '0%',
        top: character.position?.y || '0%',
    };

    return (
        <div
            className={`character-container ${isHovered ? 'hovered' : ''} ${isOthersHovered ? 'blurred' : ''
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={handleClick}
            style={style}
        >
            <img
                src={character.imageUrl}
                alt={character.name}
                className="character-image"
            />
        </div>
    );
}

export default Character;
