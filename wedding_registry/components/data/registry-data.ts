// components/data/registry-items.ts
export interface RegistryItem {
  id: number
  name: string
  description: string
  imageUrl: string
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
   
  vendorUrl: string;
  category: string;
  claimed: boolean;
  claimedBy?: string;
}

export const registryItemsData: RegistryItem[] = [

  {
    id: 1,
    name: "Wooden Orthodox Cross",
    description: "Wooden Cross for our home altar",
     
    category: "Religious",
    claimed: true,
    claimedBy: "Aunt Maria",
    vendorUrl: "",
    imageUrl: "/registry-items/cross.jpg"
  },
  {
    id: 2,
    name: "Toaster",
    description: "4-slice stainless steel toaster for our daily breakfast needs.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/toaster.jpg"
  },
  {
    id: 3,
    name: "Electric Kettle",
    description: "Fast-boil kettle with temperature control settings.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/kettle.jpg"
  },
  {
    id: 4,
    name: "Cutlery Set",
    description: "A cutlery set for our kitchen for dining .",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/cutlery.webp"
  },
  {
    id: 5,
    name: "Wine Glasses (Set of 6)",
    description: "Elegant glassware set for special occasions.",
         vendorUrl: "",
    category: "Home",
    claimed: false,
    imageUrl: "/registry-items/wine_glasses.jpg"
  },
  {
    id: 6,
    name: "Slow Cooker",
    description: "6-quart programmable slow cooker for easy meals.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/a_slow_cooker.jpeg"
  },
  {
    id: 7,
    name: "Bread Maker",
    description: "Automatic bread machine with gluten-free option.",
     
    vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/bread_maker.jpg"
  },
  {
    id: 8,
    name: "Cutlery Holder",
    description: "Wooden cutlery tray for organized kitchen drawers.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/cutlery_holder.webp"
  },
  {
    id: 9,
    name: "Fridge Magnets",
    description: "Orthodox-themed decorative fridge magnets.",
         vendorUrl: "",
    category: "Home",
    claimed: false,
    imageUrl: "/registry-items/fridge_magnets.jpg"
  },
  {
    id: 10,
    name: "Pepper Grinder",
    description: "Classic wooden pepper mill for seasoning.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/pepper_grinder.jpg"
  },
  {
    id: 11,
    name: "Potato Masher",
    description: "Stainless steel masher with ergonomic handle.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/potato_masher.jpg"
  },
  {
    id: 12,
    name: "Books by Fyodor Dostoevsky",
    description: "Collection including 'The Brothers Karamazov' and 'Crime and Punishment'.",
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/fydor.jpg"
  },
  {
    id: 13,
    name: "Books by C.S. Lewis",
    description: "Including 'Mere Christianity' and 'The Four Loves'.",
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/cs_lewis.jpg"
  },


    {
    id: 14,
    name: "Books by J.R.R Tolkien",
    description: "His stories blend mythology, linguistics, and folklore into immersive adventures.",
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/jrr_tolkien.jpg"
  },
    {
    id: 15,
    name: "Writings of the Church Fathers",
    description: "Essential works by St. John Chrysostom, St. Basil the Great, and others.",
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/the_fathers.jpg"
  },
  {
    id: 16,
    name: "Books by Philosophers",
    description: "A curated set of influential works by great philosophers",
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/philosophy.jpg"
  },
  {
    id: 17,
    name: "Writings of the Saints",
    description: "A soulful collection of writings by Orthodox Christian saints—featuring both beloved and lesser-known voices of faith."
,
         vendorUrl: "",
    category: "Books",
    claimed: false,
    imageUrl: "/registry-items/saints.jpg"
  },
  {
    id: 18,
    name: "Orthodox Icons",
    description: "Set of hand-painted or printed icons for home veneration.",
         vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: "/registry-items/boom.jpg"
  },
  {
    id: 19,
    name: "Weekly Planner",
    description: "Orthodox-inspired weekly planner for managing household and prayer life.",
         vendorUrl: "",
    category: "Home",
    claimed: false,
    imageUrl: "/registry-items/weekly_planner.jpg"
  },
  {
    id: 20,
    name: "Mugs (Set of 4)",
    description: "Cozy ceramic mugs for tea and coffee, neutral tones.",
         vendorUrl: "",
    category: "Kitchen",
    claimed: false,
    imageUrl: "/registry-items/mug_set_of_4.png"
  },
  {
    id: 21,
    name: "Candles",
    description: "Aromatic beeswax candles for ambiance and prayer.",
         vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: "/registry-items/candles.jpg"
  },

  {
    id: 22,
    name: "Charcoal for Incense (Box)",
    description: "Natural incense charcoal blocks for spiritual use.",
         vendorUrl: "",
    category: "Religious",
    claimed: false,
    imageUrl: "/registry-items/incense.jpg"
  },
];

