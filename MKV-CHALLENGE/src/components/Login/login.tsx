// src/components/LoginForm.tsx
import React, { useState } from 'react';
import style from './login.module.css';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  return (
    <div className={style.loginFormContainer}>
      <h2 className={style.loginFormHeader}>Entrar</h2>
      <form onSubmit={handleSubmit} className={style.loginForm}>
        <label className={style.loginFormLabel}>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={style.loginFormInput}
          />
        </label>
        <label className={style.loginFormLabel}>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={style.loginFormInput}
          />
        </label>
        <button type="submit" className={style.loginFormButton}>Entrar</button>
      </form>
      <button onClick={onSwitchToSignup} className={style.loginFormSwitchButton}>Criar uma conta</button>
    </div>
  );
};

export default LoginForm;
