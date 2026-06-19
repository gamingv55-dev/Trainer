import { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { fadeUp, fadeIn, staggerContainer, reveal } from '../components/motion';
import { site } from '../data/site';
import { images } from '../data/images';
import './Contact.css';

const goals = [
  'Сваляне на тегло',
  'Изграждане на мускули',
  'Подготовка за сцена',
  'Здраве и форма',
  'Друго',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', goal: '', message: '' });

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // Демо: тук се закача реален бекенд / имейл сервиз.
    setSent(true);
    setForm({ name: '', phone: '', email: '', goal: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div
        className="contact__bg"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(12,13,15,0.92), rgba(12,13,15,0.97)), url(${images.contact})` }}
        aria-hidden="true"
      />
      <div className="container contact__grid">
        <motion.div className="contact__info" variants={staggerContainer} {...reveal}>
          <motion.span className="eyebrow" variants={fadeUp}>Контакт</motion.span>
          <motion.h2 className="section-title" variants={fadeUp}>
            Готов ли си да <span className="accent">започнеш?</span>
          </motion.h2>
          <motion.p className="section-lead" variants={fadeUp}>
            Попълни формата и ще се свържа с теб за безплатна консултация.
            Започваме от твоята цел — и градим план, който работи.
          </motion.p>

          <motion.ul className="contact__list" variants={fadeUp}>
            <li>
              <span className="contact__ico"><Icon name="phone" size={18} /></span>
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <span className="contact__ico"><Icon name="mail" size={18} /></span>
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>
              <span className="contact__ico"><Icon name="instagram" size={18} /></span>
              <span>{site.instagramHandle}</span>
            </li>
            <li>
              <span className="contact__ico"><Icon name="location" size={18} /></span>
              <span>{site.location}</span>
            </li>
          </motion.ul>
        </motion.div>

        <motion.form className="contact__form" onSubmit={submit} variants={fadeIn} {...reveal}>
          {sent && (
            <div className="contact__success" role="status">
              <Icon name="check" size={18} /> Благодаря! Ще се свържа с теб скоро.
            </div>
          )}
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Име</label>
              <input id="name" name="name" value={form.name} onChange={update} required placeholder="Твоето име" />
            </div>
            <div className="field">
              <label htmlFor="phone">Телефон</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} placeholder="+359 ..." />
            </div>
          </div>

          <div className="form-row">
            <div className="field">
              <label htmlFor="email">Имейл</label>
              <input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@email.com" />
            </div>
            <div className="field">
              <label htmlFor="goal">Цел</label>
              <select id="goal" name="goal" value={form.goal} onChange={update}>
                <option value="" disabled>Избери цел</option>
                {goals.map((g) => <option key={g} value={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message">Съобщение</label>
            <textarea id="message" name="message" rows="4" value={form.message} onChange={update} placeholder="Разкажи ми накратко за себе си и целта си..." />
          </div>

          <Button type="submit" size="lg" icon="arrow-right" className="contact__submit">
            Изпрати запитване
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
