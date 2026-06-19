import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { processSteps } from '../data/process';
import './Process.css';

export default function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <SectionHeading
          eyebrow="Как работим"
          title='Ясен път до <span class="accent">резултата</span>'
          lead="Без хаос и догадки — следваме доказан процес стъпка по стъпка."
          center
        />

        <motion.ol className="process__track" variants={staggerContainer} {...reveal}>
          <div className="process__line" aria-hidden="true" />
          {processSteps.map((p) => (
            <motion.li key={p.id} className="process-step" variants={fadeUp}>
              <span className="process-step__num">{p.step}</span>
              <div className="process-step__body">
                <h3 className="process-step__title">{p.title}</h3>
                <p className="process-step__text">{p.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
