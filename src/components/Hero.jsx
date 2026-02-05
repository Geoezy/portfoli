import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import heroBg from '../assets/hero_bg.png';

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const title = "GEORGE ANDREW";

    return (
        <section className={styles.hero} ref={ref}>
            <motion.div style={{ y, opacity }} className={styles.imageContainer}>
                <img src={heroBg} alt="Lando Norris Racing" className={styles.heroImage} />
                <div className={styles.gradientOverlay} />
            </motion.div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    {title.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.33, 1, 0.68, 1],
                                delay: 0.5 + index * 0.05
                            }}
                            style={{ display: "inline-block", minWidth: char === " " ? "20px" : "auto" }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    className={styles.subtitle}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    COMPUTER SCIENCE // AIML // DATA ANALYTICS
                </motion.p>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                    style={{ marginBottom: '2rem' }}
                >
                    <div className={styles.statsRow}>
                        <motion.span
                            whileHover={{ color: '#fff', scale: 1.1 }}
                            className={styles.statPill}
                        >
                            STATUS: RACING
                        </motion.span>
                        <motion.span
                            whileHover={{ color: '#fff', scale: 1.1 }}
                            className={styles.statPill}
                        >
                            EFFICIENCY: 8.06 CGPA
                        </motion.span>
                    </div>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
                        }}
                        href="#work"
                        className="btn-primary"
                        style={{ cursor: 'pointer', display: 'inline-block' }}
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
