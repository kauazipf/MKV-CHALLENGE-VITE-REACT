interface propsCarros {
    foto: string;
    nome: string;
    marca: string;
    cor: string;
    ano: string;
}

export default function Carros({foto, nome, marca, cor, ano}: propsCarros) {
    return(
        <div>
            <img src={foto} alt="Imagem de carro" />
            <p>{nome}</p>
            <p>{marca}</p>
            <p>{cor}</p>
            <p>{ano}</p>
        </div>
    )
}