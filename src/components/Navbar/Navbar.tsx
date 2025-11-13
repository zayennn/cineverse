import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSearch, 
  FiSun, 
  FiMoon, 
  FiMonitor,
  FiChevronDown,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';
import { movies, genres } from '../../data/movies';
import type { Movie } from '../../data/movies';
import styles from './Navbar.module.css';

type Theme = 'dark' | 'light' | 'system';

const Navbar: React.FC = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenreOpen, setIsGenreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const genreRef = useRef<HTMLDivElement>(null);

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 5);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
      if (genreRef.current && !genreRef.current.contains(event.target as Node)) {
        setIsGenreOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const themeIcons = {
    dark: <FiMoon size={18} />,
    light: <FiSun size={18} />,
    system: <FiMonitor size={18} />
  };

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.container}>
        {/* Logo */}
        <motion.div 
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={styles.logoText}>CineVerse</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className={styles.desktopMenu}>
          {/* Search Bar */}
          <div className={styles.searchContainer} ref={searchRef}>
            <div className={styles.searchInputWrapper}>
              <FiSearch className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchOpen(true)}
                className={styles.searchInput}
              />
            </div>

            <AnimatePresence>
              {isSearchOpen && searchQuery && (
                <motion.div
                  className={styles.searchResults}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {filteredMovies.map((movie) => (
                    <div key={movie.id} className={styles.searchResultItem}>
                      <div className={styles.searchResultImage}>
                        <div style={{ 
                          width: '100%', 
                          height: '100%', 
                          background: 'linear-gradient(135deg, #2a0a4a 0%, #6a0dad 100%)',
                          backgroundImage: `url(${movie.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '0.7rem'
                        }}>
                          {/* {movie.title.substring(0, 2)} */}
                        </div>
                      </div>
                      <div className={styles.searchResultInfo}>
                        <div className={styles.searchResultTitle}>{movie.title}</div>
                        <div className={styles.searchResultMeta}>
                          <span>⭐ {movie.rating}</span>
                          <span>{movie.age}</span>
                          <span>{movie.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredMovies.length === 0 && (
                    <div className={styles.noResults}>No movies found</div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Theme Toggle */}
          <div className={styles.themeToggle}>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as Theme)}
              className={styles.themeSelect}
            >
              <option value="dark">Dark</option>
              <option value="light">Light</option>
              <option value="system">System</option>
            </select>
            <div className={styles.themeIcon}>
              {themeIcons[theme]}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className={styles.mobileSearch}>
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.mobileSearchInput}
              />
              <FiSearch className={styles.mobileSearchIcon} />
            </div>
            
            <div className={styles.mobileGenres}>
              {genres.map((genre) => (
                <button key={genre} className={styles.mobileGenreItem}>
                  {genre}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;