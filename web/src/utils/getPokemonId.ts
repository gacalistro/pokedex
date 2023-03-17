export function getPokemonId(url: string) {
  return url.replace(/[^\d]|(?<=v)\d/gm, "");
}
