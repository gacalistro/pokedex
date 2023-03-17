import Link from "next/link";

import { getPokemonId } from "@/utils/getPokemonId";

import { PokemonCard } from "@/components/PokemonCard";
import { Header } from "@/components/Header";

interface RegionParamsProps {
  params: {
    region: number;
  };
}

export interface PokemonApiProps {
  name: string;
  url: string;
}

export default async function Region({ params }: RegionParamsProps) {
  const regionApi = await fetch(
    `https://pokeapi.co/api/v2/generation/${params.region}`
  ).then((response) => response.json());

  const pokemonList = regionApi.pokemon_species.sort(
    (a: any, b: any) =>
      a.url.replace(/[^\d]|(?<=v)\d/gm, "") -
      b.url.replace(/[^\d]|(?<=v)\d/gm, "")
  ) as PokemonApiProps[];

  return (
    <>
      <header>
        <Header title={regionApi.main_region.name} />
      </header>

      <main className="mt-20">
        <div className="flex flex-col gap-3">
          {pokemonList.map((pokemon) => (
            <Link
              key={pokemon.name}
              href={`/pokemons/${getPokemonId(pokemon.url)}`}
            >
              <PokemonCard {...pokemon} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
