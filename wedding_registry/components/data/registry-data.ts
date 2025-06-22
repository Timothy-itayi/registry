export interface VendorLink {
  name: string;
  url: string;
}

export interface RegistryItem {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
  claimed: boolean;
  claimed_by_name?: string | null;
  claimed_by_email?: string | null;
  vendorLinks?: VendorLink[];
}


export interface VendorLink {
  name: string;
  url: string;
}

export interface RegistryItem {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
  claimed: boolean;
  claimed_by_name?: string | null;
  claimed_by_email?: string | null;
  vendorLinks?: VendorLink[];
}

export const registryItemsData: RegistryItem[] = [
  {
    id: 1,
    name: "Wooden Orthodox Cross",
    description: "Wooden Cross for our home altar",
    claimed: false,
    category: "Religious",
    imageUrl: "/registry-items/cross.jpg",
    vendorLinks: [
      { name: "Orthodox Australia", url: "https://www.orthodoxaustralia.org.au/shop/wooden-cross" },
      { name: "Spiritual Gifts", url: "https://www.spiritualgifts.com.au/wooden-crosses" },
      { name: "Bible Society Australia", url: "https://www.biblesociety.org.au/shop/wooden-cross" },
      { name: "Gifts and Faith", url: "https://www.giftsandfaith.com.au/orthodox-cross" },
    ],
  },
  {
    id: 2,
    name: "Toaster",
    description: "4-slice stainless steel toaster for our daily breakfast needs.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/toaster.jpg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/product/4-slice-toaster" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/brands/electrical/toasters" },
      { name: "Myer", url: "https://www.myer.com.au/c/toasters" },
      { name: "AO", url: "https://www.ao.com.au/toasters" },
    ],
  },
  {
    id: 3,
    name: "Electric Kettle",
    description: "Fast-boil kettle with temperature control settings.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/kettle.jpg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/product/electric-kettle" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/brands/electrical/kettles" },
      { name: "Myer", url: "https://www.myer.com.au/c/kettles" },
      { name: "AO", url: "https://www.ao.com.au/kettles" },
    ],
  },
  {
    id: 4,
    name: "Cutlery Set",
    description: "A cutlery set for our kitchen for dining.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/cutlery.webp",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/cutlery-sets" },
      { name: "Myer", url: "https://www.myer.com.au/c/cutlery-sets" },
      { name: "Target", url: "https://www.target.com.au/cutlery-sets" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/cutlery-sets" },
    ],
  },
  {
    id: 5,
    name: "Wine Glasses (Set of 6)",
    description: "Elegant glassware set for special occasions.",
    claimed: false,
    category: "Home",
    imageUrl: "/registry-items/wine_glasses.jpg",
    vendorLinks: [
      { name: "Myer", url: "https://www.myer.com.au/c/wine-glasses" },
      { name: "Kmart", url: "https://www.kmart.com.au/wine-glasses" },
      { name: "Target", url: "https://www.target.com.au/wine-glasses" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/wine-glasses" },
    ],
  },
  {
    id: 6,
    name: "Slow Cooker",
    description: "6-quart programmable slow cooker for easy meals.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/a_slow_cooker.jpeg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/slow-cooker" },
      { name: "Myer", url: "https://www.myer.com.au/c/slow-cookers" },
      { name: "AO", url: "https://www.ao.com.au/slow-cookers" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/slow-cookers" },
    ],
  },
  {
    id: 7,
    name: "Bread Maker",
    description: "Automatic bread machine with gluten-free option.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/bread_maker.jpg",
    vendorLinks: [
      { name: "Myer", url: "https://www.myer.com.au/c/bread-makers" },
      { name: "Kmart", url: "https://www.kmart.com.au/bread-makers" },
      { name: "AO", url: "https://www.ao.com.au/bread-makers" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/bread-makers" },
    ],
  },
  {
    id: 8,
    name: "Cutlery Holder",
    description: "Wooden cutlery tray for organized kitchen drawers.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/cutlery_holder.webp",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/cutlery-holder" },
      { name: "Target", url: "https://www.target.com.au/cutlery-holder" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/cutlery-organisers" },
      { name: "IKEA", url: "https://www.ikea.com/au/en/cutlery-trays" },
    ],
  },
  {
    id: 9,
    name: "Fridge Magnets",
    description: "Orthodox-themed decorative fridge magnets.",
    claimed: false,
    category: "Home",
    imageUrl: "/registry-items/fridge_magnets.jpg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/fridge-magnets" },
      { name: "Target", url: "https://www.target.com.au/fridge-magnets" },
      { name: "Etsy", url: "https://www.etsy.com/au/market/orthodox_magnets" },
      { name: "Amazon Australia", url: "https://www.amazon.com.au/fridge-magnets" },
    ],
  },
  {
    id: 10,
    name: "Pepper Grinder",
    description: "Classic wooden pepper mill for seasoning.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/pepper_grinder.jpg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/pepper-grinder" },
      { name: "Myer", url: "https://www.myer.com.au/c/pepper-grinders" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/pepper-grinders" },
      { name: "Target", url: "https://www.target.com.au/pepper-grinder" },
    ],
  },
  {
    id: 11,
    name: "Potato Masher",
    description: "Stainless steel masher with ergonomic handle.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/potato_masher.jpg",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/potato-masher" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/potato-masher" },
      { name: "Target", url: "https://www.target.com.au/potato-masher" },
      { name: "Myer", url: "https://www.myer.com.au/c/potato-mashers" },
    ],
  },
  {
    id: 12,
    name: "Books by Fyodor Dostoevsky",
    description: "Collection including 'The Brothers Karamazov' and 'Crime and Punishment'.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/fydor.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/fyodor-dostoevsky/author100026.html" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/fyodor-dostoevsky-books" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/fyodor-dostoevsky" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100026/fyodor-dostoevsky" },
    ],
  },
  {
    id: 13,
    name: "Books by C.S. Lewis",
    description: "Including 'Mere Christianity' and 'The Four Loves'.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/cs_lewis.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/c-s-lewis/author100011.html" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/c-s-lewis" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/c-s-lewis-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100011/c-s-lewis" },
    ],
  },
  {
    id: 14,
    name: "Books by J.R.R Tolkien",
    description: "His stories blend mythology, linguistics, and folklore into immersive adventures.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/jrr_tolkien.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/j-r-r-tolkien/author100012.html" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/j-r-r-tolkien" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/j-r-r-tolkien-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100012/j-r-r-tolkien" },
    ],
  },
  {
    id: 15,
    name: "Writings of the Church Fathers",
    description: "Essential works by St. John Chrysostom, St. Basil the Great, and others.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/the_fathers.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/church-fathers/author100013.html" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/church-fathers" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/church-fathers-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100013/church-fathers" },
    ],
  },
  {
    id: 16,
    name: "Books by Philosophers",
    description: "A curated set of influential works by great philosophers",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/philosophy.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/philosophy/author100014.html" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/philosophers" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/philosophy-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100014/philosophy" },
    ],
  },
  {
    id: 17,
    name: "Writings of the Saints",
    description:
      "A soulful collection of writings by Orthodox Christian saints—featuring both beloved and lesser-known voices of faith.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/saints.jpg",
    vendorLinks: [
      { name: "Booktopia", url: "https://www.booktopia.com.au/saints-writings/author100015.html" },
      { name: "Angus & Robertson", url: "https://www.angusrobertson.com.au/author/saints-writings" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/saints-writings-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100015/saints-writings" },
    ],
  },
  {
    id: 18,
    name: "Orthodox Icons",
    description: "Set of hand-painted or printed icons for home veneration.",
    claimed: false,
    category: "Religious",
    imageUrl: "/registry-items/boom.jpg",
    vendorLinks: [
      { name: "Orthodox Australia", url: "https://www.orthodoxaustralia.org.au/shop/icons" },
      { name: "Spiritual Gifts", url: "https://www.spiritualgifts.com.au/icons" },
      { name: "Faithful Shop", url: "https://www.faithfulshop.com/orthodox-icons" },
      { name: "Sacred Art Store", url: "https://www.sacredartstore.com/orthodox-icons" },
    ],
  },
  {
    id: 19,
    name: "Weekly Planner",
    description: "Orthodox-inspired weekly planner for managing household and prayer life.",
    claimed: false,
    category: "Home",
    imageUrl: "/registry-items/weekly_planner.jpg",
    vendorLinks: [
      { name: "Officeworks", url: "https://www.officeworks.com.au/weekly-planners" },
      { name: "Kmart", url: "https://www.kmart.com.au/planners" },
      { name: "Officeworks", url: "https://www.officeworks.com.au/organisers" },
      { name: "Target", url: "https://www.target.com.au/planners" },
    ],
  },
  {
    id: 20,
    name: "Mugs (Set of 4)",
    description: "Cozy ceramic mugs for tea and coffee, neutral tones.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/mug_set_of_4.png",
    vendorLinks: [
      { name: "Kmart", url: "https://www.kmart.com.au/mugs" },
      { name: "Target", url: "https://www.target.com.au/mugs" },
      { name: "Myer", url: "https://www.myer.com.au/c/mugs" },
      { name: "Bunnings", url: "https://www.bunnings.com.au/mugs" },
    ],
  },
  {
    id: 21,
    name: "Candles",
    description: "Aromatic beeswax candles for ambiance and prayer.",
    claimed: false,
    category: "Religious",
    imageUrl: "/registry-items/candles.jpg",
    vendorLinks: [
      { name: "Spiritual Gifts", url: "https://www.spiritualgifts.com.au/beeswax-candles" },
      { name: "Australian Candles", url: "https://www.australiancandles.com.au" },
      { name: "Etsy", url: "https://www.etsy.com/au/market/beeswax_candles" },
      { name: "Amazon Australia", url: "https://www.amazon.com.au/beeswax-candles" },
    ],
  },
  {
    id: 22,
    name: "Charcoal for Incense (Box)",
    description: "Natural incense charcoal blocks for spiritual use.",
    claimed: false,
    category: "Religious",
    imageUrl: "/registry-items/incense.jpg",
    vendorLinks: [
      { name: "Spiritual Gifts", url: "https://www.spiritualgifts.com.au/incense-charcoal" },
      { name: "Incense and More", url: "https://www.incenseandmore.com.au" },
      { name: "Etsy", url: "https://www.etsy.com/au/market/incense_charcoal" },
      { name: "Amazon Australia", url: "https://www.amazon.com.au/incense-charcoal" },
    ],
  },
];
