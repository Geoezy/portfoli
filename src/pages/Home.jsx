import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import styles from './Home.module.css';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className={styles.container}>
            {/* Progress Bar representing the track */}
            <motion.div
                className={styles.progressBar}
                style={{ scaleX }}
            />

            {/* F1 Car Animation */}
            <motion.div
                className={styles.carContainer}
                style={{ left: useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "90%"]), { stiffness: 100, damping: 30 }) }}
            >
                <img src="/src/assets/f1_car.svg" alt="F1 Car" className={styles.f1Car} />
            </motion.div>

            <div id="home">
                <Hero />
            </div>

            <div id="about">
                <About />
            </div>

            <div id="skills">
                <Skills />
            </div>

            <div id="work">
                <Work />
            </div>

            <div id="contact">
                <Contact />
            </div>
        </div>
    );
};

export default Home;
