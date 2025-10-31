import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiClock, FiEye } from 'react-icons/fi';
import type { Movie } from '../../data/movies';
import styles from './FilmCard.module.css';

interface FilmCardProps {
  movie: Movie;
  index: number;
}

const FilmCard: React.FC<FilmCardProps> = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={styles.cardInner}>
        {/* Card Image */}
        <div className={styles.imageContainer}>
          {/* Ganti dengan placeholder */}
          <div 
            className={styles.placeholderImage}
            style={{ 
              background: `linear-gradient(135deg, #2a0a4a 0%, #6a0dad 100%)`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              width: '100%',
              height: '100%',
              position: 'absolute'
            }}
          >
            {movie.title.split(' ').map(word => word[0]).join('')}
          </div>
          
          {/* Hover Overlay */}
          <motion.div 
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.overlayContent}>
              <motion.button
                className={styles.watchButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiEye size={20} />
                Watch Now
              </motion.button>
            </div>
          </motion.div>

          {/* Age Badge */}
          <div className={styles.ageBadge}>{movie.age}</div>
        </div>

        {/* Card Content */}
        <div className={styles.content}>
          <h3 className={styles.title}>{movie.title}</h3>
          <p className={styles.description}>{movie.description}</p>
          
          <div className={styles.genres}>
            {movie.genre.map((genre, idx) => (
              <span key={idx} className={styles.genre}>{genre}</span>
            ))}
          </div>
          
          <div className={styles.meta}>
            <div className={styles.rating}>
              <FiStar className={styles.starIcon} />
              <span>{movie.rating}</span>
            </div>
            <div className={styles.duration}>
              <FiClock className={styles.clockIcon} />
              <span>{movie.duration}</span>
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div 
          className={styles.glow}
          animate={{ 
            opacity: isHovered ? 0.6 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default FilmCard;