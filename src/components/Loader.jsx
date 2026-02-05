import React from 'react';
import { motion } from 'framer-motion';
import styles from './Loader.module.css';

const containerVariants = {
    initial: { opacity: 1 },
    exit: {
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
};

const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.2 }
    }
};

const progressVariants = {
    initial: { width: 0 },
    animate: {
        width: '100%',
        transition: { duration: 1.5, ease: 'easeInOut' }
    }
};

const Loader = ({ onComplete }) => {
    return (
        <motion.div
            className={styles.loader}
            variants={containerVariants}
            initial="initial"
            exit="exit"
            onAnimationComplete={() => setTimeout(onComplete, 200)} // Small buffer
        >
            <div className={styles.content}>
                <motion.h1
                    className={styles.title}
                    variants={textVariants}
                    animate="animate"
                >
                    LOAD PORTFOLIO
                </motion.h1>

                <div className={styles.progressContainer}>
                    <motion.div
                        className={styles.progressBar}
                        variants={progressVariants}
                        initial="initial"
                        animate="animate"
                        onAnimationComplete={onComplete}
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
