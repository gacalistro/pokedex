import Image from "next/image";
import ChevronDown from "/public/chevron-down.svg";
import clsx from "clsx";

import { Header } from "@/components/Header";
import { PokemonImage } from "@/components/PokemonImage";
import { BgColorBasedOnPokemonType } from "@/components/BgColorBasedOnPokemonType";

interface PokemonProps {
  name: string;
  species: string;
  types: string[];
  abilities: {
    normal: string[];
    hidden: string[];
  };
  gender: number[];
  height: string;
  weight: string;
  family: {
    id: number;
    evolutionStage: number;
    evolutionLine: string[];
  };
  description: string;
  gen: number;
}

interface PokemonParamsProps {
  params: {
    pokemonId: number;
  };
}

export default async function Pokemon({ params }: PokemonParamsProps) {
  const pokemonApi = await fetch(
    `https://pokeapi.glitch.me/v1/pokemon/${params.pokemonId}`
  ).then((response) => response.json());

  const pokemon = pokemonApi[0] as PokemonProps;

  return (
    <>
      <header>
        <Header gen={pokemon.gen} />
      </header>

      <main className="mt-20 max-w-3xl mx-auto">
        <div className="relative flex justify-between">
          <div className="flex flex-col">
            <span className="font-medium text-3xl">{pokemon.name}</span>
            <span className="font-medium text-base text-gray-200">
              Nº{params.pokemonId.toString().padStart(3, "0")}
            </span>

            <div className="mt-7 flex gap-3">
              {pokemon.types.map((type) => (
                <BgColorBasedOnPokemonType
                  key={type}
                  pokemonType={type.toLowerCase()}
                >
                  <div className="px-3 py-1 rounded-full font-medium text-background">
                    {type}
                  </div>
                </BgColorBasedOnPokemonType>
              ))}
            </div>

            <p className="mt-6 font-regular text-sm">{pokemon.description}</p>
          </div>

          <BgColorBasedOnPokemonType
            pokemonType={pokemon.types[0].toLowerCase()}
          >
            <div
              className={
                "p-10 rounded-tl-[100px] rounded-b-[100px] relative w-1/2 h-1/2 sm:w-32 sm:h-32 md:w-40 md:h-40"
              }
            >
              <PokemonImage pokemonId={params.pokemonId} />
            </div>
          </BgColorBasedOnPokemonType>
        </div>

        <div className="mt-6 mx-auto grid grid-cols-2 gap-4 md:gap-10 md:mt-12">
          <div>
            <span>Peso</span>
            <div className="mt-1 py-2 font-medium text-lg text-center border border-gray-200/25 rounded-2xl">
              {pokemon.weight}
            </div>
          </div>

          <div>
            <span>Altura</span>
            <div className="mt-1 py-2 font-medium text-lg text-center border border-gray-200/25 rounded-2xl">
              {pokemon.height}
            </div>
          </div>

          <div>
            <span>Categoria</span>
            <div className="mt-1 py-2 font-medium text-lg text-center border border-gray-200/25 rounded-2xl">
              {pokemon.species}
            </div>
          </div>

          <div>
            <span>Habilidades</span>
            <div className="mt-1 py-2 font-medium text-lg text-center border border-gray-200/25 rounded-2xl">
              {pokemon.abilities.normal.map((ability) => (
                <div key={ability}>{ability}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 max-w-md mx-auto">
          <span className="block font-medium text-center mb-1">Gênero</span>

          {pokemon.gender.length > 0 ? (
            <div className="relative">
              <div className="w-full h-2 bg-red-400 rounded-full" />
              <div
                className={clsx(
                  "h-2 bg-blue-400 rounded-l-full absolute top-0",
                  {
                    ["rounded-full"]: pokemon.gender[0] === 100,
                  }
                )}
                style={{ width: `${pokemon.gender[0]}%` }}
              />
            </div>
          ) : (
            <div className="w-full h-2 rounded-full  border border-gray-200/25" />
          )}

          <div className="flex justify-between">
            <div>{pokemon.gender[0] ?? "0"}%</div>
            <div>{pokemon.gender[1] ?? "0"}%</div>
          </div>
        </div>

        <div className="mb-10">
          <span className=" max-w-md mx-auto mt-10 mb-6 block font-medium">
            Evoluções
          </span>

          {pokemon.family.evolutionLine.length > 1 ? (
            <div className="flex flex-col items-center">
              {pokemon.family.evolutionLine.map(
                (pokemonEvolutionName, index) => (
                  <div key={pokemonEvolutionName}>
                    {pokemon.family.evolutionLine.length > index &&
                      index !== 0 && (
                        <Image
                          src={ChevronDown}
                          alt=""
                          width={24}
                          height={24}
                          className="mx-auto my-3"
                        />
                      )}

                    <div
                      className={clsx(
                        "max-w-[150px] px-4 py-1 border border-white rounded-xl text-center",
                        {
                          ["bg-white/10"]:
                            pokemon.family.evolutionStage === index + 1,
                          ["brightness-50"]:
                            pokemon.family.evolutionStage !== index + 1,
                        }
                      )}
                    >
                      {pokemonEvolutionName}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="font-normal text-gray-200 text-sm">
              Este pokémon não evolui.
            </div>
          )}
        </div>
      </main>
    </>
  );
}
