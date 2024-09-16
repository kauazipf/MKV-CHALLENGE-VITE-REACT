interface propsParticipantes {
    foto: string;
    nome: string;
    rm: string; 
    turma: string;
    github: string;
}

export default function Participantes({foto, nome, rm, turma, github}: propsParticipantes) {
    return(
        <div>
            <img src={foto} alt="Imagem do Participante" width={150}/>
            <p>{nome}</p>
            <p>{rm}</p>
            <p>{turma}</p>
            <p><a href={github}> {github} </a></p>
        </div>
    )
}