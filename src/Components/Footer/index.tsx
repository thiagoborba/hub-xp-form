import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white absolute bottom-0 w-full">
      <div className="container mx-auto py-4">
        <div className="flex items-center justify-between">
          <p>&copy; 2023 Meu Site. Todos os direitos reservados.</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
