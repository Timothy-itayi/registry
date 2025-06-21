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

export default function RegistryPage() {
  const [hasAccess, setHasAccess] = useState(false);
  const [registryItems, setRegistryItems] = useState<RegistryItem[]>(registryItemsData);
  const router = useRouter();

  useEffect(() => {
    const access = sessionStorage.getItem("registryAccess");
    if (access !== "true") {
      router.push("/");
    } else {
      setHasAccess(true);
    }
  }, [router]);

  const handleClaimItem = (id: number) => {
    const guestName = prompt("Enter your name to claim this gift:");
    if (guestName?.trim()) {
      setRegistryItems((items) =>
        items.map((item) =>
          item.id === id ? { ...item, claimed: true, claimedBy: guestName.trim() } : item
        )
      );
    }
  };

  const handleUnclaimItem = (id: number) => {
    setRegistryItems((items) =>
      items.map((item) => (item.id === id ? { ...item, claimed: false, claimedBy: undefined } : item))
    );
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      Books: "bg-[#d4af37]/20 text-[#8b6f1f]",
      Religious: "bg-[#8a0303]/20 text-[#8a0303]",
      Kitchen: "bg-[#3a4e68]/20 text-[#1d2a3a]",
      Home: "bg-[#586c4d]/20 text-[#394c2d]",
   
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  if (!hasAccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3efe7]">
        <p className="text-[#6b4e2f] font-serif text-lg">Verifying access...</p>
      </div>
    );
  }

  // Get unique categories from registryItems
  const categories = Array.from(new Set(registryItems.map((item) => item.category)));

  // Create tabs data for AnimatedTabs
  const tabs = categories.map((category) => ({
    id: category,
    label: category,
    content: registryItems.filter((item) => item.category === category),
  }));

  return (
    <div className="min-h-screen bg-[#f6f2ec] font-serif text-[#4b2e0d]">
      <Nav />

      {/* Header Section */}
      <header className="text-center py-10 px-6 max-w-4xl mx-auto">
        <h1 className="header text-4xl md:text-3xl tracking-wide">Timothy & Gracie&apos;s Wedding Registry</h1>
        <p className="mt-3 sub-header text-lg text-[#6b4e2f]">Helping us build a loving Orthodox Christian home.</p>
      </header>

      {/* Two-column Message + Image */}
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
      {/* Registry Stats */}
      <section className="max-w-5xl mx-auto px-6 mb-8">
        <RegistryStats
          totalItems={registryItems.length}
          claimedItems={registryItems.filter((item) => item.claimed).length}
        />
      </section>

    <Divider />
      {/* Animated Tabs with registry items grouped by category */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <AnimatedTabs
          tabs={tabs}
          onClaimItem={handleClaimItem}
          onUnclaimItem={handleUnclaimItem}
          getCategoryColor={getCategoryColor}
        />
      </section>

  

      {/* Thank You Section */}
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
