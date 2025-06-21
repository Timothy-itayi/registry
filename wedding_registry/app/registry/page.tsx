"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Gift } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RegistryStats } from "@/components/registry-stats"
import { BlessingCard } from "@/components/blessing-card"
import { OrthodoxDivider } from "@/components/orthodox-divider"
import { GuestMessage } from "@/components/guest-message"
import Nav from "@/components/nav"
import { RegistryItem, registryItemsData } from "@/components/data/registry-data"

export default function RegistryPage() {
  const [hasAccess, setHasAccess] = useState(false)
  const [registryItems, setRegistryItems] = useState<RegistryItem[]>(registryItemsData)
  const router = useRouter()

  useEffect(() => {
    const access = sessionStorage.getItem("registryAccess")
    if (access !== "true") {
      router.push("/")
    } else {
      setHasAccess(true)
    }
  }, [router])

  const handleClaimItem = (id: number) => {
    const guestName = prompt("Enter your name to claim this gift:")
    if (guestName?.trim()) {
      setRegistryItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, claimed: true, claimedBy: guestName.trim() } : item,
        )
      )
    }
  }

  const handleUnclaimItem = (id: number) => {
    setRegistryItems((items) =>
      items.map((item) => (item.id === id ? { ...item, claimed: false, claimedBy: undefined } : item))
    )
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Ceremony: "bg-[#d4af37]/20 text-[#8b6f1f]",
      Religious: "bg-[#8a0303]/20 text-[#8a0303]",
      Kitchen: "bg-[#3a4e68]/20 text-[#1d2a3a]",
      Home: "bg-[#586c4d]/20 text-[#394c2d]",
      Decorative: "bg-[#6d3d7c]/20 text-[#43294d]",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3efe7]">
        <p className="text-[#6b4e2f] font-serif text-lg">Verifying access...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d]">
      <Nav />

      <div className="text-center py-6 px-4">
        <h1 className="text-bold text-3xl"> Welcome to Timothy and Gracie&apos;s Wedding Registry </h1>
        <p className="text-sm text-[#6b4e2f] mt-2">
          Helping us build a loving Orthodox Christian home.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 space-y-6">
        <RegistryStats
          totalItems={registryItems.length}
          claimedItems={registryItems.filter((item) => item.claimed).length}
        />
        <div className="grid md:grid-cols-2 gap-4">
          <GuestMessage />
          <BlessingCard
            verse="He who finds a wife finds what is good and receives favor from the Lord"
            reference="Proverbs 18:22"
          />
        </div>
      </div>

      <OrthodoxDivider />

      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {registryItems.map((item) => (
          <Card
            key={item.id}
            className={`transition-shadow ${
              item.claimed
                ? "border-green-300 bg-[#eaf5e9]/60"
                : "border-[#d4af37] bg-[#fffaf3]/80"
            } border-2 rounded-xl shadow-md`}
          >
            <CardHeader onClick={() => router.push(`/registry/${item.id}`)} className="cursor-pointer">
              <CardTitle className="text-lg mb-2 tracking-wide">{item.name}</CardTitle>
              <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-sm line-clamp-2">{item.description}</p>
              <p className="text-[#4b2e0d] font-medium mb-3">{item.price}</p>
              {item.claimedBy && (
                <p className="text-xs text-green-800 italic mb-3">Claimed by: {item.claimedBy}</p>
              )}
              {!item.claimed ? (
                <Button
                  onClick={() => handleClaimItem(item.id)}
                  className="w-full bg-gradient-to-r from-[#8a0303] to-[#d4af37] text-white hover:from-[#700202] hover:to-[#bfa63d]"
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Claim This Gift
                </Button>
              ) : (
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleUnclaimItem(item.id)}
                    className="w-1/2 border-red-700 text-red-700 hover:bg-red-50"
                  >
                    Release Gift
                  </Button>
                  <Button
                    size="sm"
                    className="w-1/2 bg-[#4b2e0d] text-white hover:bg-[#3a240a]"
                    onClick={() => router.push(`/registry/${item.id}`)}
                  >
                    View Gift Details
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center py-12 px-4">
        <Card className="max-w-2xl mx-auto border-2 border-[#d4af37] bg-white/90">
          <CardContent className="py-6">
            <h3 className="text-xl mb-2">☦︎ Thank You for Your Blessings ☦︎</h3>
            <p className="text-sm leading-relaxed">
              Your presence at our wedding is the greatest gift. These items will help us build a
              sacred space for our family, filled with love, tradition, and grace.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}