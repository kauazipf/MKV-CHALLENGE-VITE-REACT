import { Link } from 'react-router-dom'
import logoGmail from './../../image/gmail.png'
import logoGithub from './../../image/github.png'
import style from './footer.module.css'

export default function Footer(){
    return(
        <footer className={style.footer}>
            <nav role="navigation" className={style.linksRodape}>
                <ul>
                   <li className={style.link}> <a href="mailto:mktltda3@gmail.com" target='_blank'> <img src={logoGmail} alt="Icone do Gmail" /> </a> </li> 
                   <li className={style.link}> <a href="https://github.com/kauazipf/MKV-CHALLENGE-VITE-REACT" target='_blank'> <img src={logoGithub} alt="Icone do GitHub" /> </a> </li>
                </ul>
            </nav>

            <nav role="navigation" className={style.linksRodape}>
                <Link to='/' className={style.txtLink}> Home </Link>
                <Link to='/Participantes' className={style.txtLink}> Sobre </Link>
            </nav>
            <p>© 2024 MKV Ltda. Todos os direitos reservados.</p>
        </footer>
    )
}