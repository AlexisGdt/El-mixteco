import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MapPin, Phone, Clock } from "lucide-react";
import Logo from "./Logo";
import ReservationDialog from "../components/ReservationDialog";

export default function Home() {
  const dishes = [
    {
      name: "Tacos al Pastor",
      description:
        "Tortillas garnies de viandes marinées ou de légumes grillés, accompagnées de sauces fraîches et épicées, inspirées des recettes traditionnelles mexicaines.",
      image:
        "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=780&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Burrito Supreme",
      description:
        "Grande tortilla de blé roulée et généreusement garnie de viande ou de légumes, riz, haricots, fromage et sauces maison pour une explosion de saveurs à chaque bouchée.",
      image:
        "https://images.unsplash.com/photo-1731090389457-7e62135a657f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Quesadillas ",
      description:
        "Galettes de tortilla dorées et garnies de fromage fondant, accompagnées de recettes savoureuses à base de viande, poulet ou légumes, relevées d’épices mexicaines authentiques.",
      image:
        "https://images.unsplash.com/photo-1687483137552-84d0a5d8668e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Empanadas Boeuf",
      description:
        "Chaussons dorés et croustillants, farcis de viande, de poulet ou de légumes, cuits à la perfection pour un mélange idéal de fondant et de croquant.",
      image:
        "https://images.unsplash.com/photo-1548228586-171fb0887ac0?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const restaurantPhotos = [
    "https://images.unsplash.com/photo-1483648969698-5e7dcaa3444f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWV4aWNhbiUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1653084019129-1f2303bb5bc0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWV4aWNhbiUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHwy",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWV4aWNhbiUyMHJlc3RhdXJhbnR8ZW58MHwwfDB8fHwy",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    
    <div className="min-h-screen overflow-x-hidden flex flex-col gap-8 md:gap-12">
      
      {/* Hero Banner */}
      <section className="relative py-20 md:h-[480px] md:py-0 overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1712630514718-3830cc6c0d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZXhpY2FuJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU2ODAwMXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="El Mixteco Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container mx-auto px-4 min-h-[220px] md:h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-5xl mb-3 md:mb-4">
            Bienvenue chez El Mixteco
          </h1>
          <p className="text-base md:text-xl mb-5 max-w-2xl">
            Découvrez l'authenticité de la cuisine mexicaine au
            cœur de Paris
          </p>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-6 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Une expérience culinaire inoubliable
          </h2>
          <p className="text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
            Savourez les saveurs authentiques du Mexique dans
            une ambiance chaleureuse et conviviale. Nos plats
            sont préparés avec passion et des ingrédients frais
            de qualité.
          </p>
        </div>
      </section>

      {/* Dishes Slider */}
      <section className="py-6 md:py-16 bg-white">
        <div className="container mx-auto px-4 py-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Nos plats spécialités
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.map((dish, index) => (
              <div
                key={index}
                className="relative group"
              >
                {/* Étiquette POPULAR */}
                <span className="absolute top-3 left-3 bg-yellow-400 text-black text-[11px] font-semibold px-3 py-1 rounded-full z-10 tracking-wide">POPULAR
                </span>

                {/* Image avec effet zoom */}
                <div className="overflow-hidden aspect-square rounded-2xl">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Contenu */}
                <div className="pt-3">
                  <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
                    <p className="text-sm text-gray-700 line-clamp-3 md:line-clamp-none">
                      {dish.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section – Parallax */}
      <section
        className=" relative py-16 md:py-28 bg-center bg-cover bg-scroll md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1700625916627-16ad4fb0553c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWV4aWNhbiUyMGZvb2R8ZW58MHwwfDB8fHwy')",
        }}
      >
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/65" />
      
        {/* Contenu */}
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-4xl mb-3 md:mb-4">
            Prêt à vivre l'expérience El Mixteco ?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8">
            Réservez dès maintenant votre table et laissez-vous
            transporter par nos saveurs mexicaines.
          </p>
          <ReservationDialog />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-6 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center mb-6">
            Notre Restaurant
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Plongez dans l’ambiance chaleureuse et authentique d’El Mixteco,
            un lieu où la tradition mexicaine rencontre la convivialité moderne.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {restaurantPhotos.map((photo, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Restaurant ${index + 1}`}
                  className="w-full h-52 md:h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Info Section */}
      <section className="py-12 md:py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Adresse */}
            <div className="group rounded-2xl bg-white p-8 text-center md:shadow-sm transition-all duration-300 md:hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <MapPin size={26} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Adresse</h3>
              <p className="text-muted-foreground">123 Rue de la Gaîté</p>
              <p className="text-muted-foreground">75014 Paris</p>
            </div>
      
            {/* Téléphone */}
            <div className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Phone size={26} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Téléphone</h3>
              <p className="text-muted-foreground">+33 1 45 67 89 01</p>
            </div>
      
            {/* Horaires */}
            <div className="group rounded-2xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Clock size={26} />
              </div>
              <h3 className="mb-2 text-lg font-semibold">Horaires</h3>
              <p className="text-muted-foreground">Lun–Ven : 12h–14h30, 19h–23h</p>
              <p className="text-muted-foreground">Sam : 12h–23h</p>
              <p className="text-muted-foreground">Dim : 12h–22h</p>
            </div>
      
          </div>
        </div>
      </section>
    </div>
  );
}