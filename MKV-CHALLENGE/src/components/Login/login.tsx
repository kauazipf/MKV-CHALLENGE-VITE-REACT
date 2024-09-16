// src/components/LoginForm.tsx
import React, { useState } from 'react';
import './login.css';

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
    <div className="login-form-container">
      <h2 className="login-form-header">Entrar</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="login-form-input"
          />
        </label>
        <label className="login-form-label">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-form-input"
          />
        </label>
        <button type="submit" className="login-form-button">Entrar</button>
      </form>
      <button onClick={onSwitchToSignup} className="login-form-switch-button">Criar uma conta</button>
    </div>
  );
};

export default LoginForm;
