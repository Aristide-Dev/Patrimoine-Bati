// ContactOffcanvas.jsx
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ContactOffcanvas({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (

                <motion.div
                    className="fixed inset-0 z-50 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                 >
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm cursor-pointer min-h-screen h-full"
                        onClick={onClose}
                    />

                    <motion.div
                        className="relative w-80 bg-white h-screen shadow-xl p-6 flex flex-col overflow-y-auto"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                     >
                        {/* Bouton fermeture */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Fermer le panneau de contact"
                        >
                            <X className="w-5 h-5 text-gray-600" />
                        </motion.button>

                        {/* Contenu du offcanvas */}
                        <div className="flex flex-col h-full">
                            <div className="mt-10">
                                <h2 className="text-2xl font-bold text-gray-900">Contactez-nous</h2>
                                <p className="text-gray-700 mt-3">Pour toute question ou demande d'information, n'hésitez pas à nous contacter :</p>
                            </div>

                            <div className="mt-6 space-y-2">
                                <p className="text-gray-800"><span className="font-medium text-primary">Email :</span> contact@lassiri.com</p>
                                <p className="text-gray-800"><span className="font-medium text-primary">Téléphone :</span> +224 123 456 789</p>
                                <p className="text-gray-800"><span className="font-medium text-primary">Adresse :</span> Conakry, Guinée</p>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Réseaux sociaux</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-primary hover:underline transition-colors">
                                            Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary hover:underline transition-colors">
                                            Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-primary hover:underline transition-colors">
                                            Twitter
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-auto text-sm text-gray-500 pt-6">
                                <p>Merci de votre visite. Nous restons à votre disposition pour plus d'informations.</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
