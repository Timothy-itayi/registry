"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import Image from "next/image"

export default function LandingPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    if (password === "blessed2025") {
      sessionStorage.setItem("registryAccess", "true")
      router.push("/registry")
    } else {
      setError("Incorrect password. Please check with Timothy or Gracie.")
    }

    setIsLoading(false)
  }

  return (
     <div className="min-h-screen bg-black flex justify-center items-center px-4">
    <div className="container mx-auto px-4 py-12 max-w-md ">
      <Card className="relative border-2 border-amber-200 shadow-xl bg-white/80 backdrop-blur overflow-hidden">

        {/* Background Image */}
        <Image
          src="/registry_imgs/interior.jpg"
          alt="Orthodox Wedding Header"
          height={1000}
          width={1000}
          className="absolute inset-0  object-cover opacity-10 z-0"
        />

        {/* Content Overlay */}
        <div className="relative z-10">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-serif text-black">Welcome, Dear Guests</CardTitle>
            <CardDescription className="text-black text-base leading-relaxed">
              We are blessed to share this sacred journey with you. Please enter the password provided in your
              invitation to view our wedding registry.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter registry password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-amber-300 focus:border-amber-500 focus:ring-amber-500"
                required
              />

              {error && <p className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">{error}</p>}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-700 hover:to-red-700 text-black font-medium py-2"
                disabled={isLoading}
              >
                {isLoading ? "Verifying..." : "Enter Registry"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-amber-700">
              <p className="italic">"God sets the solitary in families" - Psalm 68:6</p>
            </div>
          </CardContent>
        </div>
      </Card>

      <div className="mt-8 text-center text-amber-800">
        <p className="text-sm">If you need assistance, please contact Timothy via Email.</p>
      </div>
    </div>
    </div>
  )
}
