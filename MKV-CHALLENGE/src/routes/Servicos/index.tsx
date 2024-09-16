import style from './index.module.css'

export default function Servicos(){
    document.title = "Serviços"

    return(
        <>
            <div className={style.subTitle}>
                <h1>Serviços</h1>
            </div>

            <div className={style.servicesContainer}>
                
                <div className={style.service}>
                    <h2>Assitência 24 horas.</h2>
                    <p>O assistente 24 horas é um serviço disponível a qualquer momento do dia ou da noite, 
                        oferecendo suporte instantâneo em uma variedade de tarefas por meio de tecnologia digital. 
                        Ele pode ajudar em perguntas simples ou fornecer assistência mais complexa, visando proporcionar 
                        conveniência e eficiência aos usuários. </p>
                </div>
                
                
                <div className={style.service}>
                    <h2>Orçamento automatizado.</h2>
                    <p>O orçamento automatizado é um sistema digital que gerencia finanças automaticamente, 
                        analisando gastos e cria planos orçamentários. Utiliza dados financeiros para identificar 
                        padrões de gastos e sugere ajustes para melhorar a saúde financeira. Simplificando o 
                        gerenciamento financeiro.</p>
                </div>
                
                
                <div className={style.service}>
                    <h2>Guincho 24 horas.</h2>
                    <p>Um serviço de guincho 24 horas oferece assistência rápida e confiável para veículos com 
                        problemas mecânicos ou acidentes a qualquer hora do dia ou da noite. Com equipes disponíveis 
                        24/7, garantem o resgate e o transporte seguro de veículos para oficinas ou locais de escolha
                        do cliente.</p>
                </div>

            </div>
        </>
    )
}