import LoginForm from './../../components/Login/login';
import SignupForm from '../../components/Cadastrar/cadastrar';
import { useState } from 'react';
import style from './index.module.css'

export default function Login(){
    const [isSignup, setIsSignup] = useState(false);

    const handleLogin = (email: string, password: string) => {
      console.log('Login - Email:', email);
      console.log('Login - Senha:', password);
    };
  
    const handleSignup = (email: string, password: string) => {
      console.log('Signup - Email:', email);
      console.log('Signup - Senha:', password);
    };
  
    const switchToSignup = () => {
      setIsSignup(true);
    };
  
    return (
      <div className={style.login}>
        {isSignup ? (
          <SignupForm onSignup={handleSignup} />
        ) : (
          <LoginForm onLogin={handleLogin} onSwitchToSignup={switchToSignup} />
        )}
      </div>
  );
};


