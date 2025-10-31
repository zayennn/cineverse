import Zootopia from '../assets/images/films/zootopia.jpeg'
import Deadpool2 from '../assets/images/films/deadpool2.jpg'
import FastX from '../assets/images/films/fastx.webp'
import Jumanji from '../assets/images/films/jumanji.jpg'
import Frozen3 from '../assets/images/films/Frozen3.jpg'
import Insidious from '../assets/images/films/insidious.jpg'
import Endgame from '../assets/images/films/endgame.jpg'
import NinjaAssassin from '../assets/images/films/ninjaAssassin.jpg'
import MidnightSun from '../assets/images/films/midnightSun.jpg'
import TheGreatestShowman from '../assets/images/films/theGreatestShowMan.png'

export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  age: string;
  duration: string;
  image: any;
  year: number;
  featured?: boolean;
}

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
  "Family",
  "Superhero",
  "Animation",
  "Crime",
  "Spy",
];

export const movies: Movie[] = [
  {
    id: 1,
    title: "Zootopia",
    description:
      "Seekor kelinci polisi pemula bekerja sama dengan rubah licik untuk mengungkap konspirasi besar di kota hewan modern, Zootopia.",
    genre: ["Animation", "Adventure", "Comedy"],
    rating: 8.0,
    age: "7+",
    duration: "1h 48m",
    image: Zootopia,
    year: 2016,
    featured: true,
  },
  {
    id: 2,
    title: "Deadpool 2",
    description:
      "Deadpool kembali dengan lebih banyak aksi, humor gelap, dan kekacauan saat ia membentuk tim mutan baru bernama X-Force.",
    genre: ["Action", "Comedy", "Superhero"],
    rating: 8.1,
    age: "17+",
    duration: "1h 59m",
    image: Deadpool2,
    year: 2018,
    featured: true,
  },
  {
    id: 3,
    title: "Fast X",
    description:
      "Dom Toretto menghadapi musuh baru yang bertekad membalas dendam atas masa lalu, membawa balapan ini ke level global.",
    genre: ["Action", "Thriller", "Crime"],
    rating: 7.1,
    age: "13+",
    duration: "2h 21m",
    image: FastX,
    year: 2023,
  },
  {
    id: 4,
    title: "Jumanji: Welcome to the Jungle",
    description:
      "Empat remaja terjebak dalam video game ajaib dan harus bertahan hidup di dunia Jumanji dengan tubuh karakter game mereka.",
    genre: ["Adventure", "Comedy", "Fantasy"],
    rating: 7.3,
    age: "13+",
    duration: "1h 59m",
    image: Jumanji,
    year: 2017,
  },
  {
    id: 5,
    title: "Frozen 3",
    description:
      "Elsa dan Anna menghadapi ancaman baru dari dunia es misterius yang membangkitkan kekuatan kuno.",
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: 8.0,
    age: "7+",
    duration: "1h 55m",
    image: Frozen3,
    year: 2025,
  },
  {
    id: 6,
    title: "Insidious: The Red Door",
    description:
      "Keluarga Lambert kembali menghadapi mimpi buruk dari masa lalu saat pintu merah ke dunia roh terbuka kembali.",
    genre: ["Horror", "Thriller", "Mystery"],
    rating: 6.7,
    age: "18+",
    duration: "1h 47m",
    image: Insidious,
    year: 2023,
  },
  {
    id: 7,
    title: "Avengers: Endgame",
    description:
      "Para Avengers yang tersisa bersatu sekali lagi untuk membalikkan dampak dari Thanos dan menyelamatkan alam semesta.",
    genre: ["Action", "Adventure", "Superhero"],
    rating: 8.4,
    age: "13+",
    duration: "3h 1m",
    image: Endgame,
    year: 2019,
    featured: true,
  },
  {
    id: 8,
    title: "Ninja Assassin",
    description:
      "Seorang pembunuh bayaran yang dibesarkan oleh klan ninja rahasia memberontak dan berusaha menghancurkan gurunya sendiri.",
    genre: ["Action", "Thriller", "Crime"],
    rating: 6.3,
    age: "18+",
    duration: "1h 39m",
    image: NinjaAssassin,
    year: 2009,
  },
  {
    id: 9,
    title: "Midnight Sun",
    description:
      "Seorang gadis dengan kondisi langka yang membuatnya tak bisa terkena sinar matahari jatuh cinta pada seorang pria yang baru dikenalnya.",
    genre: ["Romance", "Drama", "Music"],
    rating: 7.2,
    age: "10+",
    duration: "1h 31m",
    image: MidnightSun,
    year: 2018,
  },
  {
    id: 10,
    title: "The Greatest Showman",
    description:
      "Terinspirasi dari kisah nyata P.T. Barnum, film ini menampilkan perjalanan seorang visioner yang menciptakan pertunjukan sirkus paling spektakuler di dunia.",
    genre: ["Musical", "Drama", "Biography"],
    rating: 8.0,
    age: "10+",
    duration: "1h 45m",
    image: TheGreatestShowman,
    year: 2017,
    featured: true,
  },
];
