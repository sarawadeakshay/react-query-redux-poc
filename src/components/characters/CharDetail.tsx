import React, { useContext } from 'react';
// import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import Character from '../character/Character';
import CharacterInterface from '../../interface/CharacterInterface';
import { UserContext } from './UserContext';
// import useGetCharacters from './hooks/useGetCharacters';

const CharDetail = () => {
  const params = useParams();
  const charID = params.id;
  const charList: CharacterInterface[] = useAppSelector((state) => state.characters.charactersList);

  const char: CharacterInterface[] = charList.filter((c) => c.id === Number(charID));
  const user = useContext(UserContext);
  // const { data } = useGetCharacters();
  // const char: CharacterInterface[] =
  // data.results.filter((char: CharacterInterface) => char['id'] === Number(charID));
  return (
    <div>
      <h3>User: {user.email}</h3>
      Char Detail:
      <Character character={char[0]} />
    </div>

  );
};

export default CharDetail;
