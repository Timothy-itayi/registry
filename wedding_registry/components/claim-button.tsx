// components/ClaimButton.tsx
"use client";

import React, { useState } from "react";
import { Gift } from "lucide-react";

interface RegistryItem {
  id: number;
  claimed: boolean;
  claimed_by_name?: string | null;
}

export default function ClaimButton({ item }: { item: RegistryItem }) {
  const [claimed, setClaimed] = useState(item.claimed);
  const [claimedByName, setClaimedByName] = useState(item.claimed_by_name || "");
  const [loading, setLoading] = useState(false);

  const guestEmail = typeof window !== "undefined" ? sessionStorage.getItem("guestEmail") : null;
  const guestName = typeof window !== "undefined" ? sessionStorage.getItem("guestName") : null;

  const claimItem = async () => {
    if (!guestEmail || !guestName) {
      alert("Missing guest info. Please go back and enter your name and email.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/claim-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          claimedByEmail: guestEmail,
          claimedByName: guestName,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to claim item: " + errorData.error);
      } else {
        setClaimed(true);
        setClaimedByName(guestName);
      }
    } catch {
      alert("Error claiming item");
    } finally {
      setLoading(false);
    }
  };

  const unclaimItem = async () => {
    if (!guestEmail || !guestName) {
      alert("Missing guest info. Please go back and enter your name and email.");
      return;
    }

    if (!confirm("Are you sure you want to release this gift?")) {
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/unclaim-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          claimedByEmail: guestEmail,
          claimedByName: guestName,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to unclaim item: " + errorData.error);
      } else {
        setClaimed(false);
        setClaimedByName("");
      }
    } catch {
      alert("Error unclaiming item");
    } finally {
      setLoading(false);
    }
  };

  if (claimed) {
    return (
      <div className="bg-white bg-opacity-90 border border-[#d4af37] rounded-lg p-6 shadow-md w-full max-w-sm text-center">
        <p className="text-green-700 font-semibold mb-4">
          ✅ Claimed by: {claimedByName || "Someone"}
        </p>
        <button
          onClick={unclaimItem}
          disabled={loading}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Release Gift"}
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={claimItem}
      disabled={loading}
      className="bg-gradient-to-r from-[#8a0303] to-[#d4af37] text-white px-6 py-2 rounded-md hover:from-[#700202] hover:to-[#bfa63d] inline-flex items-center"
    >
      <Gift className="w-5 h-5 mr-2" />
      {loading ? "Processing..." : "Claim This Gift"}
    </button>
  );
}
