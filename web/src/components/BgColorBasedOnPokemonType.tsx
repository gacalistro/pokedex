import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  pokemonType: string;
}

export function BgColorBasedOnPokemonType({ children, pokemonType }: Props) {
  return (
    <div
      className={clsx("", {
        ["[&>*]:bg-type-water"]: pokemonType === "water",
        ["[&>*]:bg-type-grass"]: pokemonType === "grass",
        ["[&>*]:bg-type-fire"]: pokemonType === "fire",
        ["[&>*]:bg-type-bug"]: pokemonType === "bug",
        ["[&>*]:bg-type-electric"]: pokemonType === "electric",
        ["[&>*]:bg-type-normal"]: pokemonType === "normal",
        ["[&>*]:bg-type-ground"]: pokemonType === "ground",
        ["[&>*]:bg-type-fairy"]: pokemonType === "fairy",
        ["[&>*]:bg-type-rock"]: pokemonType === "rock",
        ["[&>*]:bg-type-poison"]: pokemonType === "poison",
        ["[&>*]:bg-type-psychic"]: pokemonType === "psychic",
        ["[&>*]:bg-type-steel"]: pokemonType === "steel",
        ["[&>*]:bg-type-dragon"]: pokemonType === "dragon",
        ["[&>*]:bg-type-fighting"]: pokemonType === "fighting",
        ["[&>*]:bg-type-dark"]: pokemonType === "dark",
        ["[&>*]:bg-type-ghost"]: pokemonType === "ghost",
        ["[&>*]:bg-type-ice"]: pokemonType === "ice",
        ["[&>*]:bg-type-flying"]: pokemonType === "flying",
      })}
    >
      {children}
    </div>
  );
}
