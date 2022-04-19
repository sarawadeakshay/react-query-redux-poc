import { useQuery } from 'react-query';
import { useAppDispatch } from '../app/hooks';
import { fetchChar } from '../components/characters/CharactersSlice';

const fetchCharacters = async ({ queryKey }: any) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`,
  );
  return response.json();
};

function useGetCharacters(page = 1) {
  const dispatch = useAppDispatch();
  return useQuery(['characters', page], fetchCharacters, {
    onSuccess: (d) => {
      dispatch(fetchChar(d.results));
    },
    // cacheTime: 2000
  });
}

export default useGetCharacters;
