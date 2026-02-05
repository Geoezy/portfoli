import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import styles from './About.module.css';
import aboutImg from '../assets/about_portrait.png';

const Counter = ({ value, duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: duration * 1000 });

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        } else {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                // Check if it's a float or int
                if (value % 1 !== 0) {
                    ref.current.textContent = latest.toFixed(2);
                } else {
                    ref.current.textContent = Math.round(latest);
                }
            }
        });
    }, [springValue, value]);

    return <span ref={ref}>{value}</span>;
};

const About = () => {
    return (
        <div className={styles.container} id="about">
            <div className={styles.grid}>
                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                >
                    <img src={aboutImg} alt="Lando Norris Profile" className={styles.image} />
                </motion.div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className={styles.label}>TECHNICAL BENCHMARKS</span>
                    <h1 className={styles.title}>THE DATA ARCHITECT.<br />THE ANALYST.<br />THE DEVELOPER.</h1>

                    <p className={styles.bio}>
                        Currently a 3rd Year B.Tech student specializing in Data Architecture, SQL, and Python.
                        Merging technical expertise with race-like efficiency to build high-performance solutions.
                    </p>

                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <Counter value={3} />
                            </span>
                            <span className={styles.statLabel}>Year</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>IND</span>
                            <span className={styles.statLabel}>Nationality</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>
                                <Counter value={8.06} />
                            </span>
                            <span className={styles.statLabel}>CGPA</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
