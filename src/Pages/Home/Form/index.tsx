import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../Components/Input';

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
      <div className="flex items-stretch">
        <Input
          label="Nome"
          placeholder="Digite Seu Nome"
          type="text"
          {...register('name', { required: true })}
        />
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
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="Digite seu e-mail"
            {...register('email', { required: true })}
          />
          {errors.email && <span>E-mail é obrigatório</span>}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email">Confirme seu E-mail</label>
          <input
            id="phone"
            placeholder="Digite seu e-mail novamente"
            {...register('phone', { required: true })}
          />
          {errors.phone && <span>Telefone é obrigatório</span>}
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col">
          <label htmlFor="password">Crie uma senha</label>
          <input
            id="password"
            placeholder="Digite sua senha"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Senha é obrigatório</span>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Confirme sua senha</label>
          <input
            id="password"
            placeholder="Digite sua senha novamente"
            {...register('password', { required: true })}
          />
          {errors.password && <span>Senha é obrigatório</span>}
        </div>
      </div>

      <input
        type="checkbox"
        id="terms"
        {...register('terms', { required: true })}
      />
      <label htmlFor="terms">
        Aceito os Termos de Uso e Políticas de Privacidade
      </label>
      {errors.terms && <span>Termos é obrigatório</span>}

      <div className="flex">
        <button className="btn-secondary">Voltar</button>
        <button className="btn" type="submit">
          Concluir Cadastro
        </button>
      </div>
    </form>
  );
}

export default Form;
