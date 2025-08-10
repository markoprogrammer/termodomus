import React from 'react';
import { Thermometer, Phone, Mail, MapPin, Clock, ChevronRight, Flame, Star, Users, Award, Building2, Wrench, ArrowRight, Menu, X, Instagram } from 'lucide-react';
import { useState } from 'react';
import logoImage from './assets/logo-termodomus-logo.webp';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-2 md:space-y-0">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
              <a href="tel:0694999454" className="flex items-center gap-2 hover:text-gray-200">
                <Phone size={16} />
                <span>069 499 9454</span>
              </a>
              <a href="mailto:termodomus.servis@gmail.com" className="flex items-center gap-2 hover:text-gray-200">
                <Mail size={16} />
                <span>termodomus.servis@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/termodomus/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-200">
                <Instagram size={16} />
                <span>@termodomus</span>
              </a>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-2 md:space-y-0">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Avalska 12, Kragujevac 34000</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>Otvoreno 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img src={logoImage} alt="Termodomus Logo" className="h-10 w-auto" />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600">Početna</a>
              <a href="#about" className="text-gray-700 hover:text-red-600">O nama</a>
              <a href="#services" className="text-gray-700 hover:text-red-600">Usluge</a>
              <a href="#products" className="text-gray-700 hover:text-red-600">Proizvodi</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600">Kontakt</a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              <a href="#home" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Početna</a>
              <a href="#about" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>O nama</a>
              <a href="#services" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Usluge</a>
              <a href="#products" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Proizvodi</a>
              <a href="#contact" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="relative h-[600px] bg-cover bg-center" 
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Temperatura Vašeg doma je naša briga</h1>
                <p className="text-lg md:text-xl mb-8">Sa Vama od 2011</p>
                <a href="#contact" className="bg-red-600 text-white px-6 md:px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-red-700 transition-colors inline-flex w-fit">
                  Kontaktirajte nas
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ko smo mi?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mi smo Termodomus - tim stručnjaka za instalaciju i servisiranje termalnih gasnih kotlova i električnih instalacija, 
              kao što su Ariston, Bosch i drugi poznati proizvođači. Naš cilj je pružiti kvalitetne usluge i pouzdane proizvode za vaš dom.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Wrench className="h-8 md:h-12 w-8 md:w-12" />, number: "11560+", text: "Uradjenih servisa" },
              { icon: <Thermometer className="h-8 md:h-12 w-8 md:w-12" />, number: "100+", text: "Toplotnih pumpi" },
              { icon: <Flame className="h-8 md:h-12 w-8 md:w-12" />, number: "4500+", text: "Kotlova na gas i pelet" },
              { icon: <Users className="h-8 md:h-12 w-8 md:w-12" />, number: "220+", text: "Zadovoljnih domaćinstava" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-red-600 mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm md:text-base">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Naše Usluge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="h-12 w-12 text-red-600" />,
                title: "Toplotne pumpe",
                description: "Profesionalna ugradnja i održavanje toplotnih pumpi za efikasno grejanje i hlađenje."
              },
              {
                icon: <Flame className="h-12 w-12 text-red-600" />,
                title: "Gasni kotlovi i kotlovi na pelet",
                description: "Stručna instalacija i servis gasnih kotlova i kotlova na pelet."
              },
              {
                icon: <Star className="h-12 w-12 text-red-600" />,
                title: "Solarni paneli",
                description: "Ugradnja i održavanje solarnih panela za energetski efikasno rešenje."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Naši Proizvodi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1513086670993-297187d3a281?auto=format&fit=crop&q=80",
                title: "Gasni Kotlovi",
                description: "Vrhunski gasni kotlovi renomiranih proizvođača"
              },
              {
                image: "https://images.unsplash.com/photo-1510916369457-5b6ebd11d6b4?auto=format&fit=crop&q=80",
                title: "Radijatori",
                description: "Širok izbor radijatora za svaki prostor"
              },
              {
                image: "https://images.unsplash.com/photo-1527089001920-e56b7c6c479b?auto=format&fit=crop&q=80",
                title: "Klima Uređaji",
                description: "Moderni klima uređaji za hlađenje i grejanje"
              }
            ].map((product, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-200">{product.description}</p>
                  <a href="#contact" className="mt-4 inline-flex items-center text-white hover:text-red-400">
                    Saznaj više <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Šta Kažu Naši Klijenti</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marko Petrović",
                role: "Vlasnik stana",
                text: "Izuzetno profesionalna usluga. Sve je urađeno u roku i po dogovoru."
              },
              {
                name: "Ana Jovanović",
                role: "Menadžer zgrade",
                text: "Već godinama sarađujemo sa Termodomusom. Uvek su pouzdani i efikasni."
              },
              {
                name: "Stefan Nikolić",
                role: "Arhitekta",
                text: "Odlična saradnja na više projekata. Preporučujem njihove usluge."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Kontaktirajte Nas</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-red-600" />
                <span className="text-lg">Avalska 12, Kragujevac 34000</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-red-600" />
                <a href="tel:0694999454" className="text-lg hover:text-red-600">069 499 9454</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-red-600" />
                <a href="mailto:termodomus.servis@gmail.com" className="text-lg hover:text-red-600">termodomus.servis@gmail.com</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Instagram className="h-6 w-6 text-red-600" />
                <a href="https://www.instagram.com/termodomus/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-red-600">@termodomus</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Clock className="h-6 w-6 text-red-600" />
                <span className="text-lg">Otvoreno 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={logoImage} alt="Termodomus Logo" className="h-10 w-auto" />
              </div>
              <p className="text-gray-400">
                Termodomus Servis - Vaš pouzdani partner za grejanje i hlađenje. Sa Vama od 2011.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Brzi Linkovi</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Početna</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">O nama</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Usluge</a></li>
                <li><a href="#products" className="text-gray-400 hover:text-white">Proizvodi</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Usluge</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Toplotne pumpe</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Gasni kotlovi</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Solarni paneli</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Servis</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <a href="tel:0694999454" className="hover:text-white">069 499 9454</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Mail size={16} />
                  <a href="mailto:termodomus.servis@gmail.com" className="hover:text-white">termodomus.servis@gmail.com</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Instagram size={16} />
                  <a href="https://www.instagram.com/termodomus/" target="_blank" rel="noopener noreferrer" className="hover:text-white">@termodomus</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <MapPin size={16} />
                  <span>Avalska 12, Kragujevac 34000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Termodomus. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;