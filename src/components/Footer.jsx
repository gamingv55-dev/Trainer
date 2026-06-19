import Logo from './Logo';
import Icon from './Icon';
import { site, nav } from '../data/site';
import './Footer.css';

const quickLinks = nav.filter((n) =>
  ['home', 'about', 'services', 'process', 'speaker', 'contact'].includes(n.id)
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p className="footer__tagline">
            Научно базиран подход към тренировките, храненето и навиците —
            за реални и устойчиви резултати.
          </p>
          <div className="footer__socials">
            {site.socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
              >
                <Icon name={s.id} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Бързи линкове</h4>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__title">Контакти</h4>
          <ul className="footer__contacts">
            <li>
              <Icon name="phone" size={16} />
              <a href={site.phoneHref}>{site.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={site.emailHref}>{site.email}</a>
            </li>
            <li>
              <Icon name="location" size={16} />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}. Всички права запазени.</p>
        <p className="footer__credit">Изработка с фокус върху резултата.</p>
      </div>
    </footer>
  );
}
