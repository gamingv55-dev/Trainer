import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { achievements } from '../data/certificates';
import './Certificates.css';

export default function Certificates() {
  return (
    <section id="achievements" className="section section--alt certificates">
      <div className="container">
        <SectionHeading
          eyebrow="Постижения"
          title='Титли и <span class="accent">квалификации</span>'
          lead="10-кратен шампион и двукратен вицешампион — резултати, проверени на най-високо състезателно ниво."
          center
        />

        <motion.div className="cert__grid" variants={staggerContainer} {...reveal}>
          {achievements.map((c) => (
            <motion.div key={c.id} className="cert-card" variants={fadeUp}>
              <span className="cert-card__icon"><Icon name="trophy" size={22} /></span>
              {c.metric && <span className="cert-card__metric">{c.metric}</span>}
              <span className="cert-card__name">{c.name}</span>
              <span className="cert-card__sub">{c.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
