import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const skillCategories = [
    {
        title: "Programming",
        skills: ["Python", "SQL", "Java"]
    },
    {
        title: "Data Analytics",
        skills: ["Pandas", "NumPy", "Data Visualization"]
    },
    {
        title: "Databases",
        skills: ["MySQL"]
    },
    {
        title: "Tools",
        skills: ["Excel", "PowerBI", "Tableau", "VSCode"]
    }
];

const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className={styles.title}>TELEMETRY</h1>
                <p className={styles.subtitle}>TECHNICAL ARSENAL</p>
            </motion.div>

            <div className={styles.grid}>
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className={styles.categoryCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ borderColor: '#DFFF00', scale: 1.02 }}
                    >
                        <h2 className={styles.categoryTitle}>{category.title}</h2>
                        <div className={styles.skillList}>
                            {category.skills.map((skill, idx) => (
                                <span key={idx} className={styles.skillItem}>{skill}</span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
