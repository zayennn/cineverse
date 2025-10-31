import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';
import HeroSlider from '../components/HeroSlider/HeroSlider';
import FilmCard from '../components/FilmCard/FilmCard';
import GenreFilter from '../components/GenreFilter/GenreFilter';
import CustomCursor from '../components/Cursor/CustomCursor';
import { movies } from '../data/movies';
import styles from './Landing.module.css';

const Landing: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [showCursor, setShowCursor] = useState(true);

  const filteredMovies = useMemo(() => {
    if (selectedGenre === 'All') return movies;
    return movies.filter(movie => movie.genre.includes(selectedGenre));
  }, [selectedGenre]);

  // Check if device is mobile
  React.useEffect(() => {
    const checkDevice = () => {
      const isMobile = window.innerWidth <= 768;
      setShowCursor(!isMobile);
      document.body.classList.toggle('cursor-visible', isMobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  return (
    <div className={styles.landing}>
      {showCursor && <CustomCursor />}
      
      <Navbar />
      <HeroSlider />
      
      <main className={styles.main}>
        {/* Movies Section */}
        <section className={styles.moviesSection}>
          <div className={styles.sectionHeader}>
            <motion.h2 
              className={styles.sectionTitle}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Featured Movies
            </motion.h2>
            
            <motion.p 
              className={styles.sectionSubtitle}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Discover amazing stories from around the world
            </motion.p>
          </div>

          {/* Genre Filter */}
          <GenreFilter 
            selectedGenre={selectedGenre} 
            onGenreChange={setSelectedGenre} 
          />

          {/* Movies Grid */}
          <motion.div 
            className={styles.moviesGrid}
            layout
          >
            {filteredMovies.map((movie, index) => (
              <FilmCard 
                key={movie.id} 
                movie={movie} 
                index={index} // Perbaiki di sini - hapus modulus
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredMovies.length === 0 && (
            <motion.div 
              className={styles.emptyState}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>No movies found</h3>
              <p>Try selecting a different genre</p>
            </motion.div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <span className={styles.logoText}>CineVerse</span>
            <p>Your gateway to cinematic adventures</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <a href="#">Home</a>
              <a href="#">Movies</a>
              <a href="#">TV Shows</a>
              <a href="#">New & Popular</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Support</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact Us</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 CineVerse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;