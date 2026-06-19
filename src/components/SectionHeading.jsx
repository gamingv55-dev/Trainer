import { motion } from 'framer-motion';
import { fadeUp, reveal } from './motion';

export default function SectionHeading({ eyebrow, title, lead, center = false, className = '' }) {
  return (
    <motion.div
      className={`section-heading ${center ? 'text-center' : ''} ${className}`}
      variants={fadeUp}
      {...reveal}
      style={center ? { marginInline: 'auto', maxWidth: '720px' } : undefined}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
      {lead && <p className="section-lead" style={center ? { marginInline: 'auto' } : undefined}>{lead}</p>}
    </motion.div>
  );
}
