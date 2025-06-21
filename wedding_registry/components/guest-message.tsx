import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GuestMessageProps {
  className?: string
}

export function GuestMessage({ className = "" }: GuestMessageProps) {
  return (
    <Card className={`border-2 border-amber-200 bg-[#FADA7A] ${className}`}>
      <CardHeader className="text-center ">
        
        <CardTitle className="text-xl header text-[#3674B5]">A Message from Timothy & Gracie</CardTitle>

      </CardHeader>
      <CardContent className="text-center">
        <p className="text-black paragraph-message leading-relaxed mb-4">
          Dearest family and friends, your presence at our wedding is the greatest blessing and the most cherished gift we could receive. While your witness to our ceremony means the world to us, some have mentioned a registry as a thoughtful option for those who wish to help us build our Orthodox Christian home — a place of faith, love, and service.
        </p>
        <span className="text-4xl select-none" >☦</span>
        <p className="text-[#7B4019]  paragraph-message ">
          Each item was chosen with prayer and care. Whether you bless us with a gift or simply your prayers and presence, we are deeply grateful.
        </p>
      </CardContent>
    </Card>
  )
}
