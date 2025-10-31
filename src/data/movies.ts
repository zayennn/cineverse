// src/data/movies.ts
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

export const movies: Movie[] = [
  {
    id: 1,
    title: "Dune: Part Three",
    description:
      "Paul Atreides menghadapi pilihan terakhir antara cinta dan kekuasaan saat pertempuran untuk Arrakis mencapai puncaknya.",
    genre: ["Sci-Fi", "Action", "Drama"],
    rating: 8.9,
    age: "13+",
    duration: "2h 45m",
    image:
      "https://image.tmdb.org/t/p/w500/dune3_poster.jpg",
    year: 2025,
    featured: true,
  },
  {
    id: 2,
    title: "Avengers: Legacy",
    description:
      "Generasi baru Avengers harus menghadapi ancaman multiverse yang mengancam keberadaan seluruh realitas.",
    genre: ["Action", "Adventure", "Superhero"],
    rating: 8.7,
    age: "13+",
    duration: "2h 35m",
    image:
      "https://image.tmdb.org/t/p/w500/avengers_legacy.jpg",
    year: 2025,
    featured: true,
  },
  {
    id: 3,
    title: "Inside Out 2",
    description:
      "Riley kini remaja, menghadapi emosi baru yang datang dengan pubertas dan tantangan kehidupan sosialnya.",
    genre: ["Animation", "Comedy", "Family"],
    rating: 8.2,
    age: "7+",
    duration: "1h 55m",
    image:
      "https://image.tmdb.org/t/p/w500/inside_out_2.jpg",
    year: 2025,
  },
  {
    id: 4,
    title: "The Batman: Arkham Shadows",
    description:
      "Bruce Wayne kembali menghadapi kegelapan Gotham ketika misteri baru muncul dari Arkham Asylum.",
    genre: ["Action", "Thriller", "Crime"],
    rating: 8.4,
    age: "16+",
    duration: "2h 28m",
    image:
      "https://image.tmdb.org/t/p/w500/batman_arkham.jpg",
    year: 2025,
  },
  {
    id: 5,
    title: "Frozen Realms",
    description:
      "Sebuah dunia es misterius terbuka, mengungkap kekuatan tersembunyi yang mengancam keseimbangan alam.",
    genre: ["Fantasy", "Adventure", "Drama"],
    rating: 7.9,
    age: "10+",
    duration: "2h 10m",
    image:
      "https://image.tmdb.org/t/p/w500/frozen_realms.jpg",
    year: 2025,
  },
  {
    id: 6,
    title: "Cyber Tokyo",
    description:
      "Di masa depan yang penuh neon, seorang hacker legendaris membongkar rahasia di balik sistem AI pemerintah Jepang.",
    genre: ["Sci-Fi", "Action", "Thriller"],
    rating: 8.5,
    age: "17+",
    duration: "2h 2m",
    image:
      "https://image.tmdb.org/t/p/w500/cyber_tokyo.jpg",
    year: 2025,
    featured: true,
  },
  {
    id: 7,
    title: "Echoes of Time",
    description:
      "Seorang ilmuwan menemukan cara untuk berkomunikasi dengan masa lalu — tapi mengubah sejarah punya konsekuensi fatal.",
    genre: ["Sci-Fi", "Mystery", "Drama"],
    rating: 8.1,
    age: "13+",
    duration: "2h 14m",
    image:
      "https://image.tmdb.org/t/p/w500/echoes_of_time.jpg",
    year: 2025,
  },
  {
    id: 8,
    title: "Spirited Away 2: The Lost Spirits",
    description:
      "Chihiro kembali ke dunia roh setelah pintu misterius terbuka lagi sepuluh tahun kemudian.",
    genre: ["Animation", "Fantasy", "Adventure"],
    rating: 9.0,
    age: "10+",
    duration: "2h 5m",
    image:
      "https://image.tmdb.org/t/p/w500/spirited_away_2.jpg",
    year: 2025,
    featured: true,
  },
  {
    id: 9,
    title: "Blade Reborn",
    description:
      "Vampir kembali bangkit di era modern, dan Blade harus menghadapi generasi baru musuh yang lebih berbahaya.",
    genre: ["Action", "Horror", "Superhero"],
    rating: 7.8,
    age: "18+",
    duration: "2h 20m",
    image:
      "https://image.tmdb.org/t/p/w500/blade_reborn.jpg",
    year: 2025,
  },
  {
    id: 10,
    title: "Dreamwalker",
    description:
      "Seorang gadis muda mampu masuk ke mimpi orang lain — tapi kenyataan dan dunia mimpi mulai bercampur.",
    genre: ["Fantasy", "Drama", "Mystery"],
    rating: 8.3,
    age: "13+",
    duration: "1h 59m",
    image:
      "https://image.tmdb.org/t/p/w500/dreamwalker.jpg",
    year: 2025,
  },
  {
    id: 11,
    title: "Neon Hearts",
    description:
      "Cinta dua musisi muda di tengah gemerlap dunia malam Seoul, diwarnai ambisi dan pengkhianatan.",
    genre: ["Romance", "Drama", "Music"],
    rating: 7.6,
    age: "16+",
    duration: "2h 3m",
    image:
      "https://image.tmdb.org/t/p/w500/neon_hearts.jpg",
    year: 2025,
  },
  {
    id: 12,
    title: "Edge of Gravity",
    description:
      "Astronot yang terdampar di orbit bumi mencoba bertahan hidup setelah misi penyelamatan gagal total.",
    genre: ["Sci-Fi", "Thriller", "Drama"],
    rating: 8.0,
    age: "13+",
    duration: "2h 18m",
    image:
      "https://image.tmdb.org/t/p/w500/edge_of_gravity.jpg",
    year: 2025,
  },
  {
    id: 13,
    title: "Kingdom of Ashes",
    description:
      "Pahlawan muda berjuang melawan tirani dalam kerajaan yang dipenuhi sihir dan pengkhianatan.",
    genre: ["Fantasy", "Action", "Adventure"],
    rating: 7.9,
    age: "13+",
    duration: "2h 25m",
    image:
      "https://image.tmdb.org/t/p/w500/kingdom_of_ashes.jpg",
    year: 2025,
  },
  {
    id: 14,
    title: "Code Zero",
    description:
      "Seorang agen rahasia harus membongkar konspirasi global yang disembunyikan di dalam jaringan AI.",
    genre: ["Action", "Thriller", "Spy"],
    rating: 8.2,
    age: "16+",
    duration: "2h 12m",
    image:
      "https://image.tmdb.org/t/p/w500/code_zero.jpg",
    year: 2025,
  },
  {
    id: 15,
    title: "Aurora Nights",
    description:
      "Romansa antara dua fotografer alam liar yang terjebak di kutub utara saat badai salju abadi datang.",
    genre: ["Romance", "Drama"],
    rating: 7.8,
    age: "10+",
    duration: "1h 52m",
    image:
      "https://image.tmdb.org/t/p/w500/aurora_nights.jpg",
    year: 2025,
  },
  {
    id: 16,
    title: "The Last Signal",
    description:
      "Pesan radio misterius dari luar angkasa mengubah kehidupan ilmuwan yang menerimanya.",
    genre: ["Sci-Fi", "Mystery"],
    rating: 8.1,
    age: "13+",
    duration: "2h 8m",
    image:
      "https://image.tmdb.org/t/p/w500/last_signal.jpg",
    year: 2025,
  },
  {
    id: 17,
    title: "Midnight Sonata",
    description:
      "Seorang pianis buta kembali ke panggung setelah menemukan rahasia kelam dari masa lalunya.",
    genre: ["Drama", "Mystery", "Music"],
    rating: 7.5,
    age: "16+",
    duration: "1h 47m",
    image:
      "https://image.tmdb.org/t/p/w500/midnight_sonata.jpg",
    year: 2025,
  },
  {
    id: 18,
    title: "The Heist Paradox",
    description:
      "Sekelompok pencuri elit mencoba melakukan perampokan waktu nyata yang mengubah konsep realitas.",
    genre: ["Action", "Thriller", "Crime"],
    rating: 8.4,
    age: "18+",
    duration: "2h 10m",
    image:
      "https://image.tmdb.org/t/p/w500/heist_paradox.jpg",
    year: 2025,
  },
  {
    id: 19,
    title: "Sea of Memories",
    description:
      "Kapal penelitian yang hilang selama 20 tahun ditemukan kembali dengan rahasia di dalamnya.",
    genre: ["Mystery", "Adventure"],
    rating: 7.7,
    age: "13+",
    duration: "2h 0m",
    image:
      "https://image.tmdb.org/t/p/w500/sea_of_memories.jpg",
    year: 2025,
  },
  {
    id: 20,
    title: "Zero Point",
    description:
      "Ilmuwan eksentrik menemukan partikel energi tak terbatas, tapi menciptakan bencana di seluruh dunia.",
    genre: ["Sci-Fi", "Action"],
    rating: 8.0,
    age: "16+",
    duration: "2h 6m",
    image:
      "https://image.tmdb.org/t/p/w500/zero_point.jpg",
    year: 2025,
  },
];
