"use client";

import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

const SignInButton = () => (
  <button onClick={() => signIn("github")}>Sign in</button>
);
const SignOutButton = () => <button onClick={() => signOut()}>Sign out</button>;

const AuthWidget = () => {
  const { data } = useSession();

  return (
    <div>
      {data ? <SignOutButton /> : <SignInButton />}
      <div>session data: {JSON.stringify(data)}</div>
    </div>
  );
};

export const WrappedAuthWidget = () => {
  return (
    <SessionProvider>
      <AuthWidget />
    </SessionProvider>
  );
};
