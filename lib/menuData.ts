export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number; // TND
  category: string;
  image: string;
};

export const menuItems: MenuItem[] = [
  {
    id: "carrot-cake",
    name: "Carrot Cake",
    description:
      "Moist spiced carrot cake with cream cheese frosting and toasted walnuts.",
    price: 9,
    category: "Pastries",
    image: "https://picsum.photos/seed/moderncircle10/800/600",
  },
  {
    id: "granola",
    name: "House Granola",
    description:
      "Toasted oats, almonds and honey served with Greek yogurt and fresh fruit.",
    price: 14,
    category: "Brunch",
    image: "https://picsum.photos/seed/moderncircle11/800/600",
  },
  {
    id: "pistachier",
    name: "Pistachier",
    description:
      "Delicate pistachio cake with a soft sponge and a light cream finish.",
    price: 10,
    category: "Pastries",
    image: "https://picsum.photos/seed/moderncircle12/800/600",
  },
  {
    id: "cheesecake",
    name: "Cheesecake",
    description:
      "Classic baked cheesecake with a buttery biscuit base and seasonal coulis.",
    price: 12,
    category: "Pastries",
    image: "https://picsum.photos/seed/moderncircle13/800/600",
  },
  {
    id: "fresh-juices",
    name: "Fresh Juices",
    description:
      "Cold-pressed seasonal juices — orange, beet & ginger, green detox.",
    price: 8,
    category: "Drinks",
    image: "https://picsum.photos/seed/moderncircle14/800/600",
  },
  {
    id: "specialty-coffee",
    name: "Specialty Coffee",
    description:
      "Single-origin espresso, flat white, V60 pour-over — crafted by our baristas.",
    price: 6,
    category: "Drinks",
    image: "https://picsum.photos/seed/moderncircle15/800/600",
  },
  {
    id: "brunch-plate",
    name: "Brunch Plate",
    description:
      "Eggs your way, avocado toast, halloumi, seasonal fruit and sourdough.",
    price: 22,
    category: "Brunch",
    image: "https://picsum.photos/seed/moderncircle16/800/600",
  },
];
