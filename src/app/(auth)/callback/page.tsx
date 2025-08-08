"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { toast } from "sonner";

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    async function redirectUser() {
      const session = await getSession();
      if (!session?.user) {
        toast.error("Login failed!");
        router.push("/login");
        return;
      }

      toast.success("Login successful!");

      switch (session.user.role) {
        case "student":
          router.push("/student/dashboard");
          break;
        case "mentor":
          router.push("/mentor/dashboard");
          break;
        case "admin":
          router.push("/admin/dashboard");
          break;
        default:
          router.push("/");
      }
    }

    redirectUser();
  }, [router]);

  return <p className="text-center mt-10 text-xl">Redirecting...</p>;
}
