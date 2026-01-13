import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent } from '../components/ui/card';
import { MapPin, Phone, Clock, ChefHat, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712630514718-3830cc6c0d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU2ODAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About El Mixteco"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl md:text-5xl mb-4">À Propos de El Mixteco</h1>
          <p className="text-xl max-w-2xl">
            Une histoire de passion, d'authenticité et de tradition mexicaine
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Notre Histoire</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              El Mixteco est né en 2018 de la passion de son fondateur, Carlos Hernández, 
              originaire d'Oaxaca au Mexique. Arrivé à Paris il y a plus de 15 ans, Carlos 
              a voulu partager l'authenticité et la richesse de la cuisine mexicaine avec 
              les Parisiens.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Le nom "El Mixteco" fait référence à la culture mixtèque, une des civilisations 
              préhispaniques les plus importantes du Mexique. Tout comme cette culture ancienne, 
              notre restaurant célèbre l'art, la tradition et l'excellence culinaire.
            </p>
            <p className="text-lg text-muted-foreground">
              Aujourd'hui, El Mixteco est reconnu comme l'une des meilleures adresses de 
              cuisine mexicaine authentique à Paris, offrant une expérience gastronomique 
              unique dans une ambiance chaleureuse et conviviale.
            </p>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="mb-2">Authenticité</h3>
                <p className="text-muted-foreground">
                  Nous utilisons des recettes traditionnelles transmises de génération en génération, 
                  garantissant des saveurs authentiques et mémorables.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <ChefHat className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="mb-2">Qualité</h3>
                <p className="text-muted-foreground">
                  Nous sélectionnons rigoureusement nos ingrédients, privilégiant le frais 
                  et le local quand c'est possible, sans compromis sur la qualité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Users className="mx-auto mb-4 text-accent" size={48} />
                <h3 className="mb-2">Convivialité</h3>
                <p className="text-muted-foreground">
                  L'hospitalité mexicaine est au cœur de notre service. Nous accueillons 
                  chaque client comme un membre de notre famille.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Le Chef */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1738717691098-d9bea09bc5f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1leGljYW4lMjBjaGVmfGVufDB8MHwwfHx8Mg%3D%3D"
                alt="Chef Carlos Hernández"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Chef Carlos Hernández</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Né à Oaxaca, Carlos a grandi entouré des arômes et des saveurs de la cuisine 
                mexicaine traditionnelle. Dès son plus jeune âge, il aidait sa grand-mère 
                dans la cuisine familiale, apprenant les secrets des recettes ancestrales.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Après avoir étudié la gastronomie à Mexico City, Carlos a travaillé dans 
                plusieurs restaurants étoilés avant de s'installer à Paris. Sa vision était 
                claire : partager l'âme de la cuisine mexicaine avec le monde.
              </p>
              <p className="text-lg text-muted-foreground">
                Aujourd'hui, Chef Carlos continue d'innover tout en respectant les traditions, 
                créant des plats qui racontent l'histoire du Mexique à chaque bouchée. Sa 
                passion pour la cuisine et son dévouement à l'excellence ont fait d'El Mixteco 
                un incontournable de la scène gastronomique parisienne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que nous offrons */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Ce que nous offrons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-3">Cuisine Authentique</h3>
              <p className="opacity-90">
                Des plats préparés selon les méthodes traditionnelles mexicaines, avec des 
                ingrédients importés directement du Mexique pour garantir l'authenticité.
              </p>
            </div>
            <div>
              <h3 className="mb-3">Ambiance Chaleureuse</h3>
              <p className="opacity-90">
                Un décor inspiré de l'artisanat mexicain, créant une atmosphère conviviale 
                et colorée qui vous transporte directement au Mexique.
              </p>
            </div>
            <div>
              <h3 className="mb-3">Service Personnalisé</h3>
              <p className="opacity-90">
                Une équipe passionnée et attentive, prête à vous conseiller et à rendre 
                votre expérience culinaire inoubliable.
              </p>
            </div>
            <div>
              <h3 className="mb-3">Événements Spéciaux</h3>
              <p className="opacity-90">
                Nous organisons régulièrement des soirées à thème, dégustations de tequila 
                et célébrations des fêtes traditionnelles mexicaines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-12">Nous Trouver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="mb-2">Adresse</h3>
                <p className="text-muted-foreground">123 Rue de la Gaîté</p>
                <p className="text-muted-foreground">75014 Paris, France</p>
                <p className="text-muted-foreground mt-2">Métro: Gaîté (ligne 13)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="mb-2">Contact</h3>
                <p className="text-muted-foreground">Téléphone:</p>
                <p className="text-muted-foreground">+33 1 45 67 89 01</p>
                <p className="text-muted-foreground mt-2">Email:</p>
                <p className="text-muted-foreground">contact@elmixteco.fr</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="mx-auto mb-4 text-primary" size={40} />
                <h3 className="mb-2">Horaires d'Ouverture</h3>
                <p className="text-muted-foreground">Lundi - Vendredi:</p>
                <p className="text-muted-foreground">12h00 - 14h30, 19h00 - 23h00</p>
                <p className="text-muted-foreground mt-2">Samedi: 12h00 - 23h00</p>
                <p className="text-muted-foreground">Dimanche: 12h00 - 22h00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
