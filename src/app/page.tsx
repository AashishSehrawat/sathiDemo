"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/style.css";

import mainImage from "../assets/mainSideImage.webp";
import ai from "../assets/serviceSvg/aiSupport.webp"
import person from "../assets/testimonial/4.png";
import boostImg from "../assets/boostImg.webp";
import check from "../assets/check.svg";
import aboutUs from "../assets/aboutUs.webp";
import qr from "../assets/contact/contactQR.webp";
import email from "../assets/contact/email.svg";
import phone from "../assets/contact/phone.svg";
import office from "../assets/contact/office.svg";
import twitter from "../assets/contact/tw.svg";
import linkdin from "../assets/contact/link.svg";
import insta from "../assets/contact/insta.svg";
import yt from "../assets/contact/yt.png";
import thread from "../assets/contact/thread.png";

import ServiceCard from "@/components/serviceCard";
import { TestimonialNextArrows, TestimonialPrevArrows } from "@/components/testimonialsArrows";
import TestimonialCardCom from "@/components/testimonialsCard";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Service data section
  const serviceData = [
    {
      heading: "Smart Career Start",
      img: ai,
      content:
        "AI-driven assessments to unlock the best career paths for students.",
    },
    {
      heading: "Future Fit",
      img: ai,
      content:
        "Personalized career roadmaps based on personality, skills, and market trends.",
    },
    {
      heading: "Mentor Magic",
      img: ai,
      content:
        "Real insights from top college alumni for informed career decisions.",
    },
    {
      heading: "Pathfinder Pro",
      img: ai,
      content:
        "Science-backed guidance to match students with their ideal careers.",
    },

    {
      heading: "Trend Track",
      img: ai,
      content:
        "Career advice aligned with emerging job markets and future opportunities.",
    },
    {
      heading: "Unlock Potential",
      img: ai,
      content:
        "Discover hidden strengths and ideal career fits with AI-powered analysis.",
    },
  ];

  // testimonial data
  const testimonialData = [
    {
      name: "Nittin",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ASH",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
    {
      name: "ankitn",
      img: person,
      college: "IIT Delhi",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus culpa dolorum eius ut? Id vel odit dolorem, quo aut voluptas beatae nostrum nemo! Veniam similique corrupti dolores nobis magnam iste sequi tempora ex aperiam labore.",
    },
  ];

    const settingsTest = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    nextArrow: <TestimonialNextArrows />,
    prevArrow: <TestimonialPrevArrows />,
  };

  return (
    <div>
      <Header 
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}  
        contactRef={contactRef}
      />
      {/* main section */}
      <div ref={homeRef} className="bg-blue-50 px-38 py-10 w-full mt-20">
        <div className="flex w-full gap-20">
          <div className="w-1/2 flex items-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl">Guiding Future, Building Careers</h1>
              <p className="text-xl">
                We empower students to discover their true potential and make
                confident career decisions. Join us to explore the right path
                with expert counseling and mentorship.
              </p>
              <Link href="/signup" className="w-fit">
                <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <Image src={mainImage} alt="Carrer" />
          </div>
        </div>
      </div>

      {/* boost section */}
      <div className="px-38 py-10 w-full">
        <div className="container">
          <div className="flex gap-20 w-full">
            <div className="w-1/2">
              <Image src={boostImg} alt="" />
            </div>
            <div className="w-1/2 flex items-center">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl">Boost College Getting</h2>
                <div>
                  <div className="flex gap-2">
                    <Image src={check} alt="check mark" width={20} />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro, ea facere nulla dignissimos ab eaque!
                    </span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <Image src={check} alt="check mark" width={20} />
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Porro, ea facere nulla dignissimos ab eaque!
                    </span>
                  </div>
                </div>
                <Link href="/signup" className="w-fit">
                  <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* service secion */}
      <div ref={servicesRef} className="bg-blue-50 px-38 py-10 w-full">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl text-center">Services We Provide</h2>
          <div className="flex flex-wrap w-full">
            {serviceData.map((item, index) => (
              <ServiceCard
                key={index}
                heading={item.heading}
                content={item.content}
                img={item.img}
              />
            ))}
          </div>
        </div>
      </div>

      {/* testimonial section */}
      <div className="px-38 pt-10 pb-20 w-full">
        <h2 className="text-4xl text-center mb-10">
          Discover What Our Students Speak
        </h2>
        <Slider {...settingsTest}>
          {testimonialData.map((item, index) => (
            <TestimonialCardCom
              key={index}
              name={item.name}
              img={item.img}
              college={item.college}
              content={item.content}
            />
          ))}
        </Slider>
      </div>

      {/* about section */}
      <div ref={aboutRef} className="w-full px-38 py-10">
        <div className="flex w-full gap-20">
          <div className="flex items-center justify-center w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl mb-2">About Us</h2>
              <h4 className="text-lg">
                About CareerSathi – Your Career Compass
              </h4>
              <p>
                CareerSathi is revolutionizing career guidance for India’s
                students. We cut through the confusion with personalized,
                AI-powered advice combined with human expertise. Our mission is
                simple: help students in classes 8-12 discover their perfect
                career path with confidence.
              </p>
              <p>
                We make career decisions easier with psychometric tests, expert
                mentorship, and up-to-date industry insights. Whether you're
                exploring STEM, arts, or unconventional careers, we provide the
                clarity you need to shape your future. CareerSathi isn’t just
                guidance – it’s your roadmap to success.
              </p>
              {/* <Link href="/aboutUs" className="w-fit">
                <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                  Know more
                </Button>
              </Link> */}
            </div>
          </div>
          <div className="w-1/2">
            <Image src={aboutUs} alt="About Us" />
          </div>
        </div>
      </div>

      {/* conatct section */}
      <div ref={contactRef} className="w-full px-38 py-10 bg-blue-50">
        <div className="flex gap-20 w-full">
          <div className="w-1/2 flex flex-col gap-6 items-center justify-center">
            <Image src={qr} alt="Qr code" className="w-[400] rounded-md" />
            <Link href="https://forms.gle/oqc9tup3SEcjSusYA" className="w-fit">
              <Button className="bg-[var(--blue)] text-[1.05rem] w-44 transition duration-300 cursor-pointer">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="w-1/2 flex items-center justify-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl">Contact Us</h2>
              <p>
                Email, call or scan the QR code to learn how Career Sathi can
                solve your problem.
              </p>
              <p className="flex gap-3">
                <Image src={email} alt="email id" width={20} />
                officialcareersathi@gmail.com
              </p>
              <p className="flex gap-3">
                <Image src={phone} alt="Phone number" width={23} />{" "}
                +91-8340783239
              </p>
              <p className="flex gap-3">
                <Image src={office} alt="office" width={25} />
                CareerSathi EdTech Pvt. Ltd. Ashoka garden Bhopal, MP – 462023
                India
              </p>
              <div className="flex flex-col gap-4 mt-8">
                <h3 className="text-3xl">Follow Us</h3>
                <h4 className="text-lg">
                  "Join our community for career inspiration and updates!"
                </h4>
                <div className="flex gap-3 items-center">
                  <Link href="https://www.youtube.com/@officialCareerSathi">
                    <Image src={yt} alt="Youtube" width={55} />
                  </Link>
                  <Link href="https://www.instagram.com/officialcareersathi/?hl=en">
                    <Image src={insta} width={45} alt="Instagram" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/career-sathi-75791734b/">
                    <Image src={linkdin} width={53} alt="Linkdin" />
                  </Link>
                  <Link href="https://x.com/Career_Sathi">
                    <Image src={twitter} width={40} alt="Twitter" />
                  </Link>
                  <Link href="https://www.threads.net/@officialcareersathi">
                    <Image src={thread} alt="Thread" width={70} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer section */}
      <Footer 
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}  
        contactRef={contactRef}
      />
    </div>
  );
}
