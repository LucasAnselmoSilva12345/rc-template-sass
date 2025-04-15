import { handleAuth } from '@/app/actions/handle-auth';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-svh space-y-5">
      <h1>Login Page</h1>
      <form action={handleAuth}>
        <button type="submit" className="border rounded cursor-pointer">
          Signin with Google
        </button>
      </form>
    </div>
  );
}
