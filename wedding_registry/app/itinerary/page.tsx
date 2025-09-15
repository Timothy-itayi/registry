// app/itinerary/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Dove } from "@/components/dove"
import { OrthodoxDivider } from "@/components/orthodox-divider"
import { WeddingTimeline } from "@/components/wedding-timeline"
import Nav from "@/components/nav"

export default function ItineraryPage() {
  return (
    <div className="min-h-screen bg-[#f6f2ec] text-[#4b2e0d] overflow-x-hidden">
      <Nav />
      
      {/* Hero Section */}
      <header className="relative py-20 text-center">
        <Image
          src="/registry_imgs/stock.jpg"
          alt="Background"
          fill
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />
        
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 font-serif">Wedding Day Itinerary</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#6b5840] font-serif">
            Join us as we celebrate the Holy Mystery of Marriage
          </p>
        </div>
      </header>

      <OrthodoxDivider />
      <Dove />

      {/* Wedding Timeline */}
      <WeddingTimeline />

      {/* Navigation */}
      <section className="text-center py-12">
        <Link
          href="/registry"
          className="inline-block px-6 py-3 bg-[#7B4019] hover:bg-[#8f2800] text-white text-sm rounded-md shadow transition-all duration-200"
        >
          ← Back to Registry
        </Link>
      </section>
    </div>
  )
}
