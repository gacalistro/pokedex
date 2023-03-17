// TYPES
import { PokemonApiProps } from "@/app/regions/[region]/page";
// COMPONENTS
import { PokemonImage } from "./PokemonImage";

export function PokemonCard({ name, url }: PokemonApiProps) {
  const pokemonId = url.replace(/[^\d]|(?<=v)\d/gm, "");

  return (
    <div className="px-6 py-7 flex justify-between items-center bg-white/10 border border-white/25 rounded-2xl hover:border-white hover:bg-white/20 transition-all">
      <div className="flex flex-col">
        <span className="font-medium text-xs text-gray-200">
          Nº{pokemonId.padStart(3, "0")}
        </span>
        <span className="font-semibold text-xl capitalize">{name}</span>
      </div>
      <PokemonImage pokemonId={Number(pokemonId)} size={40} />
    </div>
  );
}
