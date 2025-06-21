"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface ClaimGiftModalProps {
  open: boolean
  onClose: () => void
  onSubmit: (name: string) => void
}

export function ClaimGiftModal({ open, onClose, onSubmit }: ClaimGiftModalProps) {
  const [guestName, setGuestName] = useState("")

  const handleConfirm = () => {
    if (guestName.trim()) {
      onSubmit(guestName.trim())
      setGuestName("")
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-serif text-[#4b2e0d]">Claim this gift</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Your full name"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="font-serif"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={handleConfirm} disabled={!guestName.trim()}>
              Confirm
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
