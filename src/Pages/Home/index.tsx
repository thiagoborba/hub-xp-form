import React from 'react';
import { Form } from './Form';

export function Home() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-10 text-center">Dados Pessoais</h2>
      <Form />
    </div>
  );
}
