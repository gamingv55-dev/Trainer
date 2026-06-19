import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import Button from './Button';
import Icon from './Icon';
import { nav, site } from '../data/site';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <Logo onClick={close} />

        <nav className="navbar__links" aria-label="Основна навигация">
          {nav.map((item) => (
            <a key={item.id} href={item.href} className="navbar__link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <Button href="#contact" size="sm" className="navbar__cta">
            {site.ctaLabel}
          </Button>
          <button
            className="navbar__burger"
            aria-label="Отвори меню"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} size={26} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <motion.nav
              className="navbar__mobile"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Мобилна навигация"
            >
              {nav.map((item) => (
                <a key={item.id} href={item.href} className="navbar__mobile-link" onClick={close}>
                  {item.label}
                </a>
              ))}
              <Button href="#contact" className="navbar__mobile-cta" onClick={close}>
                {site.ctaLabel}
              </Button>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
