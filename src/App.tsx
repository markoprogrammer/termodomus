import { useEffect, useState } from 'react';
import { Thermometer, Phone, Mail, MapPin, ChevronRight, Flame, Star, Wrench, ArrowRight, Menu, X, Instagram } from 'lucide-react';
import logoImage from './assets/logo-termodomus-logo.webp';
import mainImage from './assets/main-image.jpg';
import podnoGrejanje from './assets/podno-grejanje.jpg';
import toplotnaPumpa from './assets/toplotna-pumpa.jpg';
import gasniKotlovi from './assets/gasni-kotlovi.jpg';
import kotlarnica from './assets/kotlarnica.jpg';
import centralniSistem from './assets/centralni-sistem-grejanja-hladjenja-daikin.jpg';
import viessmann from './assets/viessmann.avif';
import aristonLogo from './assets/ariston-logo.png';
import boschLogo from './assets/bosh-logo.svg';
import mitsubishiLogo from './assets/Mitsubishi-logo.png';
import lgLogo from './assets/LG-Logo.webp';
import daikinLogo from './assets/DAIKIN_logo.svg.png';
import viessmannLogo from './assets/Viessmann-logo.svg.png';

// The hero photo's own size, so the page keeps its place while the photo loads.
const HERO_W = 1600;
const HERO_H = 1200;

