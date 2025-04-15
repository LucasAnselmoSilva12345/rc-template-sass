import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <h1 className="text-3xl font-bold">Landing Pages</h1>

      <Link href="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
