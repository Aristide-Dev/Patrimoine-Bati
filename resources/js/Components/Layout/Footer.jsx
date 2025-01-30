import { motion } from 'framer-motion';
import CompanyInfo from './Footer/CompanyInfo';
import FooterSection from './Footer/FooterSection';
import Copyright from './Footer/Copyright';

const footerSections = [
  {
    title: 'Solutions',
    links: [
      { label: 'Paiements', href: null },
      { label: 'Transport', href: null },
      { label: 'Livraison', href: null },
    ],
  },
  {
    title: 'Partenariat',
    links: [
      { label: 'Chauffeur', href: null },
      { label: 'Livreur', href: null },
      { label: 'Marchand', href: null },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Centre d\'aide', href: null },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: '#' },
      { label: 'CGU', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-gray-200" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:py-16 lg:px-8">
        <motion.div
          className="xl:grid xl:grid-cols-3 xl:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="xl:col-span-1">
            <CompanyInfo />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(0, 2).map((section) => (
                <FooterSection key={section.title} {...section} />
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerSections.slice(2).map((section) => (
                <FooterSection key={section.title} {...section} />
              ))}
            </div>
          </div>
        </motion.div>

        <Copyright />
      </div>
    </footer>
  );
}