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

export interface RegistryItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: string;
  vendorUrl: string;
  category: string;
  claimed: boolean;
  claimedBy?: string;
}

export const registryItemsData: RegistryItem[] = [

  {
    id: 1,
    name: "Icon of Christ the Teacher",
    description: "Hand-painted icon for our home altar",
    price: "$200",
    category: "Religious",
    claimed: true,
    claimedBy: "Aunt Maria",
    vendorUrl: "",
    imageUrl: ""
  },
  {
    id: 2,
    name: "Toaster",
    description: "4-slice stainless steel toaster for our daily breakfast needs.",
    price: "$70",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 3,
    name: "Electric Kettle",
    description: "Fast-boil kettle with temperature control settings.",
    price: "$85",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 4,
    name: "Cutlery Set",
    description: "Stainless steel 16-piece cutlery set.",
    price: "$60",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 5,
    name: "Wine Glasses (Set of 6)",
    description: "Elegant glassware set for special occasions.",
    price: "$45",
    vendorUrl: "",
    category: "Home",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 6,
    name: "Slow Cooker",
    description: "6-quart programmable slow cooker for easy meals.",
    price: "$90",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 7,
    name: "Bread Maker",
    description: "Automatic bread machine with gluten-free option.",
    price: "$120",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 8,
    name: "Cutlery Holder",
    description: "Wooden cutlery tray for organized kitchen drawers.",
    price: "$25",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 9,
    name: "Fridge Magnets",
    description: "Orthodox-themed decorative fridge magnets.",
    price: "$15",
    vendorUrl: "",
    category: "Decorative",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 10,
    name: "Pepper Grinder",
    description: "Classic wooden pepper mill for seasoning.",
    price: "$20",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 11,
    name: "Potato Masher",
    description: "Stainless steel masher with ergonomic handle.",
    price: "$18",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 12,
    name: "Books by Fyodor Dostoevsky",
    description: "Collection including 'The Brothers Karamazov' and 'Crime and Punishment'.",
    price: "$60",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 13,
    name: "Books by C.S. Lewis",
    description: "Including 'Mere Christianity' and 'The Four Loves'.",
    price: "$45",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 14,
    name: "Writings of Orthodox Church Fathers & Saints",
    description: "Essential works by St. John Chrysostom, St. Basil the Great, and others.",
    price: "$75",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 15,
    name: "Books by Orthodox Priests",
    description: "Modern Orthodox perspectives from clergy on marriage and faith.",
    price: "$50",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 16,
    name: "Epistemology: Becoming Intellectually Virtuous",
    description: "Philosophy book by Jay Wood exploring intellectual character.",
    price: "$38",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 17,
    name: "The Fundamentals of Ethics",
    description: "By Russ Shafer-Landau — introduction to modern moral theory.",
    price: "$42",
    vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 18,
    name: "Orthodox Icons",
    description: "Set of hand-painted or printed icons for home veneration.",
    price: "$90",
    vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 19,
    name: "Weekly Planner",
    description: "Orthodox-inspired weekly planner for managing household and prayer life.",
    price: "$25",
    vendorUrl: "",
    category: "Home",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 20,
    name: "Mugs (Set of 4)",
    description: "Cozy ceramic mugs for tea and coffee, neutral tones.",
    price: "$30",
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 21,
    name: "Candles",
    description: "Aromatic beeswax candles for ambiance and prayer.",
    price: "$20",
    vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 22,
    name: "Incense Burner",
    description: "Ornate brass incense burner for home altar use.",
    price: "$35",
    vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: ""
  },
  {
    id: 23,
    name: "Charcoal for Incense (Box)",
    description: "Natural incense charcoal blocks for spiritual use.",
    price: "$10",
    vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: ""
  },
];

