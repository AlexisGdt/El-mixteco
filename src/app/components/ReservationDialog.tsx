import { useState } from 'react';
import { Calendar, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';

export default function ReservationDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de la réservation
    toast.success('Réservation confirmée!', {
      description: `Votre table pour ${formData.guests} personnes le ${formData.date} à ${formData.time} est réservée.`,
    });
    setOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-accent hover:bg-accent/90">
          <Calendar className="mr-2 h-4 w-4" />
          Réserver une table
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Réserver une table</DialogTitle>
          <DialogDescription>
            Remplissez le formulaire ci-dessous pour réserver votre table chez El Mixteco.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nom complet</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Jean Dupont"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="jean.dupont@email.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+33 6 12 34 56 78"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time">Heure</Label>
              <Select
                value={formData.time}
                onValueChange={(value) => setFormData({ ...formData, time: value })}
              >
                <SelectTrigger id="time">
                  <SelectValue placeholder="Sélectionner" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12:00">12:00</SelectItem>
                  <SelectItem value="12:30">12:30</SelectItem>
                  <SelectItem value="13:00">13:00</SelectItem>
                  <SelectItem value="13:30">13:30</SelectItem>
                  <SelectItem value="14:00">14:00</SelectItem>
                  <SelectItem value="19:00">19:00</SelectItem>
                  <SelectItem value="19:30">19:30</SelectItem>
                  <SelectItem value="20:00">20:00</SelectItem>
                  <SelectItem value="20:30">20:30</SelectItem>
                  <SelectItem value="21:00">21:00</SelectItem>
                  <SelectItem value="21:30">21:30</SelectItem>
                  <SelectItem value="22:00">22:00</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="guests">Nombre de personnes</Label>
            <Select
              value={formData.guests}
              onValueChange={(value) => setFormData({ ...formData, guests: value })}
            >
              <SelectTrigger id="guests">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? 'personne' : 'personnes'}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
            Confirmer la réservation
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
