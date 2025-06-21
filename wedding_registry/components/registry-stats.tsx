import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Check, Clock } from "lucide-react"

interface ClaimedItem {
  name: string
  claimedBy: string
}

interface RegistryStatsProps {
  totalItems: number
  claimedItems: number
  claimedList?: ClaimedItem[]
  className?: string
}

export function RegistryStats({
  totalItems,
  claimedItems,
  claimedList = [],
  className = "",
}: RegistryStatsProps) {
  const remainingItems = totalItems - claimedItems
  const completionPercentage = totalItems > 0 ? Math.round((claimedItems / totalItems) * 100) : 0
  const isClaimed = claimedItems > 0

  return (
    <Card className={`bg-[#fffefc] border border-[#f5e7cd] rounded-xl shadow-sm ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-serif font-medium text-[#6e5841] flex items-center gap-2">
          Registry Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fdf4e7] text-[#c49b59]">
              <Gift className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-[#715838]">{totalItems}</p>
            <p className="text-xs text-[#a08965] tracking-wide uppercase">Total Items</p>
          </div>
          <div>
            <div
              className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full ${
                isClaimed ? "bg-[#e4f7ec] text-[#47936b]" : "bg-[#fbe7e8] text-[#d66a6c]"
              }`}
            >
              <Check className="h-6 w-6" />
            </div>
            <p className={`text-3xl font-bold ${isClaimed ? "text-[#336d53]" : "text-[#b75454]"}`}>
              {claimedItems}
            </p>
            <p
              className={`text-xs tracking-wide uppercase ${
                isClaimed ? "text-[#5b9f7f]" : "text-[#d66a6c]"
              }`}
            >
              Claimed
            </p>
          </div>
          <div>
            <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#fdf4e7] text-[#c49b59] border border-[#f2dec0]">
              <Clock className="h-6 w-6" />
            </div>
            <p className="text-3xl font-bold text-[#715838]">{remainingItems}</p>
            <p className="text-xs text-[#a08965] tracking-wide uppercase">Remaining</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-[#a08965] mb-2 font-medium">
            <span>Progress</span>
            <span>{completionPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-[#f5e7cd] rounded-full overflow-hidden">
            <div
              className="h-2.5 bg-[#dab779] rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        {claimedList.length > 0 && (
          <div className="pt-4 border-t border-[#f2dec0]">
            <p className="text-sm font-semibold text-[#6e5841] mb-2">Claimed By</p>
            <ul className="space-y-1 text-sm text-[#a08965]">
              {claimedList.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.name}</span>
                  <span className="italic">{item.claimedBy}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
