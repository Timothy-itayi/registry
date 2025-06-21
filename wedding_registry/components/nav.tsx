"use client"


import clsx from "clsx"
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
    <header className="bg-[#0d1226] w-full max-w-full mx-auto flex justify-between items-center px-4 py-6 font-serif">
      {/* Logo + Nav */}
      <div className="flex items-center space-x-6">
        {/* Crest logo placeholder */}
        <div className="flex flex-col items-center space-y-1">
          <Image
            src="/registry_imgs/theotokos.jpg"
            alt="Crest"
            height={100}
            width={100}
            className="object-cover"
          />
        
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleHamburger}
          className="focus:outline-none z-20 sm:hidden absolute top-4 right-4"
        >
          <Hamburger isOpen={isOpen} />
        </button>

        {/* Drawer for mobile */}
        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <nav className="flex flex-col items-center space-y-6 text-[#4b2e0d] font-medium">
            <a href="#registry" onClick={toggleHamburger}>Registry</a>
            <a href="mailto:timothy@example.com">Contact</a>
            <a href="#story" onClick={toggleHamburger}>Our Story</a>
            
          </nav>
        </Drawer>

        {/* Desktop nav */}
        <nav className="hidden sm:flex space-x-6 text-white text-sm tracking-wide">
          <a href="#registry" className="hover:text-[#d4af37]">Registry</a>
          <a href="mailto:timothy@example.com" className="hover:text-[#d4af37]">Contact</a>
          <a href="#story" className="hover:text-[#d4af37]">Our Story</a>
        </nav>
      </div>

  
        <button className="hover-button relative inline-flex items-center justify-center overflow-hidden transition-all bg-transparent text-white py-2 px-4 rounded-full group sm:flex hidden">


          {/* Background base */}
          <span className="absolute inset-0 bg-gray-700"></span>

          {/* Top line */}
          <span className="absolute top-0 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF]"></span>

          {/* Upper-middle line */}
          <span className="absolute top-1/4 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF] delay-[100ms]"></span>

          {/* Lower-middle line */}
          <span className="absolute top-1/2 left-0 w-full h-1/4 bg-gray-700 transform -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-out group-hover:bg-[#B2FFFF] delay-[200ms]"></span>

          {/* Bottom line */}
          <span className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-700 transform translate-x-full group-hover:translate-x-0 transition-all duration-100 ease-out group-hover:bg-[#B2FFFF] delay-[300ms]"></span>


          {/* Parent container with relative position */}
          <div className="relative text-center">
            {/* Top set with higher z-index */}
            <div className="relative z-30 overflow-hidden text-white button-font">
           
              <p className="inline-block">
                <span className={clsx(
                  "inline-block animate-slide-up",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>S</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[90ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>c</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[100ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>h</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[150ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>e</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>d</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>u</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>l</span>
                <span className={clsx(
                  "inline-block animate-slide-up delay-[170ms]",
                  "group-hover:opacity-0 group-hover:-translate-y-full duration-500 ease-in-out"
                )}>e</span>
               
              </p>
            </div>

            {/* Bottom set positioned below the top set */}
            <div className={clsx(
              "absolute text-center",
              "top-full", // This will position the bottom set below the top set
              "text-[#0725cb]",
              "button-font"
            )}>
              <div className=" ">
               
                <p className="inline-block">
                  <span className={clsx(
                    "inline-block animate-slide-up",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>S</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[90ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>c</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[100ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>h</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[150ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>e</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>d</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>u</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>l</span>
                  <span className={clsx(
                    "inline-block animate-slide-up delay-[170ms]",
                    "opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-500 ease-in-out"
                  )}>e</span>
              
                </p>
              </div>
            </div>
          </div>

        </button>

    </header>
  )
}

export default Nav
