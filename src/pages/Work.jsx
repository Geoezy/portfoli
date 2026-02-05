import React from 'react';
import { motion } from 'framer-motion';
import styles from './Work.module.css';

const races = [
    { id: 1, year: '2026', title: 'F1 Race Dashboard', location: 'Python • Streamlit' },
    { id: 2, year: '2025', title: 'Melanoma AI', location: 'TensorFlow • CNN' },
    { id: 3, year: '2025', title: 'N-Queens Visualizer', location: 'React • Algorithms' },
];

const Work = () => {
    return (
        <div className={styles.container} id="work">
            <div className={styles.header}>
                <h1 className={styles.title}>PROJECTS</h1>
                <p className={styles.subtitle}>CAREER HIGHLIGHTS & STATS</p>
            </div>

            <div className={styles.grid}>
                {races.map((race, index) => (
                    <motion.div
                        key={race.id}
                        className={styles.card}
                        whileHover={{ scale: 1.02, borderColor: '#DFFF00' }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className={styles.cardContent}>
                            <span className={styles.year}>{race.year}</span>
                            <h2 className={styles.cardTitle}>{race.title}</h2>
                            <span className={styles.location}>{race.location}</span>
                        </div>
                        <div className={styles.cardOverlay} />
                        <motion.div
                            className={styles.hoverGlow}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 0.2 }}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
