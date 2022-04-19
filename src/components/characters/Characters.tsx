import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import environment from 'environment';
import Character from '../character/Character';
import CharacterInterface from '../../interface/CharacterInterface';
// import { fetchChar } from './CharactersSlice';
import useGetCharacters from '../../hooks/useGetCharacters';
// import { UserContext } from './UserContext';

const Characters = () => {
  const env = environment();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { data, status } = useGetCharacters(page);
  // const userCtx = useContext(UserContext);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  const onCharClick = () => {
    navigate('/1');
  };

  return (
    <div className='characters'>
      ENV variables = name: <strong>{env.name}</strong>  key: <strong>{env.key}</strong>
      mode: <strong>{env.mode}</strong>
      {/* <h2>
        User Name:
        {userCtx.name}
      </h2>
      <h2>User Email:{userCtx.email} </h2>
      <h2>User Age:{userCtx.age} </h2> */}
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

        <button type='button' onClick={onCharClick}>Dup Chars Comp</button>
      </div>
    </div>
  );
};

export default Characters;
