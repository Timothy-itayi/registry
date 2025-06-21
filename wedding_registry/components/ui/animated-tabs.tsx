"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Gift } from "lucide-react";
import type { RegistryItem } from "@/components/data/registry-data";
import { useRouter } from "next/navigation";

interface Tab {
  id: string;
  label: string;
  content: RegistryItem[];
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
  onClaimItem: (id: number) => void;
  onUnclaimItem: (id: number) => void;
  getCategoryColor: (category: string) => string;
}

function ProductCard({
  item,
  onClaimItem,
  onUnclaimItem,
  getCategoryColor,
}: {
  item: RegistryItem;
  onClaimItem: (id: number) => void;
  onUnclaimItem: (id: number) => void;
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
            backgroundColor: "#d9c8b7",
            color: "#6b5840",
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

        <p
          className="font-semibold mb-4"
          style={{ color: "#a07d50", fontFamily: "'Georgia', serif" }}
        >
        
        </p>
      </div>

      {/* Claimed By info */}
      {item.claimedBy && (
        <p className="text-xs italic mb-2 text-[#84725e]">Claimed by: {item.claimedBy}</p>
      )}

      {/* Buttons */}
      {!item.claimed ? (
        <Button
          onClick={() => onClaimItem(item.id)}
          className="bg-black text-white rounded-md flex items-center justify-center"
          style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
        >
          <Gift className="h-4 w-4 mr-2" />
          Claim This Gift
        </Button>
      ) : (
        <div className="flex gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUnclaimItem(item.id)}
            className="border-black text-black hover:bg-gray-100 rounded-md flex items-center justify-center"
            style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
          >
            Release Gift
          </Button>
          <Button
            size="sm"
            onClick={() => router.push(`/registry/${item.id}`)}
            className="bg-black text-white rounded-md flex items-center justify-center"
            style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
          >
            View Details
          </Button>
        </div>
      )}
    </div>
  );
}

const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
  onClaimItem,
  onUnclaimItem,
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
                      onClaimItem={onClaimItem}
                      onUnclaimItem={onUnclaimItem}
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
