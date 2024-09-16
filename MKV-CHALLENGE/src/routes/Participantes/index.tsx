import Participante from "./../../components/Participantes/participantes"
import style from './index.module.css'
import fotoKaua from './../../image/fotoKaua.png'
import fotoMarcelo from './../../image/fotoMarcelo.png'
import fotoVictor from './../../image/fotoVictor.png'

export default function Participantes(){
    document.title = "Participantes"

    return(
        <>
            <div className={style.subTitle}>
                <h1>Participantes</h1>
            </div>

            <div className={style.containerParticipantes}>
                <div className={style.participante}>
                    <Participante
                        nome="Kauã Fermino Zipf"
                        rm="RM-558957"
                        turma="1TDSPG"
                        github="https://github.com/kauazipf"
                        foto={fotoKaua}
                    />
                </div>
                
                <div className={style.participante}>
                    <Participante
                        nome="Marcelo Siqueira Bonfim"
                        rm="RM-558254"
                        turma="1TDSPG"
                        github="https://github.com/marcelooou"
                        foto={fotoMarcelo}
                    />
                </div>

                <div className={style.participante}>
                    <Participante
                        nome="Victor Egidio Lira"
                        rm="RM-556653"
                        turma="1TDSPG"
                        github="https://github.com/Vitin46"
                        foto={fotoVictor}
                    />
                </div>
                
            </div>

            <div className={style.linkGithub}>
                <a href="https://github.com/kauazipf/MKV-CHALLENGE-VITE-REACT" 
                target="_blank">Repositório Github</a>
            </div>
        </>
    )
}