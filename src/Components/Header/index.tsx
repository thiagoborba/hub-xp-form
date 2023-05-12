import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className="border-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Início
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Sobre
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
