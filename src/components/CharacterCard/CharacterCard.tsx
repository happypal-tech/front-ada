type Character = {
  id: number;
  name: string;
  species: string;
  image: string;
};

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = (props: CharacterCardProps) => {
  const { character } = props;

  return (
    <div className="flex flex-col items-center rounded-lg shadow-md md:flex-row transition-colors bg-gray-800 hover:bg-gray-700">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={character.image}
        alt={character.name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {character.name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {character.species}
        </p>
      </div>
    </div>
  );
};
