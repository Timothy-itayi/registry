import { notFound } from "next/navigation"
import { registryItemsData } from "@/components/data/registry-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Gift, XCircle } from "lucide-react"
import Link from "next/link"
import Nav from "@/components/nav"

interface RegistryItemDetailProps {
  params: {
    id: string
  }
}

export default function RegistryItemDetail({ params }: RegistryItemDetailProps) {
  const itemId = parseInt(params.id)
  const item = registryItemsData.find((item) => item.id === itemId)

  if (!item) return notFound()

  return (
    <div className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d]">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
        <Card className="border-[#d4af37] bg-white/90">
          <CardHeader>
            <CardTitle className="text-2xl tracking-wide mb-1">{item.name}</CardTitle>
            <Badge className="w-fit text-sm">{item.category}</Badge>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden">
              <Image
                src={item.imageUrl || "/registry_imgs/placeholder.jpg"}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">{item.description}</p>
              <p className="text-base font-medium">Price: {item.price}</p>

              {item.vendorUrl && (
                <a
                  href={item.vendorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline block text-sm"
                >
                  View Recommended Vendor
                </a>
              )}

              {item.claimed ? (
                <>
                  <p className="text-green-700 text-sm">
                    ✅ Claimed by: {item.claimedBy || "Someone"}
                  </p>
              
                </>
              ) : (
                <Button className="bg-gradient-to-r from-[#8a0303] to-[#d4af37] text-white hover:from-[#700202] hover:to-[#bfa63d]">
                  <Gift className="h-4 w-4 mr-2" /> Claim This Gift
                </Button>
              )}

              <Link href="/registry" className="inline-block text-sm underline mt-4">
                ← Back to Registry
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}