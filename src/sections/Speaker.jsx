import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { speaker, events } from '../data/events';
import { images } from '../data/images';
import './Speaker.css';

export default function Speaker() {
  return (
    <section id="speaker" className="section speaker">
      <div className="container">
        <SectionHeading
          eyebrow="Лектор / Speaker"
          title='Покани ме за <span class="accent">твоето събитие</span>'
          lead={speaker.lead}
        />

        <motion.div className="speaker__topics" variants={staggerContainer} {...reveal}>
          {speaker.topics.map((t) => (
            <motion.span key={t} className="speaker__chip" variants={fadeUp}>{t}</motion.span>
          ))}
        </motion.div>

        <motion.div className="speaker__grid" variants={staggerContainer} {...reveal}>
          {events.map((e) => (
            <motion.article key={e.id} className="event-card" variants={fadeUp}>
              <span className="event-card__tag">{e.tag}</span>
              <h3 className="event-card__title">{e.title}</h3>
              <div className="event-card__meta">
                <span><Icon name="calendar" size={15} /> {e.date}</span>
                <span><Icon name="location" size={15} /> {e.city}</span>
              </div>
            </motion.article>
          ))}

          <motion.article
            className="event-card event-card--cta"
            variants={fadeUp}
            style={{ backgroundImage: `linear-gradient(180deg, rgba(12,13,15,0.55), rgba(12,13,15,0.9)), url(${images.speaker})` }}
          >
            <h3 className="event-card__title">Покани ме за твоето събитие</h3>
            <p>Свържи се с мен за дати и теми.</p>
            <Button href="#contact" size="sm" icon="arrow-right">Свържи се</Button>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
