import Image from "next/image";

interface PokemonImageProps {
  pokemonId: number;
  size?: number;
}

export function PokemonImage({ pokemonId, size }: PokemonImageProps) {
  const pokemonImageUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

  return (
    <>
      {size ? (
        <Image
          src={`${pokemonImageUrl}${pokemonId}.png`}
          alt={`Sprite of Pokemon Nº${pokemonId}`}
          height={size}
          width={size}
        />
      ) : (
        <Image
          src={`${pokemonImageUrl}${pokemonId}.png`}
          alt={`Sprite of Pokemon Nº${pokemonId}`}
          fill
          className="object-contain relative"
        />
      )}
    </>
  );
}
