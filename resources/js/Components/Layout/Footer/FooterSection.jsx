import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

export default function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
        {title}
      </h3>
      <motion.ul
        className="mt-4 space-y-4"
        initial="hidden"
        whileInView="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {links.map((link) => (
          <motion.li
            key={link.label}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={link.href}
              className="text-base text-gray-500 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}