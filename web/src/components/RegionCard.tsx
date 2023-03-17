import Image from "next/image";
import { PokemonImage } from "./PokemonImage";

interface RegionCardProps {
  name: string;
  gen: number;
  listStart: number;
}

export function RegionCard({ name, gen, listStart }: RegionCardProps) {
  const initialPokemon = gen === 5 ? listStart + 1 : listStart;

  return (
    <div className="relative overflow-hidden rounded-2xl lg:h-[130px] 2xl:h-[200px] hover:brightness-125 hover:[&>*]:brightness-75 transition-all duration-200 [&>*]:transition-all [&>*]:duration-200">
      <Image
        src={`/assets/${name}.png`}
        alt="kanto region"
        fill
        sizes={"400px"}
        className="object-cover"
      />

      <div className="flex items-center justify-between gap-3 h-full px-6 py-7 bg-gradient-to-r from-black/70 to-black/20 relative">
        <div className="flex flex-col">
          <span className="font-semibold text-lg capitalize">{name}</span>
          <span className="font-medium text-gray-200 text-xs uppercase">
            {gen}º Geração
          </span>
        </div>

        <div className="flex gap-6">
          <PokemonImage pokemonId={initialPokemon} size={36} />
          <PokemonImage pokemonId={initialPokemon + 3} size={36} />
          <PokemonImage pokemonId={initialPokemon + 6} size={36} />
        </div>
      </div>
    </div>
  );
}
