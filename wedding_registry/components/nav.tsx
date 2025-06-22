"use client"


import React, { useState } from "react"
import Hamburger from "./ui/header/hamburger"
import Drawer from "./ui/header/drawer"
import { useRouter } from "next/navigation"
import Image from "next/image"

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleHamburger = () => setIsOpen(prev => !prev)

  return (
    <header className="bg-[#4E1F00] w-full max-w-full mx-auto flex justify-between items-center px-4 py-6 font-serif relative">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <Image
          src="/registry_imgs/church.jpg"
          alt="Crest"
          height={100}
          width={100}
          className="object-cover"
        />
      </div>

      {/* Right: Nav */}
      <div className="flex items-center space-x-6">
        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6 text-white text-sm tracking-wide">
          
          <a href="mailto:timmytam10@gmail.com" className="hover:text-[#d4af37]">Contact</a>
          <a href="/itinerary" className="hover:text-[#d4af37]">Itinerary</a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleHamburger}
          className="focus:outline-none z-20 sm:hidden"
        >
          <Hamburger isOpen={isOpen} />
        </button>
      </div>

      {/* Drawer for mobile */}
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <nav className="flex flex-col items-center space-y-6 text-[#4b2e0d] font-medium">
         
          <a href="mailto:timmytam10@gmail.com">Contact</a>
          <a href="/itinerary" onClick={toggleHamburger}>Itinerary</a>
        </nav>
      </Drawer>
    </header>
  )
}

export default Nav
