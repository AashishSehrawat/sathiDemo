'use client'

import Li from "@/components/liDashboardSidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../../assets/logo.png";

export default function StudentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <div className="w-full min-h-screen flex gap-6 bg-gray-100">
      <div className="bg-white pt-4 w-80 flex flex-col gap-6">
        <div className="w-fit pl-3">
          <Link href="/">
            <Image src={logo} alt="Logo" width={200} />
          </Link>
        </div>
        <div className="px-8">
            <h3 className="text-gray-500 font-semibold pb-2 text-[1.2rem]">Dashboard</h3>
          <ul className="">
            <Li url="/student/dashboard" text="Dashboard" pathname={pathname} />
            <Li url="/student/colleges" text="Colleges" pathname={pathname} />
            <Li url="/student/events" text="Events" pathname={pathname} />
            <Li url="/student/mentors" text="Mentors" pathname={pathname} />
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}
