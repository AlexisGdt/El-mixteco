# El Mixteco - Site Web du Restaurant Mexicain

Site web complet et responsive pour le restaurant mexicain El Mixteco à Paris.

## 🌮 Fonctionnalités

### Pages
- **Accueil** : Bannière hero, présentation des plats en slider, galerie du restaurant, informations de contact
- **Menu** : Menu complet avec catégories (entrées, plats, desserts, boissons), téléchargement PDF, réservation
- **À propos** : Histoire du restaurant, valeurs, présentation du chef, informations pratiques
- **Système de Design** : Page de documentation du design system (accessible via `/design-system`)

### Fonctionnalités Principales
✅ Système de réservation avec formulaire de calendrier  
✅ Téléchargement du menu en PDF  
✅ Navigation responsive avec menu mobile  
✅ Slider de plats avec react-slick  
✅ Design inspiré du thème mexicain (couleurs du drapeau)  
✅ Optimisé pour mobile, tablette et desktop  

## 🎨 Design System

### Couleurs
- **Primaire** : `#006847` (Vert du drapeau mexicain)
- **Secondaire** : `#FCD116` (Jaune doré)
- **Accent** : `#CE1126` (Rouge du drapeau mexicain)

### Typographie
Police système avec tailles définies pour h1-h4, paragraphes et labels

### Composants
- Boutons (primaire, accent, secondaire, outline, ghost)
- Cartes (Card)
- Formulaires (Input, Label, Select)
- Dialog pour les réservations
- Navigation responsive

## 🚀 Structure du Projet

```
src/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation principale
│   │   ├── Footer.tsx          # Pied de page
│   │   ├── ReservationDialog.tsx # Dialogue de réservation
│   │   └── ui/                 # Composants UI réutilisables
│   ├── pages/
│   │   ├── Home.tsx           # Page d'accueil
│   │   ├── Menu.tsx           # Page menu
│   │   ├── About.tsx          # Page à propos
│   │   └── DesignSystem.tsx   # Documentation design
│   └── App.tsx                # Composant principal
└── styles/
    ├── theme.css              # Variables de thème
    ├── tailwind.css           # Configuration Tailwind
    └── index.css              # Imports CSS
```

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints principaux:
- **Mobile** : < 640px
- **Tablette** : 640px - 1024px
- **Desktop** : > 1024px

## 🛠️ Technologies Utilisées

- **React 18** avec TypeScript
- **React Router DOM** pour la navigation
- **Tailwind CSS v4** pour le styling
- **Lucide React** pour les icônes
- **React Slick** pour les sliders
- **jsPDF** pour la génération de PDF
- **Sonner** pour les notifications toast
- **Radix UI** pour les composants accessibles

## 📦 Installation et Démarrage

Le projet est prêt à être déployé. Toutes les dépendances sont déjà installées.

### Accéder au Design System
Visitez `/design-system` pour voir la documentation complète du système de design.

## 🌐 Informations du Restaurant

**El Mixteco**  
123 Rue de la Gaîté  
75014 Paris, France

**Téléphone** : +33 1 45 67 89 01  
**Email** : contact@elmixteco.fr

**Horaires d'Ouverture**  
- Lundi - Vendredi : 12h00 - 14h30, 19h00 - 23h00
- Samedi : 12h00 - 23h00
- Dimanche : 12h00 - 22h00

## 📄 Fonctionnalités de Réservation

Le système de réservation inclut:
- Sélection de date (avec validation de date minimale)
- Choix de l'heure de réservation
- Nombre de personnes (1-10)
- Formulaire de contact (nom, email, téléphone)
- Confirmation par toast notification

*Note: Les réservations sont actuellement simulées. Pour un environnement de production, connectez un backend ou une API de réservation.*

## 🎯 Prochaines Étapes Suggérées

- Intégration avec un système de réservation réel (API)
- Ajout d'une carte Google Maps interactive
- Système de commande en ligne
- Galerie photo interactive
- Blog ou section actualités
- Intégration réseaux sociaux
- Système de newsletter

---

© 2026 El Mixteco. Tous droits réservés.
