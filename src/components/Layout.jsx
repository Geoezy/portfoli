import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag } from 'lucide-react';
import Navigation from './Navigation';
import styles from './Layout.module.css';

const Layout = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    // Determine if we are on a page that needs a transparent header or specific styling
    const isHome = location.pathname === '/';

    return (
        <div className={styles.container}>
            {/* Header */}
            <header className={styles.header}>
                <div className={styles.logo}>
                    <Link to="/">
                        <span className={styles.logoText}>GAJ<span className={styles.logoAccent}>4</span></span>
                    </Link>
                </div>

                <div className={styles.actions}>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setIsNavOpen(true)}
                    >
                        <Menu size={24} />
                        <span className={styles.btnText}>Menu</span>
                    </button>
                </div>
            </header>

            {/* Navigation Overlay */}
            <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

            {/* Main Content */}
            <main className={styles.main}>
                <Outlet />
            </main>

            {/* Simple Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    {/* Copyright removed as per request */}
                </div>
            </footer>
        </div>
    );
};

export default Layout;
