import React from 'react'
import '../css/Sobre.css'
import Video from '../assets/AboutUsBackgroundVideo.mp4'
import { Link } from 'react-router-dom'

/* Video não incluso */

const Sobre = () => {
    return(
        <>
            <div className='sobre'>
                <video src={Video} autoPlay loop muted/>
                    <div className='sobreSection'>
                        <h1 className='about'>Sobre a Electra Auto</h1>
                        <h3 className='history'>
                        Na ElectraAuto, acreditamos que o futuro da mobilidade é elétrico. Nossa missão é conectar pessoas a um mundo mais sustentável, oferecendo informações detalhadas e acessíveis sobre carros elétricos, inovações tecnológicas e o impacto positivo desses veículos no meio ambiente.
                        <br/>Fundada com a paixão por transformar a maneira como as pessoas se locomovem, a ElectraAuto se dedica a fornecer as últimas novidades sobre o mercado de veículos elétricos, análises de desempenho, comparativos de modelos e dicas práticas para quem busca adotar uma vida mais sustentável.
                        <br/>Seja você um entusiasta dos carros elétricos ou alguém que está começando a explorar esse novo mundo, estamos aqui para guiar sua jornada com conteúdo atualizado, honesto e imparcial. Venha descobrir como a tecnologia elétrica pode transformar sua experiência de direção, reduzir sua pegada de carbono e contribuir para um planeta mais limpo e conectado.
                        </h3>
                    </div>
                </div>  
        </>
    )
}

export default Sobre