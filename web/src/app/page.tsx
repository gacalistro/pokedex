import Link from "next/link";

import { regions } from "../utils/regionsData";

import { RegionCard } from "@/components/RegionCard";

export default function Home() {
  return (
    <>
      <header>
        <h1 className="my-7 font-semibold text-xl">Regiões</h1>
      </header>

      <main>
        <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-6 mb-6">
          {regions.map((region) => (
            <Link key={region.name} href={`/regions/${region.gen}`}>
              <RegionCard {...region} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
