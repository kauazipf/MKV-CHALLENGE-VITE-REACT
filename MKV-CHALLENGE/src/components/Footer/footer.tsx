import { Link } from 'react-router-dom'
import logoGmail from './../../image/gmail.png'
import logoGithub from './../../image/github.png'

export default function Footer(){
    return(
        <footer>
            <nav role="navigation" className="linksRodape">
                <ul>
                   <li className="link"> <a href="mailto:mktltda3@gmail.com"> <img src={logoGmail} alt="Icone do Gmail" width="30" /> </a> </li> 
                   <li className="link"> <a href="https://github.com/kauazipf"> <img src={logoGithub} alt="Icone do GitHub" /> </a> </li>
                </ul>
            </nav>

            <nav role="navigation" className="linksRodape">
                <Link to='/'> Home </Link>
                <Link to='/Participantes'> Sobre </Link>
            </nav>
            <p>© 2024 MKV Ltda. Todos os direitos reservados.</p>
        </footer>
    )
}