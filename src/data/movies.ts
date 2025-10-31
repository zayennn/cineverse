

export interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  age: string;
  duration: string;
  image: string;
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
    image: "https://image.tmdb.org/t/p/w500/sM33SANp9z6rXW8Itn7NnG1GOEs.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/d07xtqwq1uriQ1hda6qeu8Skt5m.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/hv4XjKhD2ueSMLc9eMjsGNo4M1D.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/veFZHnZcM99GZ0xC0Hk5xA9Tkz8.jpg",
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
    image: "https://image.tmdb.org/t/p/w500/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
    year: 2017,
    featured: true,
  },
];
