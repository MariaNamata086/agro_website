import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  let food;
  return (
    <main className='items-center justify-center text-xl text-teal-500'>
      <Link href={'/about'}>About us</Link>
      <p className='h-[500px]'></p>
      Welcome to Lwevuze&#39;s farm website
    </main>
  );
}
