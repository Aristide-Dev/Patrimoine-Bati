import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'Twitter', href: '#', icon: Twitter },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          className="text-gray-400 hover:text-primary"
          whileHover={{ scale: 1.1, y: -2 }}
          transition={{ type: 'spring', stiffness: 300 }}
          aria-label={`Visitez notre page ${social.name}`}
        >
          <social.icon className="h-6 w-6" />
        </motion.a>
      ))}
    </div>
  );
}