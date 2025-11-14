import React, { useState, useEffect } from 'react';

const navLinks = [
  { name: 'Início', href: '#início' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'História', href: '#historia' },
  { name: 'Serviços', href: '#serviços' },
  { name: 'UPTI', href: '#upti' },
  { name: 'Saúde Mental', href: '#saude-mental' },
  { name: 'Unidades', href: '#unidades' },
  { name: 'Equipe', href: '#equipe' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Blog', href: '#blog' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Convênios', href: '#convênios' },
  { name: 'Contato', href: '#contato' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('início');

  useEffect(() => {
    const sectionOffsets: { [key: string]: number } = {};
    navLinks.forEach(link => {
      const elem = document.getElementById(link.href.substring(1));
      if (elem) {
        sectionOffsets[link.href.substring(1)] = elem.offsetTop;
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      setIsScrolled(window.scrollY > 50);

      let currentSection = 'início';
      for (const sectionId in sectionOffsets) {
        if (sectionOffsets[sectionId] <= scrollPosition) {
          currentSection = sectionId;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIX: Explicitly type NavLink as a React.FC to correctly handle the 'key' prop.
  type NavLinkProps = {
    name: string;
    href: string;
    isMobile?: boolean;
  };

  const NavLink: React.FC<NavLinkProps> = ({ name, href, isMobile = false }) => (
    <a
      href={href}
      onClick={() => isMobile && setIsOpen(false)}
      className={`relative group transition-colors duration-300
        ${activeSection === href.substring(1) ? 'text-amber-500' : 'text-gray-700 hover:text-amber-500'}
        ${isMobile ? 'block py-3 text-lg' : ''}`}
    >
      {name}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-300 
        ${activeSection === href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}>
      </span>
    </a>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a href="#início" onClick={() => setIsOpen(false)}>
            <img src="https://i.postimg.cc/HW6c2LrS/Design-sem-nome.gif" alt="Hospital Rumo Certo Logo" className="h-16 w-16 rounded-full object-cover" />
          </a>
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.name} name={link.name} href={link.href} />
            ))}
          </nav>
          <button
            className="lg:hidden text-gray-800 z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            )}
          </button>
        </div>
      </header>
      
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <nav className="flex flex-col items-center justify-center h-full space-y-6">
          {navLinks.map((link) => (
            <NavLink key={link.name} name={link.name} href={link.href} isMobile />
          ))}
        </nav>
      </div>
    </>
  );
};
export default Header;