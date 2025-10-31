export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  age: string;
  duration: string;
  image: string;
  featured?: boolean;
  year: number;
}

export const movies: Movie[] = [
  {
    id: 1,
    title: "Moonlit Whispers",
    description: "A mysterious romance under neon skies where two souls find each other in a world of dreams and reality.",
    genre: ["Romance", "Fantasy", "Drama"],
    rating: 4.7,
    age: "13+",
    duration: "1h 45m",
    image: "/api/placeholder/800/450",
    featured: true,
    year: 2024
  },
  {
    id: 2,
    title: "Neon Samurai",
    description: "Cyberpunk meets ancient honor in this thrilling action-packed saga of a warrior's redemption.",
    genre: ["Action", "Sci-Fi", "Adventure"],
    rating: 4.9,
    age: "18+",
    duration: "2h 10m",
    image: "/api/placeholder/800/450",
    featured: true,
    year: 2024
  },
  {
    id: 3,
    title: "Eternal Bloom",
    description: "A magical journey through time and space where flowers hold the secrets to immortality.",
    genre: ["Fantasy", "Adventure", "Mystery"],
    rating: 4.5,
    age: "13+",
    duration: "1h 55m",
    image: "/api/placeholder/800/450",
    year: 2024
  },
  {
    id: 4,
    title: "Midnight Runner",
    description: "A high-speed thriller about a courier who uncovers a corporate conspiracy that could change the world.",
    genre: ["Action", "Thriller", "Mystery"],
    rating: 4.6,
    age: "16+",
    duration: "2h 5m",
    image: "/api/placeholder/800/450",
    year: 2024
  },
  {
    id: 5,
    title: "Starlight Serenade",
    description: "A musical romance that transcends time, set against the backdrop of a celestial phenomenon.",
    genre: ["Romance", "Musical", "Drama"],
    rating: 4.4,
    age: "13+",
    duration: "1h 50m",
    image: "/api/placeholder/800/450",
    year: 2023
  },
  {
    id: 6,
    title: "Cyber Ghost",
    description: "In a digital world, a hacker must stop a rogue AI from taking over the global network.",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 4.8,
    age: "18+",
    duration: "2h 15m",
    image: "/api/placeholder/800/450",
    year: 2024
  },
  {
    id: 7,
    title: "Whispering Pines",
    description: "A family discovers their new home holds ancient secrets and supernatural mysteries.",
    genre: ["Horror", "Mystery", "Thriller"],
    rating: 4.3,
    age: "16+",
    duration: "1h 48m",
    image: "/api/placeholder/800/450",
    year: 2023
  },
  {
    id: 8,
    title: "Ocean's Heart",
    description: "An underwater adventure exploring lost civilizations and mythical sea creatures.",
    genre: ["Adventure", "Fantasy", "Family"],
    rating: 4.5,
    age: "10+",
    duration: "1h 52m",
    image: "/api/placeholder/800/450",
    year: 2024
  },
  {
    id: 9,
    title: "Desert Dreams",
    description: "A wanderer's journey through mystical deserts where reality and mirages intertwine.",
    genre: ["Adventure", "Drama", "Mystery"],
    rating: 4.2,
    age: "13+",
    duration: "1h 58m",
    image: "/api/placeholder/800/450",
    year: 2023
  },
  {
    id: 10,
    title: "Neo-Tokyo Nights",
    description: "A cyber-noir detective story set in the futuristic metropolis of Neo-Tokyo.",
    genre: ["Sci-Fi", "Mystery", "Action"],
    rating: 4.7,
    age: "18+",
    duration: "2h 8m",
    image: "/api/placeholder/800/450",
    year: 2024
  }
];

export const genres = [
  "All",
  "Action",
  "Adventure",
  "Romance",
  "Sci-Fi",
  "Fantasy",
  "Drama",
  "Thriller",
  "Mystery",
  "Horror",
  "Musical",
  "Family"
];