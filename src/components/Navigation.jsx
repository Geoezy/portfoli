import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Twitter, Youtube } from 'lucide-react';
import styles from './Navigation.module.css';

const navVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.5, ease: 'easeInOut' }
  },
  exit: {
    x: '100%',
    transition: { type: 'tween', duration: 0.5, ease: 'easeInOut' }
  }
};

const Navigation = ({ isOpen, onClose }) => {
  const links = [
    { name: 'Home', path: '#home' },
    { name: 'Projects', path: '#work' },
    { name: 'About Me', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onClose();

    // Smooth scroll to element
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.closeContainer}>
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={32} />
              <span>Close</span>
            </button>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {links.map((link, index) => (
                <motion.li
                  key={link.name}
                  className={styles.navItem}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                >
                  <a
                    href={link.path}
                    className={styles.navLink}
                    onClick={(e) => handleNavClick(e, link.path)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            className={styles.socials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
          >
            <button
              onClick={onClose}
              className={styles.exitMenuBtn}
              style={{
                marginTop: '2rem',
                background: 'none',
                border: '1px solid rgba(255,255,255,0.3)',
                padding: '1rem 3rem',
                color: '#fff',
                fontFamily: 'var(--font-primary)',
                fontSize: '1.2rem',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'all 0.3s'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#DFFF00';
                e.target.style.color = '#DFFF00';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                e.target.style.color = '#fff';
              }}
            >
              EXIT MENU
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
