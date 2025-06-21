import { Card, CardContent } from "@/components/ui/card"


interface BlessingCardProps {
  verse: string
  reference: string
  className?: string
}

export function BlessingCard({ verse, reference, className = "" }: BlessingCardProps) {
  return (
    <Card className={`border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-red-50 ${className}`}>
      <CardContent className="pt-6 text-center">
        <div className="flex justify-center mb-4">
         
        </div>
        <blockquote className="text-amber-800 italic text-sm leading-relaxed mb-3">"{verse}"</blockquote>
        <cite className="text-amber-600 text-xs font-medium">- {reference}</cite>
      </CardContent>
    </Card>
  )
}
