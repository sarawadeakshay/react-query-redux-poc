/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
interface Character1 {
  id: number;
  name: string;
  status: string;
  location: {
    name: string;
  };
  image: string;
  species: string;
}

const Character = ({ character }: {character: Character1}) => {
  const navigate = useNavigate();
  const onCharClick = (char: Character1) => {
    navigate(`/char/${char.id}`);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className='card' onClick={() => onCharClick(character)}>
      <img src={character.image} alt='' />
      <div className='text-container'>
        <h3>{character.name}</h3>
        <p className='status'>
          {character.status} - {character.species}
        </p>
        <p className='title'>Last seen on</p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
};

export default Character;
