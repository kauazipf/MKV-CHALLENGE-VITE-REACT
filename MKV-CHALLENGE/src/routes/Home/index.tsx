import banner from './../../image/banner-porto-seguro.png'
import imgPorto from './../../image/image-porto-seguro.png'
import style from './index.module.css'

export default function Home(){
    document.title = "Home"

    return(
        <>
            <main>
                <div className={style.banner}>
                    <img src={banner} alt="Banner" />
                </div>

                <div className={style.contentIndex}>
                    <p className={style.texto}> Nossa solução, seria a MVK Ltda, uma empresa que representa uma abordagem inovadora para otimizar o
                        processo de reparação automotiva em parceria com a Porto Seguro. Este
                        documento detalha como nossa solução pode resolver os desafios enfrentados atualmente pela Porto Seguro.
                        A MVK Ltda é uma plataforma online que
                        revoluciona o modo como a Porto Seguro lida com reparos automotivos. Utilizando tecnologias avançadas e
                        inovadoras, como inteligência artificial e
                        automação de processos, nossa solução simplifica tudo, como, o processo, desde o diagnóstico inicial até
                        a conclusão do serviço. </p>
                    <img src={imgPorto} alt="Imagem do Carro" className={style.imgPorto} />
                </div>
            </main>
        </>
    )
}