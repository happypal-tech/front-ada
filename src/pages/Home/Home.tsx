import { useEffect, useState } from 'react';

import { CharacterCard } from '../../components/CharacterCard/CharacterCard';

export const HomePage = () => {
  const [characters, setCharacters] = useState<
    { id: number; name: string; species: string; image: string }[]
  >([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);
    const data = await response.json();
    setCharacters(data.results);
  };

  return (
    <div className="p-4">
      <h2 className="text-indigo-600 text-3xl font-bold mx-auto text-center mt-8">
        Anomaly Detection Agency
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4 mt-10">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};
