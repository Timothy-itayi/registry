import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GuestMessageProps {
  className?: string
}

export function GuestMessage({ className = "" }: GuestMessageProps) {
  return (
    <Card className={`border-2 border-amber-200 bg-[#FADA7A] ${className}`}>
      <CardHeader className="text-center pb-3">
        <CardTitle className="text-xl font-serif text-[#3674B5]">A Message from Timothy & Gracie</CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-[#7B4019] leading-relaxed mb-4">
          Dearest family and friends, your presence at our wedding is the greatest blessing and the most cherished gift Timothy and Gracie could receive. While your witness to our ceremony means the world to us, some have mentioned a registry as a thoughtful option for those who wish to help us build our Orthodox Christian home — a place of faith, love, and service.
        </p>
        <p className="text-[#7B4019] leading-relaxed">
          Each item was chosen with prayer and care. Whether you bless us with a gift or simply your prayers and presence, we are deeply grateful.
        </p>
      </CardContent>
    </Card>
  )
}
