"use client";

import React, { useState, useEffect } from "react";
import { Gift } from "lucide-react";

interface RegistryItem {
  id: number;
  claimed: boolean;
  claimed_by_name?: string | null;
  claimed_by_email?: string | null;
}

export default function ClaimButton({ item }: { item: RegistryItem }) {
  const [claimed, setClaimed] = useState(item.claimed);
  const [claimedByName, setClaimedByName] = useState(item.claimed_by_name || "");
  const [loading, setLoading] = useState(false);
  const [guestEmail, setGuestEmail] = useState<string | null>(null);
  const [guestName, setGuestName] = useState<string | null>(null);
  const [guestToken, setGuestToken] = useState<string | null>(null);

  useEffect(() => {
    setGuestEmail(sessionStorage.getItem("guestEmail"));
    setGuestName(sessionStorage.getItem("guestName"));
    setGuestToken(sessionStorage.getItem("guestToken"));  // <-- new
  }, []);

  useEffect(() => {
    setClaimed(item.claimed);
    setClaimedByName(item.claimed_by_name || "");
  }, [item.claimed, item.claimed_by_name]);

  const isClaimedByMe =
    guestEmail?.toLowerCase() === (item.claimed_by_email || "").toLowerCase();

  const claimItem = async () => {
    if (!guestToken) {
      alert("Please log in first by entering your name and email.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/claim-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: item.id,
          token: guestToken,   // send token only
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to claim item: " + errorData.error);
      } else {
        setClaimed(true);
        setClaimedByName(guestName || "");
      }
    } catch {
      alert("Error claiming item");
    } finally {
      setLoading(false);
    }
  };

  const unclaimItem = async () => {
    if (!guestToken) {
      alert("Please log in first by entering your name and email.");
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
          token: guestToken,   // send token only
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to release item: " + errorData.error);
      } else {
        setClaimed(false);
        setClaimedByName("");
      }
    } catch {
      alert("Error releasing item");
    } finally {
      setLoading(false);
    }
  };

  if (claimed) {
    return (
      <div className="flex flex-col items-center gap-2 w-full max-w-sm text-center">
        <p className="text-gray-700 ">This has been Claimed</p>
        {isClaimedByMe && (
          <button
            onClick={unclaimItem}
            disabled={loading}
            className="text-red-600 hover:text-red-800 disabled:opacity-50 py-1 px-4 rounded-md transition-colors"
          >
            {loading ? "Processing..." : "Release Gift"}
          </button>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={claimItem}
      disabled={loading}
      className="bg-[#8a0303] header text-white   px-6 py-2 rounded-md  inline-flex justify-center transition-colors"
    >
      <Gift className="w-5 h-5 mr-2" />
      {loading ? "Processing..." : "Claim This"}
    </button>
  );
}
