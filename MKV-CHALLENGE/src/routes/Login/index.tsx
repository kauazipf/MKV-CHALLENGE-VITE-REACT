import LoginForm from './../../components/Login/login';
import SignupForm from '../../components/Cadastrar/cadastrar';
import { useState } from 'react';
import style from './index.module.css'

export default function Login(){
    document.title = "Login"

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

    const switchToLogin = () => {
      setIsSignup(false);
    };
  
    return (
      <div className={style.login}>
        {isSignup ? (
          <SignupForm onSignup={handleSignup} onSwitchToLogin={switchToLogin}/>
        ) : (
          <LoginForm onLogin={handleLogin} onSwitchToSignup={switchToSignup} />
        )}
      </div>
  );
};


