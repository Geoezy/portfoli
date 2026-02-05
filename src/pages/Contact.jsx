import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.content}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className={styles.title}>GET IN TOUCH</h1>
                <p className={styles.text}>
                    For partnerships, media enquiries, and sponsorship opportunities.
                </p>

                <a href="mailto:geogaj10@gmail.com" className={styles.emailLink}>
                    geogaj10@gmail.com
                </a>

                <div className={styles.socials} style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'center' }}>
                    <a href="https://github.com/Geoezy" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase' }}>GitHub</a>
                    <a href="https://linkedin.com/in/george-andrew-joseph-18134434a/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase' }}>LinkedIn</a>
                    <a href="https://leetcode.com/u/wGHviR5aL8/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.2rem', textTransform: 'uppercase' }}>LeetCode</a>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
