"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schema/siginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { getSession, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import logo from "../../../assets/logo.png";

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    setLoading(false);

    if (res?.error) {
      console.log("Login failed: ", res.error);
      toast.error("Login Failed");
      return;
    }

    const session = await getSession();

    toast.success("Login successfully!");
    router.push("/callback");
  }

  return (
    <div className="w-full h-[92vh]">
      <div className="pt-2 pl-2 w-fit">
        <Link href="/">
          <Image src={logo} alt="Logo" width={200} />
        </Link>
      </div>
      <div className="flex justify-center items-center h-[92vh]">
        <div className="flex flex-col gap-6 shadow-lg p-10 rounded-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="cursor-pointer bg-[var(--blue)] text-[1.05rem] w-full transition duration-300 hover:bg-black"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </Button>
            </form>
          </Form>
          <div className="flex gap-2 justify-center items-center">
            <div className="flex-grow h-px bg-gray-300"></div>
            <div className="text-gray-500">OR</div>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <Button
            type="button"
            disabled={loading}
            className="cursor-pointer transtition-all hover:bg-gray-600 py-1 px-10 text-[1.01rem]"
            onClick={() => {
              setLoading(true);
              signIn("google", { callbackUrl: "/student/dashboard" });
            }}
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google Logo"
              width={20}
              height={20}
            />
            Continue with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
