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
import { studentRegisterSchema } from "@/schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import register from "../../../../assets/studentSignup.webp";
import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function StudentRegisterForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof studentRegisterSchema>>({
    resolver: zodResolver(studentRegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "student",
      school: "",
      standard: "",
      dob: "",
    },
  });

  async function onSubmit(values: z.infer<typeof studentRegisterSchema>) {
    setLoading(true);

    const parsedValues = {
      ...values,
      dob: new Date(values.dob),
    };
    try {
      toast.promise(axios.post("/api/auth/register", parsedValues), {
        loading: "Registering...",
        success: (res) => {
          console.log("Response of user register:", res.data);
          router.push("/login");
          return "Registered successfully!";
        },
        error: (err) => {
          console.error("Register error:", err);
          return (
            err.response?.data?.message ||
            "Registration failed. Please try again."
          );
        },
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-[92vh] flex justify-center items-center">
      <div className="w-8/12 h-[80vh] shadow-lg flex rounded-2xl">
        <div className="w-5/12 h-full relative">
          <Image
            src={register}
            alt="Register Img"
            fill
            className="object-contain object-left rounded-tl-2xl rounded-bl-2xl"
          />
        </div>
        <div className="w-7/12 p-3 flex justify-center items-center">
          <div className="w-full pr-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="Enter your name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

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
                <div className="flex w-full gap-6">
                  <FormField
                    control={form.control}
                    name="school"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>School</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Enter your school"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="standard"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Standard</FormLabel>
                        <FormControl>
                          <Input
                            className="w-full"
                            type="text"
                            placeholder="Enter your standard"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>DOB</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          placeholder="Enter your dob"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Submit"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
