// src/components/SignupForm.tsx
import React, { useState } from 'react';
import './cadastrar.css';

interface SignupFormProps {
  onSignup: (email: string, password: string) => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSignup(email, password);
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-header">Cadastrar</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <label className="signup-form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="signup-form-input"
          />
        </label>
        <label className="signup-form-label">
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="signup-form-input"
          />
        </label>
        <button type="submit" className="signup-form-button">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignupForm;
