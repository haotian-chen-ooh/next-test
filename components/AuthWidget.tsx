"use client";
import type { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";

const SignInButton = () => (
  <button onClick={() => signIn("github")}>Sign in</button>
);
const SignOutButton = () => <button onClick={() => signOut()}>Sign out</button>;

interface AuthWidgetProps {
  session: Session | null;
}

export const AuthWidget = ({ session }: AuthWidgetProps) => {
  return session ? <SignOutButton /> : <SignInButton />;
};