interface GalleryImage {
  image: string;
  title: string;
  description: string;
  category: string;
}

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // The enlarged photo closes on Escape, and the page behind it doesn't scroll while it is open.
  useEffect(() => {
    if (!selectedImage) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedImage(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Info Bar: on a phone only the two numbers, in one row; mail, Instagram and the address are in Kontakt */}
      <div className="bg-red-600 text-white py-2 text-sm md:text-base">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a href="tel:+381694999455" className="flex items-center gap-2 hover:text-gray-200">
                <Phone size={16} aria-hidden="true" />
                <span>069 499 9455</span>
              </a>
              <a href="tel:+381694999454" className="flex items-center gap-2 hover:text-gray-200">
                <Phone size={16} aria-hidden="true" />
                <span>069 499 9454</span>
              </a>
              <a href="mailto:termodomus.servis@gmail.com" className="hidden md:flex items-center gap-2 hover:text-gray-200">
                <Mail size={16} aria-hidden="true" />
                <span>termodomus.servis@gmail.com</span>
              </a>
              <a href="https://www.instagram.com/termodomus/" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 hover:text-gray-200">
                <Instagram size={16} aria-hidden="true" />
                <span>@termodomus</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <MapPin size={16} aria-hidden="true" />
              <span>Atinska 1, Kragujevac 34000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg md:static sticky top-0 z-50">
        <div className="container mx-auto px-4 py-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <a href="#home" aria-label="Termodomus, na vrh strane"><img src={logoImage} alt="Termodomus" width={320} height={320} className="h-16 md:h-32 w-auto" /></a>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-red-600 p-3 -mr-3"
                aria-label={mobileMenuOpen ? 'Zatvori meni' : 'Otvori meni'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-red-600">Početna</a>
              <a href="#about" className="text-gray-700 hover:text-red-600">O nama</a>
              <a href="#services" className="text-gray-700 hover:text-red-600">Usluge</a>
              <a href="#gallery" className="text-gray-700 hover:text-red-600">Galerija</a>
              <a href="#partners" className="text-gray-700 hover:text-red-600">Partneri</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600">Kontakt</a>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-1">
              <a href="#home" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Početna</a>
              <a href="#about" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>O nama</a>
              <a href="#services" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Usluge</a>
              <a href="#gallery" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Galerija</a>
              <a href="#partners" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Partneri</a>
              <a href="#contact" className="block text-gray-700 hover:text-red-600 py-2" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-6 pb-10 md:py-3 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
                Servis, prodaja, ugradnja toplotnih pumpi, gasnih kotlova, solarnih panela i održavanje
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Sa Vama od 2011
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi smo Termodomus - vaš pouzdan partner za sve toplotne sisteme. Pružamo kompletnu uslugu od prodaje i ugradnje do servisa i održavanja.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-red-600 text-white px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-red-700 transition-all duration-300 inline-flex w-fit shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-lg">
                  Kontaktirajte nas
                  <ChevronRight size={24} />
                </a>
                <a href="#about" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl flex items-center gap-3 hover:border-red-600 hover:text-red-600 transition-all duration-300 inline-flex w-fit font-semibold text-lg">
                  Saznajte više
                  <ArrowRight size={24} />
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <img 
                src={mainImage} 
                alt="Termodomus - Toplotni sistemi" 
                width={HERO_W}
                height={HERO_H}
                // lowercase: React 18 doesn't know the camelCase prop yet
                {...{ fetchpriority: 'high' }}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 right-3 md:-bottom-6 md:-right-3 bg-red-600 text-white p-4 md:p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">12+</div>
                  <div className="text-sm">Godina iskustva</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-16 md:scroll-mt-0 py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Ko smo mi?</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Mi smo Termodomus - tim stručnjaka za instalaciju i servisiranje gasnih kotlova, toplotnih pumpi, solarnih panela i kompletnih sistema HVAC (Heating, Ventilation, and Air Conditioning).
              Ovlašćeni partneri smo sa proizvodjačima kao što su Ariston, Bosch, Mitsubishi, LG, Daikin i Viessmann. Naš cilj je pružiti kvalitetne usluge i pouzdane proizvode za vaš dom.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Wrench className="h-8 md:h-12 w-8 md:w-12" />, number: "11560+", text: "Uradjenih servisa" },
              { icon: <Thermometer className="h-8 md:h-12 w-8 md:w-12" />, number: "100+", text: "Toplotnih pumpi" },
              { icon: <Flame className="h-8 md:h-12 w-8 md:w-12" />, number: "4500+", text: "Kotlova na gas" },
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
      <section id="services" className="scroll-mt-16 md:scroll-mt-0 py-14 md:py-20 bg-gray-50">
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
                title: "Gasni kotlovi",
                description: "Stručna instalacija i servis gasnih kotlova."
              },
              {
                icon: <Star className="h-12 w-12 text-red-600" />,
                title: "Solarni paneli",
                description: "Ugradnja i održavanje solarnih panela sa pratećom dokumentacijom."
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

      {/* Gallery Section */}
      <section id="gallery" className="scroll-mt-16 md:scroll-mt-0 py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Galerija</h2>
          <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Od ugradnje toplotnih pumpi, gasnih kotlova, solarnih panela i održavanja industrijskih postrojenja
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: toplotnaPumpa,
                title: "Ugradnja toplotne pumpe",
                description: "Ugradnja toplotnih pumpi najnovije generacije sa svim dodatnim uređajima i kontrolnim jedinicama.",
                category: "Toplotne pumpe"
              },
              {
                image: podnoGrejanje,
                title: "Instalacija podnog grejanja",
                description: "Instalacija niskotemperaturnog podnog i zidnog grejanja sa materijalima renomiranih proizvođača.",
                category: "Podno grejanje"
              },
              {
                image: gasniKotlovi,
                title: "Ovlašćeni servis gasnih kotlova",
                description: "Puštanje u rad, produženje garancije, popravka i održavanje gasnih kotlova.",
                category: "Gasni kotlovi"
              },
              {
                image: kotlarnica,
                title: "Izrada kotlarnice",
                description: "Kompletno projektovanje, izrada i održavanje kotlarnice sa najnovijom tehnologijom.",
                category: "Industrija"
              },
              {
                image: centralniSistem,
                title: "Centralni sistemi grejanja i hlađenja",
                description: "Projektovanje, izrada i održavanje instalacija za grejanje, hladjenje i ventilaciju.",
                category: "HVAC sistemi"
              },
              {
                image: viessmann,
                title: "Solarni paneli",
                description: "Izrada solarnih panela sa pratećom dokumentacijom.",
                category: "Solarni paneli"
              }
            ].map((work, index) => (
              <button
                type="button"
                key={index} 
                className="group relative block w-full text-left overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(work)}
                aria-label={`${work.title}: uvećaj sliku`}
              >
                <img 
                  src={work.image} 
                  alt={work.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{work.title}</h3>
                    <span className="text-sm text-red-200">{work.category}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="scroll-mt-16 md:scroll-mt-0 py-14 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Naši Partneri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center">
            {[
              { name: "Ariston", logo: aristonLogo },
              { name: "Bosch", logo: boschLogo },
              { name: "Mitsubishi", logo: mitsubishiLogo },
              { name: "LG", logo: lgLogo },
              { name: "Daikin", logo: daikinLogo },
              { name: "Viessmann", logo: viessmannLogo }
            ].map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                       <img
                       src={partner.logo}
                       alt={`${partner.name} logo`}
                       loading="lazy"
                       decoding="async"
                       className="h-12 md:h-16 w-auto max-w-full object-contain mx-auto transition-all duration-300"
                     />
                  <p className="text-sm text-gray-600 mt-2 font-medium">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-16 md:scroll-mt-0 py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Kontaktirajte Nas</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-3">
                <MapPin className="h-6 w-6 text-red-600" />
                <span className="text-lg">Atinska 1, Kragujevac 34000</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-red-600" />
                <a href="tel:+381694999455" className="text-lg hover:text-red-600">069 499 9455</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-red-600" />
                <a href="tel:+381694999454" className="text-lg hover:text-red-600">069 499 9454</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-6 w-6 text-red-600" />
                <a href="mailto:termodomus.servis@gmail.com" className="text-lg hover:text-red-600 break-all">termodomus.servis@gmail.com</a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Instagram className="h-6 w-6 text-red-600" />
                <a href="https://www.instagram.com/termodomus/" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-red-600">@termodomus</a>
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
                <img src={logoImage} alt="Termodomus" width={320} height={320} loading="lazy" className="h-14 w-auto" />
              </div>
              <p className="text-gray-400">
                Termodomus Servis - Vaš pouzdani partner za grejanje i hlađenje. Sa Vama od 2011.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Brzi Linkovi</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Početna</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white">O nama</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Usluge</a></li>
                <li><a href="#gallery" className="text-gray-400 hover:text-white">Galerija</a></li>
                <li><a href="#partners" className="text-gray-400 hover:text-white">Partneri</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Usluge</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-white">Toplotne pumpe</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Gasni kotlovi</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Solarni paneli</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Servis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <a href="tel:+381694999455" className="hover:text-white">069 499 9455</a>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <Phone size={16} />
                  <a href="tel:+381694999454" className="hover:text-white">069 499 9454</a>
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
                  <span>Atinska 1, Kragujevac 34000</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Termodomus. Sva prava zadržana.</p>
            <p className="mt-2 text-sm">
              <a href="https://markomanojlovic.rs/izrada-sajta-kragujevac/" target="_blank" rel="noopener" className="hover:text-white underline underline-offset-4">Izrada sajta</a>: <a href="https://markomanojlovic.rs/" target="_blank" rel="noopener" className="hover:text-white underline underline-offset-4">Marko Manojlović</a>
            </p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full bg-white rounded-lg overflow-y-auto" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Zatvori"
              autoFocus
            >
              <X size={24} className="text-gray-700" />
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-96 lg:max-h-full object-cover"
                />
              </div>
              <div className="lg:w-1/3 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <div className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  {selectedImage.category}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;