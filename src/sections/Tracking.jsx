import { motion } from 'framer-motion';
import Icon from '../components/Icon';
import { fadeUp, fadeIn, staggerContainer, reveal } from '../components/motion';
import { trackingFeatures } from '../data/process';
import { images } from '../data/images';
import './Tracking.css';

const bars = [40, 62, 50, 78, 58, 88, 70];

export default function Tracking() {
  return (
    <section id="tracking" className="section section--alt tracking">
      <div className="container tracking__grid">
        <motion.div className="tracking__content" variants={staggerContainer} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>Проследяване и подкрепа</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Виждаш прогреса си <span className="accent">в реално време</span>
          </motion.h2>
          <motion.p className="section-lead" variants={fadeUp}>
            Следи тренировки, хранене и навици на едно място. Седмичните
            check-in-и и обратната връзка държат плана ти винаги точен.
          </motion.p>

          <motion.ul className="tracking__features" variants={fadeUp}>
            {trackingFeatures.map((f) => (
              <li key={f}>
                <span className="tracking__check"><Icon name="check" size={15} /></span>
                {f}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="tracking__dash" variants={fadeIn} {...reveal}>
          {/* Progress card */}
          <div className="dash-card dash-card--progress">
            <div className="dash-card__head">
              <span>Прогрес</span>
              <Icon name="chart" size={16} />
            </div>
            <strong className="dash-card__big">-6.2 кг</strong>
            <span className="dash-card__sub">тази сесия</span>
            <svg className="dash-line" viewBox="0 0 200 70" preserveAspectRatio="none" aria-hidden="true">
              <polyline points="0,55 30,48 60,52 90,38 120,40 150,24 180,20 200,14"
                fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Workouts card */}
          <div className="dash-card dash-card--workouts">
            <div className="dash-card__head">
              <span>Тренировки</span>
              <Icon name="dumbbell" size={16} />
            </div>
            <strong className="dash-card__big">5</strong>
            <span className="dash-card__sub">тази седмица</span>
            <div className="dash-bars" aria-hidden="true">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Nutrition card */}
          <div className="dash-card dash-card--nutrition">
            <div className="dash-card__head">
              <span>Хранене</span>
              <Icon name="meal" size={16} />
            </div>
            <div className="dash-ring">
              <svg viewBox="0 0 36 36" aria-hidden="true">
                <circle className="ring-bg" cx="18" cy="18" r="15.9" />
                <circle className="ring-fill" cx="18" cy="18" r="15.9" />
              </svg>
              <div className="dash-ring__label">
                <strong>1 842</strong>
                <span>/ 2 100 ккал</span>
              </div>
            </div>
          </div>

          {/* Check-in card */}
          <div className="dash-card dash-card--checkin">
            <img src={images.dashboardAvatar} alt="" className="dash-card__avatar" loading="lazy" />
            <div>
              <span className="dash-card__sub">Седмичен check-in</span>
              <strong className="dash-card__name">Готов за нова седмица</strong>
            </div>
            <span className="dash-card__badge">Запиши</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
