import { handleAuth } from '@/app/actions/handle-auth';
import { auth } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="flex flex-col items-center justify-center h-svh">
      <h1 className="text-3xl font-bold">Protected Dashboard</h1>
      <p>
        {session?.user?.email
          ? session?.user?.email
          : 'Usuário não está logado'}
      </p>
      {session?.user?.email && (
        <form action={handleAuth}>
          <button type="submit" className="border rounded cursor-pointer">
            LogOut
          </button>
        </form>
      )}
    </div>
  );
}
