import React from 'react';
import { useForm } from 'react-hook-form';

export function Form() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const role = watch('role'); // you can also target specific fields by their names
  const contract = watch('contract');

  console.log(watch()); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="name">Nome</label>
          <input
            id="name"
            placeholder="Digite seu nome"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Nome é obrigatório</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="role">Cargo</label>
          <select
            id="role"
            defaultValue=""
            {...register('role', { required: true, value: role })}
          >
            <option value="">Selecione uma opção</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Fullstack">Fullstack</option>
          </select>
          {errors.role && <span>Cargo é obrigatório</span>}
        </div>
      </div>
      <div>
        <p>Possui CNPJ ou MEI?</p>
        <input
          id="pj_true"
          type="radio"
          {...register('contract', { required: true })}
        />
        <label htmlFor="pj_true">Sim</label>
        <input
          id="pj_false"
          type="radio"
          {...register('contract', { required: true })}
        />
        <label htmlFor="pj_false">Não</label>
      </div>
    </form>
  );
}

export default Form;
