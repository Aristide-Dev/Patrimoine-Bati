import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function CompanyInfo() {
  return (
    <motion.div
      className="space-y-8"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
    >
    <div className="flex gap-0 items-center">
    <img
      className="h-8"
      src="/images/logo/brandingGn.png"
      alt="Logo Lassiri"
      loading="lazy"
    />
    <img
      className="h-16"
      src="/images/logo/logo-mamri-02.png"
      alt="Logo Lassiri"
      loading="lazy"
    />
    </div>
      <p className="text-gray-500 text-base max-w-md">
        Solutions innovantes pour votre business : transport, livraison, et paiement.
        Simplifiez vos opérations avec notre plateforme tout-en-un.
      </p>
      <SocialLinks />
    </motion.div>
  );
}