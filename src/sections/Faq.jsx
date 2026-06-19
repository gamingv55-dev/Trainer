import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { faq } from '../data/faq';
import './Faq.css';

export default function Faq() {
  const [open, setOpen] = useState(faq[0].id);

  return (
    <section id="faq" className="section section--alt faq">
      <div className="container faq__wrap">
        <SectionHeading
          eyebrow="Въпроси"
          title='Често задавани <span class="accent">въпроси</span>'
          lead="Ако не намираш отговор тук, пиши ми — ще ти отговоря лично."
          center
        />

        <motion.div className="faq__list" variants={staggerContainer} {...reveal}>
          {faq.map((item) => {
            const isOpen = open === item.id;
            return (
              <motion.div
                key={item.id}
                className={`faq-item ${isOpen ? 'is-open' : ''}`}
                variants={fadeUp}
              >
                <button
                  className="faq-item__q"
                  onClick={() => setOpen(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-item__icon">
                    <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      className="faq-item__a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
