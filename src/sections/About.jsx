import { motion } from 'framer-motion';
import Icon from '../components/Icon';
import { fadeUp, fadeIn, staggerContainer, reveal } from '../components/motion';
import { aboutBullets } from '../data/process';
import { images } from '../data/images';
import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div className="about__media" variants={fadeIn} {...reveal}>
          <div className="about__img-wrap">
            <img src={images.about} alt="Георги Лабабиди — фитнес треньор" />
          </div>
          <div className="about__badge">
            <span className="about__badge-value">10×</span>
            <span className="about__badge-label">шампион</span>
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          variants={staggerContainer}
          {...reveal}
        >
          <motion.span className="eyebrow" variants={fadeUp}>За мен</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Наука, опит и <span className="accent">личен подход</span>
          </motion.h2>

          <motion.p className="about__text" variants={fadeUp}>
            Казвам се Георги Лабабиди — сертифициран треньор и специалист по
            хранене с дългогодишен международен опит в сферата на фитнеса,
            спортната подготовка и физическата трансформация. През годините
            съм работил с хора от различни държави и продължавам да консултирам
            клиенти по целия свят — присъствено и онлайн.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp}>
            Сред клиентите ми са както напълно начинаещи, така и състезатели и
            професионални атлети. Работя успешно и с хора със здравословни или
            метаболитни предизвикателства, като фокусът ми винаги е устойчив
            резултат чрез научен подход и индивидуално отношение.
          </motion.p>
          <motion.p className="about__text" variants={fadeUp}>
            Като състезател съм <span className="accent">10-кратен шампион и
            двукратен вицешампион</span> в три различни категории — бодибилдинг,
            класически културизъм и мъжка физика. Опитът на сцената, съчетан с
            десетки трансформации, ми позволява да предавам доказани методи,
            проверени на най-високо ниво.
          </motion.p>

          <motion.ul className="about__bullets" variants={fadeUp}>
            {aboutBullets.map((b) => (
              <li key={b}>
                <span className="about__check"><Icon name="check" size={15} /></span>
                {b}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
