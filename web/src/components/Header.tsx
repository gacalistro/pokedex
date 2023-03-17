import Link from "next/link";
import Image from "next/image";
import ChevronLeftIcon from "/public/chevron-left.svg";

interface HeaderProps {
  title?: string;
  gen?: number;
}

export function Header({ title, gen }: HeaderProps) {
  return (
    <div className="w-screen fixed left-0 top-0 bg-background/70 z-10">
      <div className="max-w-6xl mx-auto px-3 md:px-12  my-5 flex items-center justify-between font-semibold text-xl capitalize">
        <Link
          href={`${gen ? "/regions/" + gen : "/"}`}
          className="hover:brightness-75"
        >
          <Image src={ChevronLeftIcon} alt="Chevron Left Icon" width={24} />
        </Link>
        {title}
        <div className="w-4 h-4" />
      </div>
    </div>
  );
}
