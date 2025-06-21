"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift } from "lucide-react";
import { useRouter } from "next/navigation";

interface RegistryItem {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  claimed: boolean;
  claimedBy?: string;
  imageUrl: string; // product image URL
}

interface ProductCardProps {
  item: RegistryItem;
  onClaimItem: (id: number) => void;
  onUnclaimItem: (id: number) => void;
  getCategoryColor: (category: string) => string;
}

export function ProductCard({
  item,
  onClaimItem,
  onUnclaimItem,
  getCategoryColor,
}: ProductCardProps) {
  const router = useRouter();

  return (
    <div
      className={cn(
        "relative cursor-pointer card rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-white",
        "hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      )}
      style={{ height: "24rem" }}
    >
      {/* Product Image */}
      <div
        className="w-full h-40 rounded-md bg-center bg-cover mb-4"
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        aria-label={item.name}
      />

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
          {item.price}
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
          className="bg-black text-white rounded-md"
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
            className="border-black text-black hover:bg-gray-100 rounded-md"
            style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
          >
            Release Gift
          </Button>
          <Button
            size="sm"
            onClick={() => router.push(`/registry/${item.id}`)}
            className="bg-black text-white rounded-md"
            style={{ height: "48px", minWidth: "140px", fontWeight: "600", letterSpacing: "0.04em" }}
          >
            View Details
          </Button>
        </div>
      )}
    </div>
  );
}