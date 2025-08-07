"use client";

import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";


type HeaderProps = {
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    servicesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

const Header = ({ homeRef, aboutRef, servicesRef, contactRef }: HeaderProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleSroll = () => {
      setHasScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleSroll);
    return () => window.removeEventListener("scroll", handleSroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-99 py-4 px-26 transition duration-700 top-0 ${
        hasScrolled
          ? "bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
          : "shadow-none"
      }`}
    >
      <div className="flex justify-between items-center text-[1.1rem]">
        <div className="logoHeader">
          <Link href="/">
            <Image src={logo} alt="Logo" width={200} />
          </Link>
        </div>
        <div className="flex gap-10 ">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(homeRef);
            }}
            className="hover:text-[var(--blue)] transition duration-300"
          >
            Home
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(servicesRef);
            }}
            className="hover:text-[var(--blue)] transition duration-300"
          >
            Services
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(aboutRef);
            }}
            className="hover:text-[var(--blue)] transition duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(contactRef);
            }}
            className="hover:text-[var(--blue)] transition duration-300"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="/login" className="cursor-pointer">
            <Button
              className="bg-[var(--blue)] cursor-pointer text-[1.05rem]"
            >
              Sign in
            </Button>
          </Link>
          <Link href="/register/role-selection" className="cursor-pointer">
            <Button
              className="bg-[var(--blue)] cursor-pointer text-[1.05rem]"
            >
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
