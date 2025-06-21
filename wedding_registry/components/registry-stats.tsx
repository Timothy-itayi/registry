import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Check, Heart } from "lucide-react"

interface RegistryStatsProps {
  totalItems: number
  claimedItems: number
  className?: string
}

export function RegistryStats({ totalItems, claimedItems, className = "" }: RegistryStatsProps) {
  const remainingItems = totalItems - claimedItems
  const completionPercentage = Math.round((claimedItems / totalItems) * 100)

  return (
    <Card className={`border-2 border-amber-200 bg-white/90 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-serif text-amber-900 flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-600" />
          Registry Progress
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="flex items-center justify-center mb-2">
              <Gift className="h-5 w-5 text-amber-600" />
            </div>
            <p className="text-2xl font-bold text-amber-800">{totalItems}</p>
            <p className="text-xs text-amber-600">Total Items</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <Check className="h-5 w-5 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-green-700">{claimedItems}</p>
            <p className="text-xs text-green-600">Claimed</p>
          </div>
          <div>
            <div className="flex items-center justify-center mb-2">
              <div className="w-5 h-5 rounded-full border-2 border-amber-600" />
            </div>
            <p className="text-2xl font-bold text-amber-800">{remainingItems}</p>
            <p className="text-xs text-amber-600">Remaining</p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex justify-between text-xs text-amber-700 mb-1">
            <span>Progress</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="w-full bg-amber-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-amber-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
