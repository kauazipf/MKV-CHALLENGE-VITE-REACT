import style from './index.module.css'

export default function Chatbot(){
    document.title = "Chatbot"

    return(
        <>
            <div className={style.subTitle}>
                <h1>Chatbot</h1>
            </div>

            <div id={style.chatContainer}>
                <div id="chat-display"></div>
                <input type="text" id="user-input" placeholder="Digite sua mensagem..." />
                <button>Enviar</button>
            </div>
        </>
    )
}