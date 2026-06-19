import { useState } from 'react';
import { site } from '../data/site';
import './Logo.css';

// Логото се очаква в public/ като logo.png (или logo.webp).
// Ако липсва, се показва текстовият монограм с инициалите.
const B = import.meta.env.BASE_URL;
const LOGO_SOURCES = [`${B}logo.png`, `${B}logo.webp`];

export default function Logo({ onClick }) {
  const [srcIndex, setSrcIndex] = useState(0);
  const hasImage = srcIndex < LOGO_SOURCES.length;

  return (
    <a href="#home" className="logo" onClick={onClick} aria-label={`${site.name} — начало`}>
      {hasImage ? (
        <img
          className="logo__img"
          src={LOGO_SOURCES[srcIndex]}
          alt={`${site.name} лого`}
          onError={() => setSrcIndex((i) => i + 1)}
        />
      ) : (
        <span className="logo__mark">{site.initials}</span>
      )}
      <span className="logo__text">
        <span className="logo__name">{site.name}</span>
        <span className="logo__role">{site.role}</span>
      </span>
    </a>
  );
}
