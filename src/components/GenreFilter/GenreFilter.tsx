import React from 'react';
import { motion } from 'framer-motion';
import { genres } from '../../data/movies';
import styles from './GenreFilter.module.css';

interface GenreFilterProps {
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
}

const GenreFilter: React.FC<GenreFilterProps> = ({ selectedGenre, onGenreChange }) => {
  return (
    <div className={styles.genreFilter}>
      <div className={styles.filterContainer}>
        {genres.map((genre, index) => (
          <motion.button
            key={genre}
            className={`${styles.genreButton} ${
              selectedGenre === genre ? styles.active : ''
            }`}
            onClick={() => onGenreChange(genre)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
          >
            {genre}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;