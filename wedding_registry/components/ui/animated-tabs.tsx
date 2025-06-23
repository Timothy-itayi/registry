"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import type { RegistryItem } from "@/components/data/registry-data";
import { useRouter } from "next/navigation";
import ClaimButton from "@/components/claim-button";

interface Tab {
  id: string;
  label: string;
  content: RegistryItem[];
}

interface AnimatedTabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
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
        "relative rounded-lg shadow-sm max-w-full flex flex-col p-4 bg-[#fdfaf7] border border-[#e7dfd5] transition-all duration-200"
      )}
    >
      <div className="relative w-full mb-4" style={{ paddingBottom: "100%" }}>
        <div
          className="absolute inset-0 rounded-md bg-center bg-cover"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
          aria-label={item.name}
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h2 className="font-serif text-lg font-semibold mb-1 text-[#4e3a29]">
          {item.name}
        </h2>

        <Badge
          className={getCategoryColor(item.category)}
          style={{
            fontWeight: 600,
            fontSize: "0.7rem",
            padding: "0.15rem 0.5rem",
            borderRadius: "6px",
            marginBottom: "0.5rem",
          }}
        >
          {item.category}
        </Badge>

        <p className="text-sm text-[#6b5840] flex-grow line-clamp-3 mb-4">
          {item.description}
        </p>
      </div>

      {item.claimed_by_name && (
        <p className="text-xs italic mb-2 text-[#84725e]">
          Claimed by: {item.claimed_by_name}
        </p>
      )}

      <ClaimButton
        item={{
          id: item.id,
          claimed: item.claimed,
          claimed_by_name: item.claimed_by_name || null,
        }}
      />

      <button
        onClick={() => router.push(`/registry/${item.id}`)}
        className=" mt-4 bg-white text-black rounded-md py-2 px-4 transition border
        hover:bg-gray-100 hover:shadow-md 
             active:scale-95 active:bg-gray-200"
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
    <div className={cn("w-full max-w-full flex flex-col gap-y-6", className)}>
      <div
        className="flex gap-3 flex-wrap p-2 rounded-lg mb-6"
        style={{
          backgroundColor: "#f7f4ef",
          boxShadow: "0 1px 4px rgb(0 0 0 / 0.05)",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-md transition-colors",
              activeTab === tab.id
                ? "bg-[#fdfaf7] text-[#4e3a29] shadow"
                : "bg-transparent text-[#8a7e6f] hover:bg-[#fdfaf7] hover:text-[#4e3a29]"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 rounded-md"
                style={{
                  boxShadow: "0 0 6px 2px rgba(149, 129, 97, 0.25)",
                  zIndex: -1,
                }}
                transition={{ type: "spring", duration: 0.4 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div
        className="p-6 rounded-xl"
        style={{
          backgroundColor: "#fcfbfa",
          boxShadow: "0 2px 12px rgb(0 0 0 / 0.06)",
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
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-4">
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
