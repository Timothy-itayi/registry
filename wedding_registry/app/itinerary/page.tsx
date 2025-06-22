// app/itinerary/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"

export default function ItineraryPage() {
  return (
    <main className="relative min-h-screen bg-[#fdf8f3] text-[#4b2e0d] font-serif overflow-hidden">
      {/* Background image (optional) */}
      <Image
        src="/registry_imgs/interior.jpg"
        alt="Background"
        fill
        className="object-cover object-center opacity-20"
        priority
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      {/* Content */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center px-4 py-24">
        <h1 className="text-4xl md:text-5xl font-semibold mb-4">Itinerary</h1>
        <p className="text-lg md:text-xl max-w-xl text-[#6b5840]">
          We're still finalising the sacred schedule. Please check back soon for a full itinerary of our wedding day.
        </p>

        <div className="mt-10">
          <Link
            href="/registry"
            className="inline-block px-6 py-3 bg-[#7B4019] hover:bg-[#8f2800] text-white text-sm rounded-md shadow transition-all duration-200"
          >
            ← Back to Registry
          </Link>
        </div>
      </section>
    </main>
  )
}
