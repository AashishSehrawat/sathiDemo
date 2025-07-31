"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "../assets/logo.png";
import "../styles/style.css";
import { Button } from "./ui/button";
import { scrollToSection } from "@/lib/utils";

type FooterProps = {
    homeRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    servicesRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

const Footer = ({ homeRef, servicesRef, aboutRef, contactRef }: FooterProps) => {
  const today = new Date();
  let currYear = today.getFullYear();

  return (
    <div className="py-10 relative">
      <div className="w-10/12 m-auto footerContent z-50">
        <div className="w-[40%] mb-6">
          <h2 className="text-4xl mb-6">Getting Started</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia harum
            rerum magnam obcaecati asperiores neque aut suscipit. Doloribus,
            suscipit reiciendis!
          </p>
        </div>
        <Link href="/signup" className="w-fit">
          <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
            Get Started
          </Button>
        </Link>
      </div>
      <div className="bg-black absolute w-full top-46 -z-10 pt-52 text-white flex justify-between px-26 pb-10">
        <div className="flex flex-col gap-8">
          <div className="w-[200]">
            <Link href="/">
              <Image src={logo} alt="Logo" />
            </Link>
          </div>
          <p>
            CareerSathi EdTech Pvt. Ltd. <br />
            Ashoka garden <br />
            Bhopal, MP – 462023 <br />
            India
          </p>
          <div className="flex gap-14">
            <div>
              <p>Phone Number</p>
              <p>+91-8340783239</p>
            </div>
            <div>
              <p>Email</p>
              <p>officialcareersathi@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex gap-20">
          <div>
            <h3 className="text-xl mb-6">Quick Link</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(homeRef);
                }}
                className="transtition duration-300 hover:text-gray-300"
              >
                Home
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(servicesRef);
                }}
                className="transtition duration-300 hover:text-gray-300"
              >
                Services
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(aboutRef);
                }}
                className="transtition duration-300 hover:text-gray-300"
              >
                About Us
              </Link>
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(contactRef);
                }}
                className="transtition duration-300 hover:text-gray-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl mb-6">Social</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.instagram.com/officialcareersathi/?hl=en"
                className="transtition duration-300 hover:text-gray-300"
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/in/career-sathi-75791734b/"
                className="transtition duration-300 hover:text-gray-300"
              >
                Linkdin
              </Link>
              <Link
                href="https://x.com/Career_Sathi"
                className="transtition duration-300 hover:text-gray-300"
              >
                Twitter
              </Link>
              <Link
                href="https://www.youtube.com/@officialCareerSathi"
                className="transtition duration-300 hover:text-gray-300"
              >
                Youtube
              </Link>
              <Link
                href="https://www.threads.net/@officialcareersathi"
                className="transtition duration-300 hover:text-gray-300"
              >
                Thread
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            © {currYear} Career Sathi. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
