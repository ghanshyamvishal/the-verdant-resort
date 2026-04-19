export type RoomType = "Deluxe" | "Suite" | "Villa" | "Family" | "Presidential";

export interface Room {
  slug: string;
  name: string;
  type: RoomType;
  description: string;
  longDescription: string;
  price: number;
  maxGuests: number;
  bedType: string;
  size: number;
  amenities: string[];
  images: string[];
  features: string[];
  badge?: "Best Seller" | "New";
}

export const rooms: Room[] = [
  {
    slug: "deluxe-forest-room",
    name: "Deluxe Forest Room",
    type: "Deluxe",
    description:
      "Immerse yourself in nature with panoramic forest views and premium amenities in our most beloved room.",
    longDescription:
      "Wake up to the soothing sounds of the forest in our Deluxe Forest Room, where floor-to-ceiling windows frame a breathtaking panorama of ancient trees and morning mist. The room is designed with natural materials — warm teakwood accents, stone-finish walls, and handwoven textiles — creating an atmosphere of organic luxury.\n\nEvery detail has been thoughtfully curated for your comfort. Sink into the king-sized bed adorned with Egyptian cotton linens, unwind in the deep-soak bathtub filled with forest-herb infusions, and enjoy your morning tea on the private balcony as deer graze in the meadow below. This is The Verdant experience at its most intimate.",
    price: 8500,
    maxGuests: 2,
    bedType: "King Bed",
    size: 450,
    badge: "Best Seller",
    amenities: ["WiFi", "AC", "Forest View", "Minibar", "TV", "Room Service"],
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    ],
    features: [
      "Panoramic floor-to-ceiling forest views",
      "Private balcony with teak lounge chairs",
      "Luxury bath amenities by Forest Essentials",
      "Complimentary daily breakfast for two",
      "Daily turndown service with aromatherapy",
      "High-speed WiFi (up to 100 Mbps)",
      "In-room Nespresso machine",
      "Curated minibar with local delicacies",
    ],
  },
  {
    slug: "mountain-view-suite",
    name: "Mountain View Suite",
    type: "Suite",
    description:
      "Commanding vistas of majestic peaks from a spacious suite with a separate living area and premium finishes.",
    longDescription:
      "Perched on the highest floor of the resort, the Mountain View Suite offers an unobstructed panorama of the Western Ghats that will leave you speechless at sunrise. The separate living area features custom-designed furniture, a curated library of local art books, and a 55-inch smart TV with streaming services.\n\nThe bedroom seamlessly blends into the landscape through its panoramic glass wall, while the bathroom — finished in Italian marble — boasts a freestanding soaking tub positioned to capture the mountain vistas. A dedicated suite butler is available around the clock to attend to your every need, from private dining arrangements to curated nature walks at dawn.",
    price: 14000,
    maxGuests: 3,
    bedType: "King Bed",
    size: 750,
    amenities: [
      "WiFi",
      "AC",
      "Mountain View",
      "Minibar",
      "TV",
      "Room Service",
      "Butler",
    ],
    images: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
    ],
    features: [
      "360° mountain and valley panoramas",
      "Separate living room with designer furniture",
      "Italian marble bathroom with soaking tub",
      "Dedicated 24-hour suite butler",
      "Complimentary airport transfers",
      "Daily breakfast, evening cocktails & canapés",
      "Private dining available in-suite",
      "Telescope for stargazing",
    ],
  },
  {
    slug: "private-pool-villa",
    name: "Private Pool Villa",
    type: "Villa",
    description:
      "Your own secluded sanctuary featuring a heated private infinity pool, butler service, and lush garden grounds.",
    longDescription:
      "The Private Pool Villa is the ultimate expression of personalised luxury at The Verdant Resort. Set within its own walled garden of fragrant frangipani and cascading bougainvillea, the villa offers complete seclusion from the world. The centrepiece is a heated 10-metre infinity pool that merges seamlessly with the horizon over the valley below.\n\nThe villa's indoor-outdoor design allows you to move effortlessly between the air-conditioned interior — with its designer kitchen, sprawling bedroom, and marble spa bathroom — and the outdoor terrace featuring a day bed, outdoor dining cabana, and a traditional stone fire pit for cool evenings. A dedicated villa host manages all arrangements, from in-villa spa treatments to private chef dinners under the stars.",
    price: 28000,
    maxGuests: 4,
    bedType: "King Bed",
    size: 1800,
    badge: "New",
    amenities: [
      "WiFi",
      "AC",
      "Pool View",
      "Minibar",
      "TV",
      "Room Service",
      "Private Pool",
      "Kitchen",
    ],
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=800",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
    ],
    features: [
      "Private heated 10m infinity pool",
      "Walled garden with tropical landscaping",
      "Outdoor dining cabana for up to 6 guests",
      "Stone fire pit terrace",
      "Full designer kitchen",
      "Dedicated villa host",
      "In-villa spa treatment room",
      "Daily fresh floral arrangements",
    ],
  },
  {
    slug: "family-cottage",
    name: "Family Cottage",
    type: "Family",
    description:
      "A charming countryside cottage with interconnected rooms, a private yard, and dedicated kids' amenities.",
    longDescription:
      "Designed with families in mind, the Family Cottage combines warmth and practicality without sacrificing any of The Verdant's renowned luxury. The cottage features two interconnected bedrooms — a master suite with a king bed and a children's room with two cosy twin beds dressed in playful wildlife-themed linen.\n\nA wraparound veranda overlooks a private lawn where children can play safely while parents relax on sun loungers. The cottage kitchen is stocked daily with fresh fruits, juices, and snack essentials, and our children's concierge can arrange guided nature discovery walks, bird-watching sessions, and bonfire evenings. It's the perfect home base for a memorable family escape into nature.",
    price: 18000,
    maxGuests: 6,
    bedType: "Twin + King",
    size: 1200,
    amenities: [
      "WiFi",
      "AC",
      "Forest View",
      "TV",
      "Room Service",
      "Kids Amenities",
      "Kitchen",
      "Yard",
    ],
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    ],
    features: [
      "Two interconnected bedrooms",
      "Private lawn and wraparound veranda",
      "Children's concierge and activity planner",
      "Kid-friendly minibar with healthy snacks",
      "Board games and nature activity kits",
      "Complimentary breakfast for all guests",
      "Baby cot and high chair on request",
      "Guided family nature trail access",
    ],
  },
  {
    slug: "honeymoon-suite",
    name: "Honeymoon Suite",
    type: "Suite",
    description:
      "Crafted for romance — a secluded suite with flower petal turndown, champagne, and a private balcony Jacuzzi.",
    longDescription:
      "The Honeymoon Suite is a love letter written in luxury. From the moment you arrive, every detail is orchestrated to create an atmosphere of tender intimacy — petals scattered across the king bed, a bottle of Moët chilling beside a curated fruit platter, and the soft glow of candles casting warm light across the hand-painted mural walls inspired by local folklore.\n\nStep onto your private balcony to find a two-person Jacuzzi positioned for perfect sunset views over the valley. The bathroom is a spa unto itself, with a rainfall shower, a heated floor-mounted soaking tub, and a vanity stocked with premium his-and-her toiletries. The Honeymoon Suite package includes a private candlelit dinner, a couples' spa ritual, and a personalised adventure itinerary crafted by our romance concierge.",
    price: 22000,
    maxGuests: 2,
    bedType: "Queen Bed",
    size: 900,
    amenities: [
      "WiFi",
      "AC",
      "Mountain View",
      "Minibar",
      "TV",
      "Room Service",
      "Jacuzzi",
      "Champagne",
    ],
    images: [
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    ],
    features: [
      "Private balcony Jacuzzi with valley views",
      "Flower petal turndown service nightly",
      "Champagne and artisanal chocolate on arrival",
      "Candlelit private dinner for two",
      "Couples' spa ritual (90 minutes)",
      "Romance concierge for personalised itinerary",
      "Polaroid camera with complimentary film",
      "Late checkout until 2 PM",
    ],
  },
  {
    slug: "presidential-suite",
    name: "Presidential Suite",
    type: "Presidential",
    description:
      "The pinnacle of resort luxury — a 3,000 sq ft palace with panoramic views, private pool, and full butler staff.",
    longDescription:
      "The Presidential Suite redefines the meaning of luxury hospitality. Spanning the entire top floor of our signature wing, this 3,000 square foot sanctuary commands breathtaking 270° panoramas stretching from the mist-shrouded peaks of the Western Ghats to the shimmering backwaters below. Two king-bedded chambers — each with an ensuite marble bathroom — open onto a vast wraparound terrace housing a heated plunge pool, an alfresco dining pavilion, and a curated sculpture garden.\n\nA private chef, butler, and personal concierge are assigned exclusively to suite guests for the duration of your stay. The suite's private cinema room seats eight, the wine cellar holds over 200 curated labels, and the in-suite treatment room accommodates full spa programs. This is not merely a room — it is a personal resort within The Verdant Resort.",
    price: 45000,
    maxGuests: 6,
    bedType: "King Bed",
    size: 3000,
    badge: "Best Seller",
    amenities: [
      "WiFi",
      "AC",
      "Mountain View",
      "Minibar",
      "TV",
      "Room Service",
      "Private Pool",
      "Private Chef",
      "Butler",
      "Cinema Room",
      "Wine Cellar",
    ],
    images: [
      "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=800",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
      "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    ],
    features: [
      "270° panoramic views of mountains and valley",
      "Heated terrace plunge pool",
      "Private chef and butler team",
      "In-suite cinema room for 8 guests",
      "Curated wine cellar (200+ labels)",
      "Alfresco dining pavilion on terrace",
      "Private spa treatment room",
      "Complimentary helicopter pad access",
    ],
  },
];
