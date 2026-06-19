import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { site } from '../data/site';
import './Intro.css';

const LOGO = `${import.meta.env.BASE_URL}logo.png`;

// Intro: логото се появява в центъра, зарежда (fitness пръстен),
// после отлита на мястото си в навигацията, докато фонът избледнява.
export default function Intro({ onDone }) {
  const [exiting, setExiting] = useState(false);
  const [target, setTarget] = useState({ x: 0, y: 0, scale: 0.35 });
  const logoRef = useRef(null);

  useEffect(() => {
    // прескачаме анимацията при reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone();
      return;
    }

    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const startExit = setTimeout(() => {
      const navLogo = document.querySelector('.navbar .logo__img');
      const el = logoRef.current;
      if (navLogo && el) {
        const t = navLogo.getBoundingClientRect();
        const s = el.getBoundingClientRect();
        setTarget({
          x: t.left + t.width / 2 - (s.left + s.width / 2),
          y: t.top + t.height / 2 - (s.top + s.height / 2),
          scale: t.width / s.width,
        });
      }
      setExiting(true);
    }, 2100);

    const finish = setTimeout(() => {
      document.body.style.overflow = '';
      onDone();
    }, 3150);

    return () => {
      clearTimeout(startExit);
      clearTimeout(finish);
      document.body.style.overflow = '';
    };
  }, [onDone]);

  return (
    <div className="intro" aria-hidden="true">
      <motion.div
        className="intro__bg"
        initial={{ opacity: 1 }}
        animate={{ opacity: exiting ? 0 : 1 }}
        transition={{ duration: 1.05, ease: 'easeInOut' }}
      />

      <motion.div
        className="intro__stage"
        ref={logoRef}
        animate={
          exiting
            ? { x: target.x, y: target.y, scale: target.scale }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{ duration: 0.95, ease: [0.7, 0, 0.2, 1] }}
      >
        <motion.svg
          className="intro__ring"
          viewBox="0 0 120 120"
          animate={{ opacity: exiting ? 0 : 1, rotate: exiting ? 90 : 0 }}
          transition={{ duration: 0.6 }}
        >
          <circle className="intro__ring-bg" cx="60" cy="60" r="54" />
          <circle className="intro__ring-fg" cx="60" cy="60" r="54" />
        </motion.svg>

        <motion.img
          className="intro__logo"
          src={LOGO}
          alt={site.name}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />
      </motion.div>

      <motion.div
        className="intro__meta"
        animate={{ opacity: exiting ? 0 : 1, y: exiting ? 12 : 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.span
          className="intro__name"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {site.name}
        </motion.span>
        <span className="intro__bar"><span className="intro__bar-fill" /></span>
      </motion.div>
    </div>
  );
}
