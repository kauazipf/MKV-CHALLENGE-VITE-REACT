import Carros from "../../components/Carros/carros"
import style from './index.module.css'

export default function dadosCarros(){
    return(
        <>
            <div className={style.subTitle}>
                <h1>Carros</h1>
            </div>

            <div className={style.containerCarros}>
                <div className={style.carro}>
                    <Carros
                        nome="Celta"
                        marca="Chevrolet"
                        cor="Preto"
                        ano="2014"
                        foto="./../../image/fotoCelta.png"
                    />
                </div>

                <div className={style.carro}>
                    <Carros
                        nome="Uno"
                        marca="Fiat"
                        cor="Roxo"
                        ano="1998"
                        foto="./../../image/fotoUno.png"
                    />
                </div>

                <div className={style.carro}>
                    <Carros
                        nome="Fiesta"
                        marca="Ford"
                        cor="Prata"
                        ano="2011"
                        foto="./../../image/fotoFiesta.png"
                    />
                </div>
                
            </div>

        </>
    )
}