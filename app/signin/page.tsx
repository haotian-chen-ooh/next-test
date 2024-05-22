"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  const { status } = useSession();

  // work around to skip nextauth login page
  // could be replaced with `auth()` on server side
  // once nextauth v5 stable version is released
  useEffect(() => {
    if (status === "unauthenticated") {
      void signIn("github");
    } else if (status === "authenticated") {
      void router.push("/");
    }
  }, [status]);

  return <div>auth redirecting...</div>;
}
