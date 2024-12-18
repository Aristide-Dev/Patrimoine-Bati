import { Link, usePage } from '@inertiajs/react';
import { X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useCallback, useState } from 'react';
import { mainMenuItems } from './MenuItems';


export default function MobileMenu({ isOpen, onClose, setContactOpen, setDownloadOpen }) {
  const { url } = usePage(); // pour extraire l'URL ou bien route().current() en direct si Ziggy est dispo
  const closeButtonRef = useRef(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu((prev) => (prev === menuName ? null : menuName));
  };

  // Fonction utilitaire pour déterminer si une route est active.
  const isActiveRoute = (routeName) => route().current(routeName);


  // Classes de base pour les liens
  const baseLinkClasses = "block px-3 py-2 rounded-md text-base font-medium transition-colors";
  const baseSubLinkClasses = "block px-3 py-2 rounded-md text-sm font-medium transition-colors";
  
  // Classes pour le lien actif (par exemple fond primaire, texte blanc)
  const activeClasses = "bg-primary text-white hover:text-white";
  const inactiveClasses = "text-foreground hover:text-primary hover:bg-accent";

  return (
    <div
      className="fixed inset-0 z-40 flex lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-heading"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Menu panel */}
      <div className="relative w-full max-w-xs bg-background h-screen border-r shadow-xl flex flex-col">
        {/* Bouton de fermeture */}
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <button
            ref={closeButtonRef}
            type="button"
            className="flex items-center justify-center h-10 w-10 rounded-full focus:outline-none text-red-500 focus:ring-2 focus:ring-inset focus:ring-red-500 bg-white shadow"
            onClick={onClose}
            aria-label="Fermer le menu"
          >
            <X className="h-6 w-6 text-red-500" />
          </button>
        </div>

        {/* Logo et Titre (invisible) */}
        <div className="flex items-center px-4 py-5">
          <img
            className="h-8 w-auto"
            src="/images/logo/brandingGn.png"
            alt="Lassiri Branding"
          />
          <img
            className="h-8 w-auto ml-2"
            src="/images/logo/logo-lassiri.png"
            alt="Lassiri Logo"
          />
        </div>
        
        <h2 id="mobile-menu-heading" className="sr-only">Menu mobile</h2>

        {/* Conteneur scrollable */}
        <div className="flex-1 overflow-y-auto h-full pb-4">
        <nav className="px-2 space-y-1">
            {mainMenuItems.map(item => {
              const active = item.routeName ? isActiveRoute(item.routeName) : false;

              if (item.submenu) {
                // Afficher sous-menu
                return (
                  <div key={item.key}>
                    <button
                      type="button"
                      onClick={() => toggleSubmenu(item.key)}
                      className={`${baseLinkClasses} ${active ? activeClasses : inactiveClasses} w-full flex items-center justify-between focus:outline-none`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`h-5 w-5 transition-transform ${openSubmenu === item.key ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenu === item.key && (
                      <div className="ml-6 mt-1 space-y-1">
                        {item.submenu.map(subItem => {
                          const subActive = subItem.routeName ? isActiveRoute(subItem.routeName) : false;
                          if (subItem.type === 'link') {
                            return (
                              <Link
                                key={subItem.routeName || subItem.name}
                                href="#"
                                // href={route(subItem.routeName)}
                                className={`${baseSubLinkClasses} ${subActive ? activeClasses : inactiveClasses}`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          } else if (subItem.type === 'action') {
                            return (
                              <button
                                key={subItem.name}
                                onClick={() => {
                                  if (subItem.actionKey === 'openOffcanvasLivraison') {
                                    setOffcanvasLivraisonOpen(true);
                                    onClose();
                                  }
                                }}
                                className={`${baseSubLinkClasses} ${inactiveClasses} text-left w-full`}
                              >
                                {subItem.name}
                              </button>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                );
              } else {
                // Pas de sous-menu
                if (item.type === 'link' && item.routeName !== 'null') {
                  return (
                    <Link
                      key={item.routeName || item.label}
                      href="#"
                      // href={route(item.routeName)}
                      className={`${baseLinkClasses} ${active ? activeClasses : inactiveClasses}`}
                    >
                      {item.label}
                    </Link>
                  );
                } else if (item.type === 'action') {
                  return (
                    <button
                      key={item.label}
                      onClick={() => {
                        if (item.actionKey === 'openContact') {
                          setContactOpen(true);
                          onClose();
                        }
                      }}
                      className={`${baseLinkClasses} ${inactiveClasses} text-left w-full`}
                    >
                      {item.label}
                    </button>
                  );
                }
              }
            })}
          </nav>
        </div>

        {/* CTA Buttons */}
        <div className="flex-shrink-0 border-t border-border p-4 flex justify-end">
          <Link
            href="#"
            className="btn-primary flex-1"
          >
            Télécharger App
          </Link>
        </div>
      </div>
    </div>
  );
}
