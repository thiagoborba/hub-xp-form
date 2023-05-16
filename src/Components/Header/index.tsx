/// <reference types="vite-plugin-svgr/client" />

import React from 'react';
import { ReactComponent as Logo } from '../../Assets/Logo.svg';

export function Header() {
  return (
    <header className="border-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo />
        <nav>
          <ul className="flex space-x-4 text-secondary ">
            <li>
              <a href="#" className="hover:text-gray-300">
                Benefícios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Funcionalidades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Planos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Depoimentos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Perguntas frequentes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Aplicativo
              </a>
            </li>
            <li>
              <a href="#" className="font-bold text-primary">
                Já sou cliente
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn">Criar conta grátis</button>
      </div>
    </header>
  );
}
