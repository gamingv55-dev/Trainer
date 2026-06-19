import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { fadeUp, staggerContainer } from '../components/motion';
import { heroStats } from '../data/site';
import './Hero.css';

// Снимката на Георги (с премахнат фон) се очаква в public/ като
// georgi-hero.webp или georgi-hero.png. Пробваме и двата формата;
// ако липсват, hero-ът пада грациозно към атмосферен фон + текст.
const B = import.meta.env.BASE_URL;
const PORTRAIT_SOURCES = [`${B}georgi-hero.webp`, `${B}georgi-hero.png`];

export default function Hero() {
  const [srcIndex, setSrcIndex] = useState(0);
  const hasPortrait = srcIndex < PORTRAIT_SOURCES.length;

  return (
    <section id="home" className={`hero ${hasPortrait ? 'has-portrait' : ''}`}>
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__grid-lines" aria-hidden="true" />

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Личен треньор &amp; нутриционист
          </motion.span>

          <motion.h1 className="hero__title" variants={fadeUp}>
            Тренирай умно.
            <br />
            <span className="accent">Живей силно.</span>
          </motion.h1>

          <motion.p className="hero__lead" variants={fadeUp}>
            Персонални програми за тренировки и хранене, съобразени с твоите цели —
            присъствено във Варна и онлайн по целия свят. Доказани методи от
            10-кратен шампион на сцена.
          </motion.p>

          <motion.div className="hero__cta" variants={fadeUp}>
            <Button href="#contact" size="lg" icon="arrow-right">
              Запази безплатна консултация
            </Button>
            <Button href="#services" variant="outline" size="lg">
              Виж услугите
            </Button>
          </motion.div>

          <motion.ul className="hero__stats" variants={fadeUp}>
            {heroStats.map((s) => (
              <li key={s.label} className="hero__stat">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <span className="hero__glow" aria-hidden="true" />
          {hasPortrait && (
            <img
              className="hero__photo"
              src={PORTRAIT_SOURCES[srcIndex]}
              alt="Георги Лабабиди — личен треньор и състезател"
              onError={() => setSrcIndex((i) => i + 1)}
            />
          )}
        </motion.div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Превърти надолу">
        <span />
      </a>
    </section>
  );
}
