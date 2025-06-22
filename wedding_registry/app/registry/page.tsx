"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { RegistryItem, registryItemsData } from "@/components/data/registry-data";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { GuestMessage } from "@/components/guest-message";
import Nav from "@/components/nav";
import { OrthodoxDivider } from "@/components/orthodox-divider";
import { Divider } from "@/components/ui/divider";
import { RegistryStats } from "@/components/registry-stats";
import { ClaimGiftModal } from "@/components/ui/gift-modal";

export default function RegistryPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [registryItems, setRegistryItems] = useState<Omit<RegistryItem, "imageUrl" | "vendorUrl">[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Check access
  useEffect(() => {
    const access = sessionStorage.getItem("registryAccess");
    if (access !== "true") {
      router.push("/");
    } else {
      setHasAccess(true);
    }
  }, [router]);

  // Fetch registry items from API (without images)
  useEffect(() => {
    const fetchRegistryItems = async () => {
      try {
        const res = await fetch("/api/registry-items");
        const data = await res.json();
        if (!Array.isArray(data.items)) throw new Error("Invalid data");
        setRegistryItems(data.items);
      } catch (error) {
        console.error("Failed to fetch registry items:", error);
        setRegistryItems([]); // fallback to empty
      } finally {
        setLoading(false);
      }
    };

    if (hasAccess) {
      fetchRegistryItems();
    }
  }, [hasAccess]);

  const handleClaimItem = (id: number) => {
    setSelectedItemId(id);
    setModalOpen(true);
  };

  const handleUnclaimItem = async (id: number) => {
    try {
      const res = await fetch("/api/unclaim-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to unclaim item: " + errorData.error);
        return;
      }

      const { item } = await res.json();

      setRegistryItems((items) =>
        items.map((i) =>
          i.id === id ? { ...i, claimed: item.claimed, claimedBy: item.claimed_by } : i
        )
      );
    } catch {
      alert("An error occurred while unclaiming the item.");
    }
  };

  const confirmClaim = async (guestName: string) => {
    if (selectedItemId === null) return;

    try {
      const res = await fetch("/api/claim-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedItemId, claimedBy: guestName }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert("Failed to claim item: " + errorData.error);
        return;
      }

      const { item } = await res.json();

      setRegistryItems((items) =>
        items.map((i) =>
          i.id === selectedItemId
            ? { ...i, claimed: item.claimed, claimedBy: item.claimed_by }
            : i
        )
      );
      setModalOpen(false);
      setSelectedItemId(null);
    } catch {
      alert("An error occurred while claiming the item.");
    }
  };

  // Color helper
  const getCategoryColor = (category: string) => {
    const colors = {
      Books: "bg-[#f9f5ea] text-[#8b6f1f]",
      Religious: "bg-[#fef3f2] text-[#8a0303]",
      Kitchen: "bg-[#eef3f9] text-[#2b3d55]",
      Home: "bg-[#f4f7ef] text-[#3b5230]",
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (!hasAccess || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3efe7]">
        <p className="text-[#6b4e2f] font-serif text-lg">Verifying access...</p>
      </div>
    );
  }

  // Compose categories & tabs
  const categories = Array.from(new Set(registryItems.map((item) => item.category)));

  const tabs = categories.map((category) => ({
    id: category,
    label: category,
    // Attach local image URL from registryItemsData by matching id
    content: registryItems
      .filter((item) => item.category === category)
      .map((item) => {
        // Find local image path for this item id
        const localItem = registryItemsData.find((i) => i.id === item.id);
        return {
          ...item,
          imageUrl: localItem?.imageUrl ?? "/registry-items/placeholder.jpg",
        };
      }),
  }));

  const claimedList = registryItems
    .filter((item) => item.claimed && item.claimedBy)
    .map((item) => ({
      name: item.name,
      claimedBy: item.claimedBy as string,
    }));

  return (
    <div className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d]">
      <Nav />

      <header className="text-center py-10 px-6 max-w-4xl mx-auto">
        <h1 className="header text-4xl md:text-3xl tracking-wide">
          Timothy & Gracie&apos;s Wedding Registry
        </h1>
        <p className="mt-3 sub-header text-lg text-[#6b4e2f]">
          Helping us build a loving Orthodox Christian home.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center mb-12">
        <GuestMessage />
        <div className="relative w-full h-full md:h-[400px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/registry_imgs/wedding_at_cana.jpg"
            alt="Wedding registry"
            height={600}
            width={700}
            className="object-cover"
            priority
          />
        </div>
      </section>

      <OrthodoxDivider />

      <section className="max-w-5xl mx-auto px-6 mb-8">
        <RegistryStats
          totalItems={registryItems.length}
          claimedItems={registryItems.filter((item) => item.claimed).length}
          claimedList={claimedList}
        />
      </section>

      <Divider />

      <section className="max-w-6xl mx-auto px-6 mb-16">
        <AnimatedTabs
          tabs={tabs}
          onClaimItem={handleClaimItem}
          onUnclaimItem={handleUnclaimItem}
          getCategoryColor={getCategoryColor}
        />
      </section>

      <ClaimGiftModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={confirmClaim}
      />

      <section className="text-center py-12 px-6">
        <Card className="max-w-2xl mx-auto border-2 border-[#d4af37] bg-white/90">
          <CardContent className="py-6">
            <h3 className="text-xl mb-2">☦︎ Thank You for Your Blessings ☦︎</h3>
            <p className="text-sm leading-relaxed">
              Your presence at our wedding is the greatest gift. These items will help us build a sacred
              space for our family, filled with love, tradition, and grace.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
