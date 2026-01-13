import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';

export default function DesignSystem() {
  return (
    <div className="min-h-screen bg-muted py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl mb-2">Système de Design - El Mixteco</h1>
        <p className="text-muted-foreground mb-12">
          Guide de style et composants pour le site web du restaurant
        </p>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Palette de Couleurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Couleur Primaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-primary rounded-lg mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Vert foncé inspiré du drapeau mexicain
                </p>
                <p className="text-sm font-mono mt-2">#006847</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Couleur Secondaire</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-secondary rounded-lg mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Jaune doré pour l'énergie et la chaleur
                </p>
                <p className="text-sm font-mono mt-2">#FCD116</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Couleur Accent</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-accent rounded-lg mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Rouge vif du drapeau mexicain
                </p>
                <p className="text-sm font-mono mt-2">#CE1126</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Arrière-plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-background rounded-lg mb-4 border"></div>
                <p className="text-sm text-muted-foreground">
                  Blanc pur pour la clarté
                </p>
                <p className="text-sm font-mono mt-2">#FFFFFF</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Texte Principal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-foreground rounded-lg mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Presque noir pour une bonne lisibilité
                </p>
                <p className="text-sm font-mono mt-2">oklch(0.145 0 0)</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fond Atténué</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-32 bg-muted rounded-lg mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Gris clair pour les sections secondaires
                </p>
                <p className="text-sm font-mono mt-2">#ECECF0</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Typographie</h2>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h1>Titre H1 - Heading 1</h1>
                <p className="text-sm text-muted-foreground">
                  Utilisé pour les titres principaux des pages
                </p>
              </div>
              <div>
                <h2>Titre H2 - Heading 2</h2>
                <p className="text-sm text-muted-foreground">
                  Utilisé pour les sections principales
                </p>
              </div>
              <div>
                <h3>Titre H3 - Heading 3</h3>
                <p className="text-sm text-muted-foreground">
                  Utilisé pour les sous-sections
                </p>
              </div>
              <div>
                <h4>Titre H4 - Heading 4</h4>
                <p className="text-sm text-muted-foreground">
                  Utilisé pour les titres de cartes
                </p>
              </div>
              <div>
                <p className="text-lg">
                  Paragraphe de texte normal. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit. Utilisé pour le contenu principal.
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Texte secondaire ou descriptions. Lorem ipsum dolor sit amet, consectetur 
                  adipiscing elit.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Boutons</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm mb-3">Bouton Principal</p>
                  <Button>Bouton Principal</Button>
                </div>
                <div>
                  <p className="text-sm mb-3">Bouton Accent</p>
                  <Button className="bg-accent hover:bg-accent/90">
                    Réserver
                  </Button>
                </div>
                <div>
                  <p className="text-sm mb-3">Bouton Secondaire</p>
                  <Button variant="secondary">Secondaire</Button>
                </div>
                <div>
                  <p className="text-sm mb-3">Bouton Outline</p>
                  <Button variant="outline">Outline</Button>
                </div>
                <div>
                  <p className="text-sm mb-3">Bouton Ghost</p>
                  <Button variant="ghost">Ghost</Button>
                </div>
                <div>
                  <p className="text-sm mb-3">Bouton Destructif</p>
                  <Button variant="destructive">Supprimer</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Form Elements Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Éléments de Formulaire</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="example-input">Champ de saisie</Label>
                  <Input 
                    id="example-input" 
                    placeholder="Entrez votre texte ici" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-email">Email</Label>
                  <Input 
                    id="example-email" 
                    type="email"
                    placeholder="exemple@email.com" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="example-disabled">Champ désactivé</Label>
                  <Input 
                    id="example-disabled" 
                    disabled
                    placeholder="Champ désactivé" 
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Cartes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Carte Simple</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contenu de la carte. Utilisé pour afficher des informations groupées.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Carte Primaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-90">
                  Carte avec couleur primaire pour mettre en évidence des informations importantes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-secondary text-secondary-foreground">
              <CardHeader>
                <CardTitle>Carte Secondaire</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="opacity-80">
                  Carte avec couleur secondaire pour des sections spéciales.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Spacing Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Espacements</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">Petit (px-4, py-2)</p>
                  <div className="bg-muted px-4 py-2 rounded inline-block">
                    Espacement petit
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">Moyen (px-6, py-4)</p>
                  <div className="bg-muted px-6 py-4 rounded inline-block">
                    Espacement moyen
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">Grand (px-8, py-6)</p>
                  <div className="bg-muted px-8 py-6 rounded inline-block">
                    Espacement grand
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Border Radius Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Arrondis</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm mb-2">Small (rounded-sm)</p>
                  <div className="h-24 bg-primary rounded-sm"></div>
                </div>
                <div>
                  <p className="text-sm mb-2">Medium (rounded-md)</p>
                  <div className="h-24 bg-primary rounded-md"></div>
                </div>
                <div>
                  <p className="text-sm mb-2">Large (rounded-lg)</p>
                  <div className="h-24 bg-primary rounded-lg"></div>
                </div>
                <div>
                  <p className="text-sm mb-2">Extra Large (rounded-xl)</p>
                  <div className="h-24 bg-primary rounded-xl"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Icons Section */}
        <section className="mb-16">
          <h2 className="text-3xl mb-8">Icônes</h2>
          <Card>
            <CardContent className="p-8">
              <p className="text-muted-foreground mb-4">
                Nous utilisons la bibliothèque Lucide React pour les icônes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="text-xs">MapPin</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span className="text-xs">Phone</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span className="text-xs">Clock</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  <span className="text-xs">Calendar</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3.5 13h15"/><path d="m8.5 8 5 5 5-5"/></svg>
                  <span className="text-xs">ChevronDown</span>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                  <span className="text-xs">Menu</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Design Principles */}
        <section>
          <h2 className="text-3xl mb-8">Principes de Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Le site est optimisé pour toutes les tailles d'écran : mobile, tablette et desktop. 
                  Les composants s'adaptent automatiquement à la largeur de l'écran.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Accessibilité</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Utilisation de contrastes suffisants, labels appropriés et navigation au clavier 
                  pour garantir l'accessibilité à tous les utilisateurs.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cohérence Visuelle</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tous les composants suivent les mêmes règles de design pour une expérience 
                  utilisateur cohérente à travers le site.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Images optimisées, code léger et chargement rapide pour offrir une 
                  expérience fluide aux visiteurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
