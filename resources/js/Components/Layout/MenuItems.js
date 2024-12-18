// menuItems.js

export const solutionsLinks = [
    { name: 'Paiements', routeName: 'null', type: 'link' },
    { name: 'Transport & Réservation', routeName: 'null', type: 'link' },
    { name: 'Commande & Livraison', routeName: 'null', type: 'link' },
    { name: 'Transactions Financière', routeName: 'null', type: 'link' },
  ];
  
  // Exemple : un bouton pour déclencher un modal (par exemple pour payer)
  export const partenariatLinks = [
    { name: 'Chauffeur', routeName: 'null', type: 'link' },
    { name: 'Livreur', routeName: 'null', type: 'link' },
    { name: 'Marchand & Paiements', routeName: 'null', type: 'link' },
    // { name: 'Marchand & Livraison', routeName: 'partenariat.marchand.livraison', type: 'link' },
    // Supposons que celui-ci ouvre un offcanvas au lieu d'un lien
    { name: 'Marchand & Livraison', routeName: 'null', type: 'action', actionKey: 'openOffcanvasLivraison' },
  ];
  
  export const mainMenuItems = [
    { label: 'Accueil', routeName: 'null', type: 'link' },
    {
      label: 'Nos Services',
      routeName: 'null',
      submenu: solutionsLinks,
      key: 'solutions',
      type: 'link',
    },
    { label: 'Comment ça marche ?', routeName: 'null', type: 'link' },
    {
      label: 'Partenariat',
      routeName: 'null',
      submenu: partenariatLinks,
      key: 'partenariat',
      type: 'link',
    },
    { label: 'À propos de nous', routeName: 'null', type: 'link' },
    // Un bouton pour ouvrir l'offcanvas Contact
    { label: 'Contact', routeName: 'null', type: 'action', actionKey: 'openContact' },
    { label: 'Centre d\'aide', routeName: 'null', type: 'link' },
  ];
  