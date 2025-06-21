// components/data/registry-items.ts
export interface RegistryItem {
  id: number
  name: string
  description: string
  imageUrl: string
  price: string
  vendorUrl: string
  category: string
  claimed: boolean
  claimedBy?: string
}

export const registryItemsData: RegistryItem[] = [
  {
    id: 1,
    name: "Orthodox Wedding Crowns",
    description: "Traditional stefana crowns for the ceremony",
    price: "$150",
    vendorUrl: "www.placeholder.com",
    category: "Ceremony",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 2,
    name: "Icon of Christ the Teacher",
    description: "Hand-painted icon for our home altar",
    price: "$200",
    category: "Religious",
    claimed: true,
    claimedBy: "Aunt Maria",
    vendorUrl: "",
    imageUrl: ""
  },
  // Add remaining items here...
];
