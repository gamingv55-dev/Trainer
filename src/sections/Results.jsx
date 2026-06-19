import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { results, bodybuildingResults, testimonials } from '../data/results';
import './Results.css';

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} от 5`}>
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="star" size={16} className="stars__icon" strokeWidth={0} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Results() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  const go = (dir) =>
    setActive((p) => (p + dir + testimonials.length) % testimonials.length);

  return (
    <section id="results" className="section results">
      <div className="container">
        <SectionHeading
          eyebrow="Резултати"
          title='Трансформации, които <span class="accent">говорят</span>'
          lead="Реални хора, реален прогрес. Ето какво се случва при последователна работа и ясен план."
          center
        />

        <motion.div className="results__grid" variants={staggerContainer} {...reveal}>
          {results.map((r) =>
            r.empty ? (
              <motion.article
                key={r.id}
                className="result-card result-card--empty"
                variants={fadeUp}
                aria-hidden="true"
              >
                <span className="result-card__placeholder">
                  <Icon name="dumbbell" size={30} />
                </span>
              </motion.article>
            ) : (
              <motion.article key={r.id} className="result-card" variants={fadeUp}>
                <div className="result-card__img">
                  <img src={r.image} alt={r.name} />
                </div>
                <div className="result-card__body">
                  <h3 className="result-card__title">{r.name}</h3>
                  <span className="result-card__label">{r.label}</span>
                </div>
              </motion.article>
            )
          )}
        </motion.div>

        {/* Testimonial slider */}
        <motion.div className="testimonial" variants={fadeUp} {...reveal}>
          <Icon name="chat" size={40} className="testimonial__quote" />
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={t.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.35 }}
            >
              <p className="testimonial__text">“{t.quote}”</p>
              <Stars count={t.rating} />
              <footer className="testimonial__author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="testimonial__controls">
            <button onClick={() => go(-1)} aria-label="Предишен отзив"><Icon name="arrow-left" size={18} /></button>
            <div className="testimonial__dots">
              {testimonials.map((item, i) => (
                <button
                  key={item.id}
                  className={i === active ? 'is-active' : ''}
                  onClick={() => setActive(i)}
                  aria-label={`Отзив ${i + 1}`}
                />
              ))}
            </div>
            <button onClick={() => go(1)} aria-label="Следващ отзив"><Icon name="arrow-right" size={18} /></button>
          </div>
        </motion.div>

        {/* Bodybuilding outcomes */}
        <div className="bb">
          <motion.div className="bb__head" variants={fadeUp} {...reveal}>
            <span className="eyebrow">{bodybuildingResults.eyebrow}</span>
            <h3 className="bb__title">{bodybuildingResults.title}</h3>
            <p className="section-lead">{bodybuildingResults.lead}</p>
          </motion.div>

          <motion.div className="bb__grid" variants={staggerContainer} {...reveal}>
            {bodybuildingResults.outcomes.map((o, i) => (
              <motion.article key={o.id} className="bb-card" variants={fadeUp}>
                <span className="bb-card__num">0{i + 1}</span>
                <h4 className="bb-card__title">{o.title}</h4>
                <p className="bb-card__text">{o.text}</p>
              </motion.article>
            ))}
          </motion.div>

          <motion.p className="bb__note" variants={fadeUp} {...reveal}>
            <Icon name="target" size={16} />
            <span>{bodybuildingResults.note}</span>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
