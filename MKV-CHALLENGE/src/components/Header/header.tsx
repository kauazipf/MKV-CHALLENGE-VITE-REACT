import { Link } from 'react-router-dom'
import logo from './../../image/logo.png'
import imgMenu from './../../image/menu.png'
import imgLogin from './../../image/login.png'
import style from './header.module.css'

export default function Header(){

    return(
        <header className={style.header}>
            <img src={imgMenu} alt="Ícone Menu" className={style.icon} width={70} style={{left:20}}/>

            <img src={logo} alt="Logo" className={style.logo} width={120}/>

            <Link to={'/Login'}> <img src={imgLogin} alt="Ícone Login" className={style.icon} width={70} style={{right:20}}/> </Link>

            <div className={style.menu} id="menu">
                <Link to='/'> Home </Link>
                <Link to='/Carros'> Carros </Link>
                <Link to='/Chatbot'> Chatbot </Link>
                <Link to='/Servicos'> Serviços </Link>
                <Link to='/Participantes'> Participantes </Link>
            </div>
        </header>
    )
}