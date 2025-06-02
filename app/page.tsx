'use client'
import Image from "next/image";
import Hero_session from "./component/Hero_session";
import Contact from "./component/Contact";
import { useRef } from "react";
import NavBar from "./component/NavBar";
import MobileNav from "./component/MobileNav";
export default function Home() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
    const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className=" bg-[#FFFFFA]">
      
      <MobileNav handleScroll={handleScroll}/>
      <NavBar handleScroll={handleScroll}/>
    <Hero_session handleScroll={handleScroll} />
    <Contact ref={sectionRef}/>
    </div>
  );
}
