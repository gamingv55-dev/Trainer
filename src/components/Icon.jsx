// Единен SVG icon set (24x24, stroke-based). Използвай <Icon name="..." />
const paths = {
  dumbbell: <><path d="M6.5 6.5l11 11" /><path d="M3 9l3-3 2 2-3 3z" /><path d="M21 15l-3 3-2-2 3-3z" /><path d="M5.5 4.5L4 6m14 12l-1.5 1.5M2.5 11.5L4 13m16-2l1.5 1.5" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M5 21c0-3.87 3.13-7 7-7s7 3.13 7 7" /></>,
  users: <><circle cx="9" cy="8.5" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0" /><path d="M16 5.6a3 3 0 0 1 0 5.8M17 20a5.5 5.5 0 0 0-2.6-4.7" /></>,
  laptop: <><rect x="3.5" y="5" width="17" height="11" rx="1.6" /><path d="M2 19.5h20" /><path d="M9.5 10.5h5M10 9.6v1.8M14 9.6v1.8" /></>,
  shield: <><path d="M12 3l7 3v5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  meal: <><path d="M5 3v8a3 3 0 0 0 6 0V3M8 3v18" /><path d="M19 3c-1.7 0-3 2-3 5s1 4 1 4v9" /></>,
  pulse: <><path d="M3 12h4l2 6 4-14 2 8h6" /></>,
  calendar: <><rect x="3" y="4.5" width="18" height="16" rx="2" /><path d="M3 9h18M8 2.5v4M16 2.5v4" /></>,
  check: <><path d="M20 6L9 17l-5-5" /></>,
  'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  'arrow-left': <><path d="M19 12H5M11 18l-6-6 6-6" /></>,
  'arrow-up-right': <><path d="M7 17L17 7M8 7h9v9" /></>,
  star: <><path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6L12 16.8 6.7 19.6l1.1-6L3.4 9.4l6-.8z" /></>,
  phone: <><path d="M5 4h3l2 5-2 1.5a12 12 0 0 0 5.5 5.5L19 14l5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  location: <><path d="M12 21s-7-6.3-7-11a7 7 0 0 1 14 0c0 4.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M6 6l12 12M18 6L6 18" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  minus: <><path d="M5 12h14" /></>,
  chat: <><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12z" /></>,
  clipboard: <><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3h6v1M9 11h6M9 15h4" /></>,
  chart: <><path d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-7" /></>,
  trophy: <><path d="M7 4h10v4a5 5 0 0 1-10 0z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 17h6M10 14h4v3h-4zM12 21h0M9 21h6" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /></>,
  flame: <><path d="M12 3s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 1-3s0 2 1.5 2.5C10 12 9 8 12 3z" /></>,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" /></>,
  facebook: <><path d="M15 8h-2a2 2 0 0 0-2 2v12M8 13h6" /></>,
  youtube: <><rect x="3" y="6" width="18" height="12" rx="4" /><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" /></>,
  linkedin: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 11v6" /></>,
};

export default function Icon({ name, size = 24, className = '', strokeWidth = 1.6, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {paths[name] || null}
    </svg>
  );
}
