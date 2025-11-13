import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiStar, FiClock, FiCalendar, FiPlay, FiArrowLeft, FiHeart } from 'react-icons/fi';
import { movies } from '../data/movies';
import type { Movie } from '../data/movies';
import styles from './FilmDescription.module.css';

const FilmDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [userRating, setUserRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ text: string; rating: number; date: string }[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Initialize Paroller effect
    const initParoller = () => {
      const jumbotron = document.querySelector(`.${styles.jumbotron}`) as HTMLElement;
      if (jumbotron) {
        window.addEventListener('scroll', () => {
          const scrolled = window.pageYOffset;
          const rate = scrolled * -0.5;
          jumbotron.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
      }
    };

    initParoller();

    // Find movie by ID
    const foundMovie = movies.find(m => m.id === parseInt(id || '0'));
    setMovie(foundMovie || null);

    // Load comments from localStorage
    const savedComments = localStorage.getItem(`comments_${id}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }

    // Load favorite status
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(parseInt(id || '0')));
  }, [id]);

  const handleAddComment = () => {
    if (comment.trim() && userRating > 0) {
      const newComment = {
        text: comment,
        rating: userRating,
        date: new Date().toLocaleDateString()
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(`comments_${id}`, JSON.stringify(updatedComments));
      setComment('');
      setUserRating(0);
    }
  };

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const movieId = parseInt(id || '0');
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav: number) => fav !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...favorites, movieId];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
    
    setIsFavorite(!isFavorite);
  };

  const handlePlayMovie = () => {
    // Simulate playing movie - in real app, this would open a video player
    alert(`Starting to play: ${movie?.title}`);
  };

  if (!movie) {
    return (
      <div className={styles.notFound}>
        <h2>Movie not found</h2>
        <button onClick={() => navigate('/')} className={styles.backButton}>
          Back to Home
        </button>
      </div>
    );
  }

  const averageRating = comments.length > 0 
    ? (comments.reduce((acc, curr) => acc + curr.rating, 0) / comments.length).toFixed(1)
    : movie.rating;

  return (
    <div className={styles.container}>
      {/* Hero Section with Paroller Effect */}
      <div 
        className={styles.jumbotron}
        style={{ backgroundImage: `url(${movie.image})` }}
        data-paroller-factor="0.5"
      >
        <div className={styles.jumbotronOverlay}>
          <div className={styles.jumbotronContent}>
            <motion.button
              className={styles.backButton}
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiArrowLeft size={20} />
              Back to Home
            </motion.button>
            
            <motion.div
              className={styles.movieHeader}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={styles.movieTitle}>{movie.title}</h1>
              <p className={styles.movieDescription}>{movie.description}</p>
              
              <div className={styles.movieMeta}>
                <div className={styles.metaItem}>
                  <FiStar className={styles.metaIcon} />
                  <span>{averageRating} / 5.0</span>
                </div>
                <div className={styles.metaItem}>
                  <FiClock className={styles.metaIcon} />
                  <span>{movie.duration}</span>
                </div>
                <div className={styles.metaItem}>
                  <FiCalendar className={styles.metaIcon} />
                  <span>{movie.year}</span>
                </div>
                <div className={styles.metaItem}>
                  <span className={styles.ageRating}>{movie.age}</span>
                </div>
              </div>

              <div className={styles.genres}>
                {movie.genre.map((genre, index) => (
                  <span key={index} className={styles.genreTag}>{genre}</span>
                ))}
              </div>

              <div className={styles.actionButtons}>
                <motion.button
                  className={styles.playButton}
                  onClick={handlePlayMovie}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiPlay size={24} />
                  Watch Now
                </motion.button>
                
                <motion.button
                  className={`${styles.favoriteButton} ${isFavorite ? styles.favorited : ''}`}
                  onClick={handleToggleFavorite}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiHeart size={20} />
                  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        {/* Synopsis Section */}
        <section className={styles.synopsisSection}>
          <h2 className={styles.sectionTitle}>Synopsis</h2>
          <div className={styles.synopsisContent}>
            <p>
              {movie.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </section>

        {/* Rating Section */}
        <section className={styles.ratingSection}>
          <h2 className={styles.sectionTitle}>Rate this Movie</h2>
          <div className={styles.ratingInput}>
            <div className={styles.starRating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`${styles.star} ${star <= userRating ? styles.active : ''}`}
                  onClick={() => setUserRating(star)}
                >
                  <FiStar size={24} />
                </button>
              ))}
            </div>
            <div className={styles.ratingValue}>
              Your rating: {userRating > 0 ? `${userRating}/5` : 'Not rated'}
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className={styles.commentsSection}>
          <h2 className={styles.sectionTitle}>Comments ({comments.length})</h2>
          
          {/* Add Comment */}
          <div className={styles.addComment}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts about this movie..."
              className={styles.commentInput}
              rows={4}
            />
            <button
              onClick={handleAddComment}
              disabled={!comment.trim() || userRating === 0}
              className={styles.submitComment}
            >
              Submit Review
            </button>
          </div>

          {/* Comments List */}
          <div className={styles.commentsList}>
            {comments.map((commentItem, index) => (
              <motion.div
                key={index}
                className={styles.commentItem}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={styles.commentHeader}>
                  <div className={styles.commentRating}>
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        size={16}
                        className={i < commentItem.rating ? styles.filled : styles.empty}
                      />
                    ))}
                  </div>
                  <span className={styles.commentDate}>{commentItem.date}</span>
                </div>
                <p className={styles.commentText}>{commentItem.text}</p>
              </motion.div>
            ))}
            
            {comments.length === 0 && (
              <div className={styles.noComments}>
                No reviews yet. Be the first to share your thoughts!
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default FilmDescription;