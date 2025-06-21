import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Users } from "lucide-react"

interface GuestMessageProps {
  className?: string
}

export function GuestMessage({ className = "" }: GuestMessageProps) {
  return (
    <Card className={`border-2 border-amber-200 bg-gradient-to-br from-white to-amber-50 ${className}`}>
      <CardHeader className="text-center pb-3">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users className="h-5 w-5 text-amber-700" />
          <Heart className="h-4 w-4 text-red-600" />
          <Users className="h-5 w-5 text-amber-700" />
        </div>
        <CardTitle className="text-xl font-serif text-amber-900">A Message from Timothy & Gracie</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-amber-700 leading-relaxed mb-4">
          Dearest family and friends, your presence at our wedding is the greatest blessing we could ask for. These
          gifts will help us establish our Orthodox Christian home, where we will grow in faith, love, and service to
          God and each other.
        </p>
        <p className="text-amber-700 leading-relaxed mb-4">
          Each item has been chosen with prayer and consideration for how it will serve our family and our community.
          Whether you choose to bless us with one of these gifts or simply with your prayers and presence, we are deeply
          grateful.
        </p>
        <p className="text-sm text-amber-600 italic">
          "Two are better than one, because they have a good return for their labor." - Ecclesiastes 4:9
        </p>
      </CardContent>
    </Card>
  )
}
