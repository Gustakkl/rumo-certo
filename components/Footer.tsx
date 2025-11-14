

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 border-t border-teal-800 relative z-10">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p className="font-bold text-lg text-white mb-2">Hospital Rumo Certo</p>
        <p className="mb-4">Via Des. Luiz Carlos de Araújo, 2015 - Nova Pinhal, Cabreúva - SP, 13315-000</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">Facebook</a>
          <a href="#" className="hover:text-amber-400 transition-colors duration-300">Instagram</a>
          <a href="https://wa.me/5511988104793" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors duration-300">WhatsApp</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Hospital Rumo Certo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;