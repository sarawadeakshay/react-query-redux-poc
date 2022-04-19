export default interface Character {
  id: number;
  name: string;
  status: string;
  location: {
    name: string;
  };
  image: string;
  species: string;
};
