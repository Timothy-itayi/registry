"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineEvent {
  time: string
  title: string
  description: string
  icon: string
  isActive?: boolean
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "12:00 PM",
    title: "Guest Arrival",
    description: "Welcome to our celebration! Please arrive and find your seats.",
    icon: "👥"
  },
  {
    time: "1:00 PM",
    title: "Betrothal Ceremony",
    description: "The first part of our Orthodox wedding ceremony begins.",
    icon: "💍"
  },
  {
    time: "1:30 PM",
    title: "Crowning Ceremony",
    description: "The sacred crowning ceremony - the heart of our wedding.",
    icon: "👑"
  },
  {
    time: "2:00 PM",
    title: "Family Photos",
    description: "Photographs with family, guests, and friends.",
    icon: "📸"
  },
  {
    time: "3:00 PM",
    title: "Catering Setup",
    description: "Catering arrives and begins setup outside the hall. Drinks and music in the hall.",
    icon: "🍽️"
  },
  {
    time: "4:00 PM",
    title: "Dinner Service",
    description: "Smash burgers and refreshments will be served.",
    icon: "🍔"
  },
  {
    time: "5:00 PM",
    title: "Catering Cleanup",
    description: "Catering team completes service and cleanup.",
    icon: "🧹"
  },
  {
    time: "6:00 PM",
    title: "Evening Drinks",
    description: "Drinks and celebration continue until 8:00 PM.",
    icon: "🥂"
  }
]

export function WeddingTimeline() {
  const [visibleEvents, setVisibleEvents] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleEvents(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.3 }
    )

    const elements = document.querySelectorAll('[data-timeline-item]')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-[#7B4019] mb-4 header">
          Wedding Day Schedule
        </h2>
        <p className="text-lg text-[#6b5840] paragraph-message">
          Join us for this sacred celebration of love and commitment
        </p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#7B4019] to-[#d4af37]"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-timeline-item
              data-index={index}
              className={`relative flex items-start transition-all duration-700 ${
                visibleEvents.includes(index) 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Timeline Dot */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-[#d4af37] rounded-full shadow-lg">
                <span className="text-2xl">{event.icon}</span>
              </div>

              {/* Event Card */}
              <div className="ml-8 flex-1">
                <Card className="border-2 border-[#d4af37] bg-white/95 hover:bg-white transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-[#7B4019] header">
                        {event.title}
                      </h3>
                      <span className="text-lg font-medium text-[#d4af37] bg-[#7B4019]/10 px-3 py-1 rounded-full">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-[#6b5840] paragraph-message">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-4 left-6 w-4 h-4 bg-[#d4af37] rounded-full"></div>
        <div className="absolute -bottom-4 left-6 w-4 h-4 bg-[#d4af37] rounded-full"></div>
      </div>

      {/* Orthodox Cross at Bottom */}
      <div className="text-center mt-12">
        <span className="text-4xl text-[#7B4019]">☦︎</span>
      </div>
    </div>
  )
}
