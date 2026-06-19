import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Icon from '../components/Icon';
import { fadeUp, staggerContainer, reveal } from '../components/motion';
import { services, servicesNote } from '../data/services';
import './Services.css';

export default function Services() {
  return (
    <section id="services" className="section section--alt services">
      <div className="container">
        <SectionHeading
          eyebrow="Услуги"
          title="С какво мога да помогна"
          lead="Персонализирани решения за тренировки, хранене и прогрес, съобразени с твоите цели, начин на живот и ниво на подготовка."
          center
        />

        <motion.div className="services__grid" variants={staggerContainer} {...reveal}>
          {services.map((s) => (
            <motion.article
              key={s.id}
              className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
              variants={fadeUp}
            >
              <div className="service-card__top">
                <span className="service-card__icon">
                  <Icon name={s.icon} size={26} />
                </span>
                {s.badge && (
                  <span className="service-card__badge">
                    <Icon name="star" size={12} strokeWidth={0} fill="currentColor" />
                    {s.badge}
                  </span>
                )}
              </div>

              <h3 className="service-card__title">{s.title}</h3>
              <p className="service-card__desc">{s.description}</p>

              <a href="#contact" className="service-card__cta" aria-label={`Запитване за ${s.title}`}>
                <span>Научи повече</span>
                <Icon name="arrow-right" size={18} />
              </a>
            </motion.article>
          ))}
        </motion.div>

        <motion.div className="services__note" variants={fadeUp} {...reveal}>
          <Icon name="shield" size={18} />
          <span>{servicesNote}</span>
        </motion.div>
      </div>
    </section>
  );
}
