import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import ReservationDialog from "./ReservationDialog";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Navbar principal */}
    <div className="flex items-center h-20 justify-between w-full">

      {/* Left Links */}
      <div className="hidden md:flex items-center gap-8">
        <Link to="/"
          className="relative text-foreground group">Accueil
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full">
            </span>
        </Link>
        <Link to="/menu"
          className="relative text-foreground group">Menu
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full">
            </span>
        </Link>
        <Link to="/about"
          className="relative text-foreground group">A propos
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-primary transition-all group-hover:w-full">
            </span>
        </Link>
      </div>

      {/* Logo Centered */}
      <div className="flex-1 flex justify-center">
        <Link to="/">
          <Logo className="h-12 w-auto" />
        </Link>
      </div>

      {/* Right Button */}
      <div className="hidden md:flex items-center gap-8">
        <ReservationDialog />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    {/* Mobile Navigation — doit être **hors** du flex principal */}
    {mobileMenuOpen && (
      <div className="md:hidden py-4 border-t">
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
          <Link to="/menu" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
          <ReservationDialog />
        </div>
      </div>
    )}

  </div>
</nav>
  );
}