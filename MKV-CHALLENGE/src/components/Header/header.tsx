import { Link } from 'react-router-dom'
import logo from './../../image/logo.png'
import imgMenu from './../../image/menu.png'
import imgLogin from './../../image/login.png'
import style from './header.module.css'
import { useState } from 'react';

export default function Header(){

    const [menuStyle, setMenuStyle] = useState({ display: 'none' });

    const toggleMenu = () => {
        if (menuStyle.display === 'block') {
        setMenuStyle({ display: 'none' });
        } else {
        setMenuStyle({ display: 'block' });
        }
    };

    return(
        <header className={style.header}>
            <img src={imgMenu} alt="Ícone Menu" className={style.icon} width={70} style={{left:20}} onClick={toggleMenu}/>

            <img src={logo} alt="Logo" className={style.logo} width={120}/>

            <Link to={'/Login'}> <img src={imgLogin} alt="Ícone Login" className={style.icon} width={70} style={{right:20}}/> </Link>

            <div className={style.menu} id="menu"  style={menuStyle}>
                <Link to='/' className={style.link}> Home </Link>
                <Link to='/Carros' className={style.link}> Carros </Link>
                <Link to='/Chatbot' className={style.link}> Chatbot </Link>
                <Link to='/Servicos' className={style.link}> Serviços </Link>
                <Link to='/Participantes' className={style.link}> Participantes </Link>
            </div>
        </header>
    )
}