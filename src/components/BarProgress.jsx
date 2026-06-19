import { useEffect, useState } from 'react';
import './BarProgress.css';

const W = 280;
const DISC_W = 14, DISC_H = 18, DISC_Y = 1;
const COLLAR_W = 8, COLLAR_H = 10, COLLAR_Y = 5;
const BAR_H = 6, BAR_Y = 7;
const BAR_X = DISC_W + COLLAR_W;
const BAR_W = W - 2 * (DISC_W + COLLAR_W);

function Barbell({ className }) {
  return (
    <g className={className}>
      <rect x={0} y={DISC_Y} width={DISC_W} height={DISC_H} rx={3} />
      <rect x={DISC_W} y={COLLAR_Y} width={COLLAR_W} height={COLLAR_H} rx={2} />
      <rect x={BAR_X} y={BAR_Y} width={BAR_W} height={BAR_H} rx={3} />
      <rect x={W - DISC_W - COLLAR_W} y={COLLAR_Y} width={COLLAR_W} height={COLLAR_H} rx={2} />
      <rect x={W - DISC_W} y={DISC_Y} width={DISC_W} height={DISC_H} rx={3} />
    </g>
  );
}

export default function BarProgress() {
  const [pct, setPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? scrollY / max : 0);
      setVisible(scrollY > 100);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const clipW = pct * W;

  return (
    <div className={`bar-progress${visible ? ' is-visible' : ''}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} 20`} className="bar-progress__svg">
        <defs>
          <clipPath id="bp-fill-clip">
            <rect x={0} y={0} width={clipW} height={20} />
          </clipPath>
        </defs>
        <Barbell className="bar-progress__track" />
        <Barbell className="bar-progress__fill" />
        {/* clipped gold layer on top */}
        <g clipPath="url(#bp-fill-clip)">
          <Barbell className="bar-progress__gold" />
        </g>
      </svg>
    </div>
  );
}
