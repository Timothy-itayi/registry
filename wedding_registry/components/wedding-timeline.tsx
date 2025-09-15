"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TimelineEvent {
  time: string
  title: string
  description: string
  
  imageUrl?: string
  imageAlt?: string
  isActive?: boolean
}

const timelineEvents: TimelineEvent[] = [
  {
    time: "12:00 PM",
    title: "Guest Arrival & Seating",
    description: "Guests arrive and are seated in the church. Please note: the Orthodox ceremony involves standing for much of the service. Light candles are often provided to hold during parts of the ceremony—symbolizing the light of Christ guiding the couple.",
  
    imageUrl: "/timeline_imgs/church.png",
    imageAlt: "Church exterior where guests will arrive"
  },
  {
    time: "1:00 PM",
    title: "Betrothal Ceremony",
    description: "The first part of the Orthodox Wedding. The priest blesses the rings, and they are exchanged (often on the right hand). This ceremony formally sanctifies the couple's intention and commitment, and includes prayers, hymns, and vows that they marry of their own free will.",
  
    imageUrl: "/timeline_imgs/church-interior.jpg",
    imageAlt: "Russian Orthodox Church Pokrov Interior"
  },
  {
    time: "1:30 PM",
    title: "Crowning Ceremony",
    description: "The heart of the service. Crowns are placed on the heads of the bride and groom—these represent glory, honor, and the responsibility of their new life together. They may be held aloft by the best-man and maid-of-honor. The couple then shares a common cup, listens to Scripture readings (Epistle & Gospel), and participates in a procession (walking around the altar 3 times ) symbolizing The Holy Trinity and their journey together as husband and wife trhough Christ.",
  
    imageUrl: "/timeline_imgs/crowning.jpeg",
    imageAlt: "Orthodox wedding ceremony "
  },
  {
    time: "2:00 PM",
    title: "Blessing & Final Prayers",
    description: "After the crowning: final prayers, hymns, and blessings by the priest. The priest dismisses the wedding party and the congregation. Then there may be veneration of the icons and the newly-weds blessing their icon of Christ and the Mother of God.",
  
    imageUrl: "/timeline_imgs/theotokos.jpg",
    imageAlt: "Icon of the Theotokos for blessing"
  },
  {
    time: "2:45 PM",
    title: "Family & Group Photographs",
    description: "Official photos with family, the wedding party, bride & groom. Opportunity to mingle. Hall outside becomes active with guests entering.",
  
    imageUrl: "/timeline_imgs/photography.jpeg",
    imageAlt: "Wedding photography setup"
  },
  {
    time: "3:00 PM – 5:00 PM",
    title: "Catering, Dinner & Cleanup",
    description: "Caterers arrive and set up outside the hall. Drinks and background music will be available inside. Smashville Burgers and refreshments served at 4:00 PM, with toasts and short speeches during dinner. Afterward, the catering team will clean up, and the hall becomes more relaxed for guests to mingle.",
    imageUrl: "/timeline_imgs/burgers.jpeg",
    imageAlt: "Catering, Dinner & Cleanup"
  },
  

  {
    time: "6:00 PM",
    title: "Evening Drinks & Celebration",
    description: "Evening social time with drinks. Music, mingling, possibly light dancing. Celebration continues until around 8:00 PM.",
  
    imageUrl: "/timeline_imgs/drinks.jpg",
    imageAlt: "Evening celebration and drinks"
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
        <div className="absolute left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d4af37] via-[#7B4019] to-[#d4af37]"></div>

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
              {/* Timeline Image Marker */}
              <div className="relative z-10 w-50 h-50 rounded-full overflow-hidden border-4 border-[#d4af37] shadow-lg bg-white">
                {event.imageUrl ? (
                  <Image
                    src={event.imageUrl}
                    alt={event.imageAlt || event.title}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#7B4019]/10">
                   
                  </div>
                )}
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
        <div className="absolute -top-4 left-8 w-4 h-4 bg-[#d4af37] rounded-full"></div>
        <div className="absolute -bottom-4 left-8 w-4 h-4 bg-[#d4af37] rounded-full"></div>
      </div>

      {/* Orthodox Cross at Bottom */}
      <div className="text-center mt-12">
        <span className="text-4xl text-[#7B4019]">☦︎</span>
      </div>
    </div>
  )
}
