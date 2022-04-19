import React, { useState } from 'react';
import Character from '../character/Character';
import CharacterInterface from '../../interface/CharacterInterface';
import useGetCharacters from '../../hooks/useGetCharacters';

const Characters1 = () => {
  const [page, setPage] = useState(1);

  const { data, status } = useGetCharacters(page);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div className='characters'>
      {data.results.map((character: CharacterInterface) => (
        <Character character={character} key={character.id} />
      ))}
      <div>
        <button
          type='button'
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          type='button'
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Characters1;
