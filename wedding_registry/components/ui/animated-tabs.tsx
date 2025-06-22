"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";
import type { RegistryItem } from "@/components/data/registry-data";
import { useRouter } from "next/navigation";
import ClaimButton from "@/components/claim-button";  // <-- Import ClaimButton here

interface Tab {
  id: string;
  label: string;
  content: RegistryItem[];
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  // Remove onClaimItem and onUnclaimItem since ClaimButton handles it internally
  getCategoryColor: (category: string) => string;
}

function ProductCard({
  item,
  getCategoryColor,
}: {
  item: RegistryItem;
  getCategoryColor: (category: string) => string;
}) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "relative cursor-pointer card rounded-md shadow-xl max-w-sm mx-auto flex flex-col p-4 bg-white",
        "hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      )}
    >
      <div className="relative w-full mb-4" style={{ paddingBottom: "100%" }}>
        <div
          className="absolute inset-0 rounded-md bg-center bg-cover"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          aria-label={item.name}
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow">
        <h2
          className="font-serif text-xl font-semibold mb-1 text-[#5a4630]"
          title={item.name}
        >
          {item.name}
        </h2>

        <Badge
          className={getCategoryColor(item.category)}
          style={{
            fontWeight: "600",
            fontSize: "0.75rem",
            padding: "0.2rem 0.6rem",
            borderRadius: "8px",
            boxShadow: "none",
            width: "fit-content",
            marginBottom: "0.5rem",
          }}
        >
          {item.category}
        </Badge>

        <p
          className="text-sm text-[#6b5840] flex-grow line-clamp-3 mb-4"
          title={item.description}
        >
          {item.description}
        </p>
      </div>

      {/* Claimed By info */}
      {item.claimedBy && (
        <p className="text-xs italic mb-2 text-[#84725e]">
          Claimed by: {item.claimedBy}
        </p>
      )}

      {/* Use ClaimButton without onClaim/onUnclaim props */}
      <ClaimButton item={item} />

      <button
      
        onClick={() => router.push(`/registry/${item.id}`)}
        className="bg-black text-white rounded-md flex items-center justify-center mt-4"
        style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
      >
        View Details
      </button>
    </div>
  );
}

const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
  getCategoryColor,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  return (
    <div
      className={cn(
        "w-full max-w-full flex flex-col gap-y-4 px-8",
        className
      )}
      style={{ fontFamily: "'Georgia', serif" }}
    >
      {/* Tabs Buttons */}
      <div
        className="flex gap-3 flex-wrap p-2 rounded-lg mb-8"
        style={{
          backgroundColor: "#fef9f4",
          boxShadow: "0 2px 8px rgb(0 0 0 / 0.05)",
          borderRadius: "12px",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-5 py-2 text-base font-semibold rounded-md transition-colors",
              activeTab === tab.id
                ? "bg-[#fffaf0] text-[#5a4630] shadow-sm"
                : "bg-transparent text-[#8a7e6f] hover:bg-[#fffaf0] hover:text-[#5a4630]"
            )}
            style={{
              border: "none",
              letterSpacing: "0.04em",
              fontVariantLigatures: "common-ligatures",
              cursor: "pointer",
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md"
                style={{
                  boxShadow: "0 0 8px 2px rgba(149, 129, 97, 0.3)",
                  zIndex: -1,
                }}
                transition={{ type: "spring", duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="p-8 rounded-lg"
        style={{
          backgroundColor: "#fffefc",
          boxShadow: "0 4px 16px rgb(0 0 0 / 0.07)",
          minHeight: "20rem",
          borderRadius: "16px",
        }}
      >
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.35 }}
              >
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {tab.content.map((item) => (
                    <ProductCard
                      key={item.id}
                      item={item}
                      getCategoryColor={getCategoryColor}
                    />
                  ))}
                </div>
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
