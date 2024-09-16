// src/components/SignupForm.tsx
import React, { useState } from 'react';
import style from './cadastrar.module.css';

interface SignupFormProps {
  onSignup: (email: string, password: string) => void;
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className={style.signupFormContainer}>
      <h2 className={style.signupFormHeader}>Cadastrar</h2>
      <form onSubmit={handleSubmit} className={style.signupForm}>
        <label className={style.signupFormLabel}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={style.signupFormInput}
          />
        </label>
        <label className={style.signupFormLabel}>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={style.signupFormInput}
          />
        </label>
        <button type="submit" className={style.signupFormButton}>Cadastrar</button>
      </form>
      <button onClick={onSwitchToLogin} className={style.signupFormSwitchButton}>Logar</button> 
    </div>
  );
};

export default SignupForm;
