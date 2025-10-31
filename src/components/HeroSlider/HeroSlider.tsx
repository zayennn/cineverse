import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import { FiPlay, FiInfo } from 'react-icons/fi';

import 'swiper/swiper-bundle.css';
import { movies } from '../../data/movies';
import styles from './HeroSlider.module.css';

const HeroSlider: React.FC = () => {
  const featuredMovies = movies.filter(movie => movie.featured);

  return (
    <div className={styles.hero}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive
        }}
        className={styles.swiper}
      >
        {featuredMovies.map((movie) => (
          <SwiperSlide key={movie.id} className={styles.slide}>
            {/* Background Image */}
            <div
              className={styles.slideBackground}
              style={{
                backgroundImage: `url(${movie.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className={styles.gradientOverlay}></div>
            </div>

            {/* Slide Content */}
            <div className={styles.slideContent}>
              <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h1 className={styles.title}>{movie.title}</h1>
                <p className={styles.description}>{movie.description}</p>

                <div className={styles.metaInfo}>
                  <span className={styles.rating}>⭐ {movie.rating}</span>
                  <span className={styles.age}>{movie.age}</span>
                  <span className={styles.duration}>{movie.duration}</span>
                  <span className={styles.year}>{movie.year}</span>
                </div>

                <div className={styles.genres}>
                  {movie.genre.map((genre) => (
                    <span key={genre} className={styles.genreTag}>
                      {genre}
                    </span>
                  ))}
                </div>

                <div className={styles.buttons}>
                  <motion.button
                    className={styles.playButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiPlay size={20} />
                    Watch Now
                  </motion.button>
                  <motion.button
                    className={styles.infoButton}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiInfo size={20} />
                    More Info
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;