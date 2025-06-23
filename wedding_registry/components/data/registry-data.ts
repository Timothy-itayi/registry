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
      { name: "Seraphim Shop", url: "https://www.seraphimshop.com.au/product-page/wooden-wall-crucifix-cross-crucifixion" },
     
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
      
      { name: "Target", url: "https://www.target.com.au/p/2-slice-toaster-black-anko/68767020" },
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
      { name: "Target", url: "https://www.target.com.au/p/1-7l-soft-touch-kettle-grey-anko/70346312" },

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

      { name: "Target", url: "https://www.target.com.au/p/16-piece-mayfair-cutlery-set-anko/70268973" },
    
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
    
      { name: "Target", url: "https://www.target.com.au/p/wine-glasses-6-pack-anko/68742805" },
   
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

      { name: "Target", url: "https://www.target.com.au/p/slow-cooker-5l-anko/68749293" },
 
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
    name: "Potato Masher",
    description: "Stainless steel masher with ergonomic handle.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/potato_masher.jpg",
    vendorLinks: [
      { name: "Target", url: "https://www.target.com.au/p/potato-masher-anko/68728182" },
      
    ],
  },
  {
    id: 11,
    name: "Books by Fyodor Dostoevsky",
    description: "Collection including 'The Brothers Karamazov' and 'Crime and Punishment'.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/fydor.jpg",
    vendorLinks: [
      { name: "Crime and Punishment", url: "https://www.amazon.com.au/Crime-Punishment-Fyodor-Dostoevsky/dp/1509827749/ref=asc_df_1509827749?mcid=8e299cef31da3e41b04da5b1b106e856&tag=googleshopdsk-22&linkCode=df0&hvadid=712376923907&hvpos=&hvnetw=g&hvrand=17228644588368799261&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9071436&hvtargid=pla-586575507588&psc=1&gad_source=1" },
      { name: "Demons", url: "https://www.amazon.com.au/Demons-Penguin-Classics-Fyodor-Dostoyevsky-ebook/dp/B002RI9IU6/ref=sr_1_18?crid=5NUB0H415G59&dib=eyJ2IjoiMSJ9.fYX5icFHH0S_nJGZtu8CHJDCY9Gjy0Hlw_6U18iXYkmAD22JeSZt8mDeQYcTumpQwuzJCu3BZ0pjs2Xi0zPLr92Xa2sFcynXb9_18ovavJG4nhCN45nNL_MxOYGfoNl1PWhgr894qv5Qj-mUCYDE2MRgGPY2PBqYDeu7H6qnhFuxz2pxqWTn1BLKRJPUhrXO.8wT7N0H9xY7zGarSWhloX0qvI5tm5cEa_KOS3qcM2AE&dib_tag=se&keywords=fyodor+dostoevsky&qid=1750669886&s=digital-text&sprefix=fyo%2Cdigital-text%2C252&sr=1-18&xpid=ZP_U2gb_sBP0n" },
      { name: "Notes from Underground", url: "https://www.booktopia.com.au/notes-from-the-underground-other-stories-fyodor-dostoyevsky/book/9781840225778.html?source=pla&gad_source=1&gad_campaignid=21844631717&gbraid=0AAAAA-Ia9hOMsGLmaVYCe-2Y6xrjM72yG&gclid=CjwKCAjw9uPCBhATEiwABHN9K1D0VNRI1oZvoM8ZVIcyv8v9UorVU_4LoO8P2OpVPw5QGOChvftqMhoC2UIQAvD_BwE" },
      { name: "The Idiot", url: "https://www.booktopia.com.au/the-idiot-fyodor-dostoyevsky/book/9781853261756.html" },
    ],
  },
  {
    id: 12,
    name: "Books by C.S. Lewis",
    description: "Including 'Mere Christianity' and 'The Four Loves'.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/cs_lewis.jpg",
    vendorLinks: [
      { name: "Mere Christianity", url: "https://www.booktopia.com.au/mere-christianity-gift-edition-c-s-lewis/book/9780061350214.html?utm_source=chatgpt.com" },
      { name: "The Abolition of Man", url: "https://www.booktopia.com.au/the-abolition-of-man-c-s-lewis/book/9780060652944.html?source=pla&gad_source=1&gad_campaignid=21618274688&gbraid=0AAAAA-Ia9hP9fZnE3yy4uHUtSPVPEfimB&gclid=CjwKCAjw9uPCBhATEiwABHN9K9e6mRdD8fskxdEfEFCTdDziRfcsL3ifdczw393W-pfb3bCe7iJwYBoCKrcQAvD_BwE" },
      { name: "The Lion , The Witch and The Wardrobe", url: "https://www.qbd.com.au/the-chronicles-of-narnia-01-the-lion-the-witch-and-the-wardrobe/c-s-lewis/9780007588527/" },
      { name: "A Grief Observed ", url: "https://www.booktopia.com.au/a-grief-observed-c-s-lewis/book/9780571290680.html?source=pla&gad_source=1&gad_campaignid=21618274688&gbraid=0AAAAA-Ia9hP9fZnE3yy4uHUtSPVPEfimB&gclid=CjwKCAjw9uPCBhATEiwABHN9K6PtsOCm944UKmoFMfWG7HWO067gKcwElFoTTubLMRU3B0tV_GaiSxoCfnMQAvD_BwE" },
    ],
  },
  {
    id: 13,
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
    id: 14,
    name: "Writings of the Church Fathers",
    description: "Essential works by St. John Chrysostom, St. Basil the Great, and others.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/the_fathers.jpg",
    vendorLinks: [
      { name: "On Marriage and Family: St John Chrysostom", url: "https://www.amazon.com.au/Marriage-Family-Life-Saint-Chrysostom/dp/0913836869/ref=pd_rhf_se_s_pd_crcd_d_sccl_2_1/358-0307922-7431347?pd_rd_w=7L2gR&content-id=amzn1.sym.1b5dd9a9-2e0a-4bca-81c3-6b910f3cc402&pf_rd_p=1b5dd9a9-2e0a-4bca-81c3-6b910f3cc402&pf_rd_r=S6JV8BVKBSQ5HTZ8CZV6&pd_rd_wg=pBpl8&pd_rd_r=7f979c00-4f47-4356-8511-a58312bef7fd&pd_rd_i=0913836869&psc=1" },
      { name: "THE LADDER OF DIVINE ASCENT: St. John Climacus ", url: "http://amazon.com.au/LADDER-DIVINE-ASCENT-JOHN/dp/179563524X/ref=pd_sbs_d_sccl_2_2/358-0307922-7431347?pd_rd_w=loguv&content-id=amzn1.sym.80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_p=80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_r=BQDJVJPTVZCPCGEKZAKX&pd_rd_wg=cAaab&pd_rd_r=a65b0d2f-e249-4574-a887-997caa7066d0&pd_rd_i=179563524X&psc=1" },
      { name: "Sayings of the Desert Fathers", url: "https://www.amazon.com.au/Sayings-Desert-Fathers-Alphabetical-Collection/dp/0879079592/ref=pd_sbs_d_sccl_2_12/358-0307922-7431347?pd_rd_w=1rYQU&content-id=amzn1.sym.80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_p=80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_r=BNB9A7Y563PM3JDXJZPY&pd_rd_wg=AawbG&pd_rd_r=cbac4926-54e9-4b07-ad2d-132f451a54d9&pd_rd_i=0879079592&psc=1" },
      { name: "Writings: The Fount of Knowledge: The Philosophical Chapters, On Heresies, The Orthodox Faith", url: "https://www.amazon.com.au/Writings-Knowledge-Philosophical-Chapters-Heresies/dp/1470149249/ref=pd_sbs_d_sccl_2_11/358-0307922-7431347?pd_rd_w=1rYQU&content-id=amzn1.sym.80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_p=80849879-a969-4ad2-b3c3-aa1b880c7657&pf_rd_r=BNB9A7Y563PM3JDXJZPY&pd_rd_wg=AawbG&pd_rd_r=cbac4926-54e9-4b07-ad2d-132f451a54d9&pd_rd_i=1470149249&psc=1" },
    ],
  },
  {
    id: 15,
    name: "Mixing Bowls",
    description: "Some mixing bowls for baking.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/mixingbowls.webp",
    vendorLinks: [
      { name: "Target", url: "https://www.target.com.au/p/glass-mixing-and-prep-bowls-set-of-5-anko/69287251" },
      
    ],
  },
  {
    id: 16,
    name: "Writings of the Saints",
    description:
      "A soulful collection of writings by Orthodox Christian saints—featuring both beloved and lesser-known voices of faith.",
    claimed: false,
    category: "Books",
    imageUrl: "/registry-items/saints.jpg",
    vendorLinks: [
      { name: "Orthodox Book Store: Lives of the Saints", url: "https://www.orthodoxbookstore.org.au/collections/lives-of-the-saints-english" },
      { name: "Orthodox Book Store: Modern Fathers", url: "https://www.orthodoxbookstore.org.au/collections/lives-of-the-saints-english/modern-fathers" },
      { name: "MySchoolBooks", url: "https://www.myschoolbooks.com.au/saints-writings-books" },
      { name: "Book Depository", url: "https://www.bookdepository.com/author/100015/saints-writings" },
    ],
  },
  {
    id: 17,
    name: "Orthodox Icons",
    description: "Set of hand-painted or printed icons for home veneration.",
    claimed: false,
    category: "Religious",
    imageUrl: "/registry-items/boom.jpg",
    vendorLinks: [
      { name: "Apostle Paul Bookstore", url: "https://www.apostlepaulbookstore.org.au/product-category/icons/wooden-icons/" },

    ],
  },
  {
    id: 18,
    name: "Weekly Planner",
    description: "Orthodox-inspired weekly planner for managing household and prayer life.",
    claimed: false,
    category: "Home",
    imageUrl: "/registry-items/weekly_planner.jpg",
    vendorLinks: [
    
  
      { name: "Target", url: "https://www.target.com.au/p/magnetic-monthly-board-anko/71106533" },
    ],
  },
  {
    id: 19,
    name: "Mugs (Set of 4)",
    description: "Cozy ceramic mugs for tea and coffee, neutral tones.",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/mug_set_of_4.png",
    vendorLinks: [
      { name: "Kmart", url: "https://www.target.com.au/p/coffee-mugs-4-pack-anko/68741457" },

    ],
  },

  {
    id: 20,
    name: "Oven Dishes",
    description: "",
    claimed: false,
    category: "Kitchen",
    imageUrl: "/registry-items/ovendish.webp",
    vendorLinks: [
      { name: "Kitchen Warehouse", url: "https://www.kitchenwarehouse.com.au/product/salisbury-co-stack-rectangular-baker-20x16cm-white-set-of-2?gad_source=1&gad_campaignid=21866913036&gbraid=0AAAAAD9uNRwKUODKOT27jL0pPA4ozXX98&gclid=CjwKCAjw9uPCBhATEiwABHN9K_yV4yoSTd-j-oG2AK8trOd7_q2QPIXDgP6BoY7ZVOIOGf5X0OKuoRoC1UQQAvD_BwE" },
      { name: "Kmart", url: "https://www.kmart.com.au/product/4l-olive-cast-iron-casserole-43531745/" },
    
    ],
  },
];
