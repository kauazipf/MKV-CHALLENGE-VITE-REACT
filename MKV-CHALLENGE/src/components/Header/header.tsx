import { Link } from 'react-router-dom'
import logo from './../../image/logo.png'
import imgMenu from './../../image/menu.png'
import imgLogin from './../../image/login.png'

export default function Header(){

    return(
        <header>
            <img src={imgMenu} alt="Ícone Menu" className="icon left-icon" />

            <img src={logo} alt="Logo" className="logo" />

            <Link to={'/Login'}> <img src={imgLogin} alt="Ícone Login" className="icon right-icon" /> </Link>

            <div className="menu" id="menu">
                <Link to='/'> Home </Link>
                <Link to='/Carros'> Carros </Link>
                <Link to='/Chatbot'> Chatbot </Link>
                <Link to='/Servicos'> Serviços </Link>
                <Link to='/Participantes'> Participantes </Link>
            </div>
        </header>
    )
}