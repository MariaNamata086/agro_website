import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="items-center justify-center text-xl text-teal-500">
      <Link href={"/about"}>About us</Link>
      <p className="h-[500px]"></p>
      Hello Welcome to Lwevuze&#39;s website
    </main>
  );
}
