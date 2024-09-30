import React from 'react'
import ECar1 from '../assets/ECar1.jpg'
import Motivo1 from '../assets/motivo1.jpg'
import Motivo2 from '../assets/motivo2.jpg'
import Motivo3 from '../assets/motivo3.jpg'
import Motivo4 from '../assets/motivo4.jpg'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import '../css/Base.css'

const Home = () => {
    return(
        <>
            <div className= 'home'>
                <img src={ECar1} className='ecar1'/>
                <div className='title'>
                    <h1>Eletric Car</h1>
                </div>
                <div className='subtitle'>
                    <h2>Compre os melhores Carros Elétrico do Brasil</h2>
                </div>
                <Link to='/produtos'>
                    <button className='btnComprar'>
                        Comprar
                    </button>
                </Link>
            </div>
            <div className='homeUnder'>
                <div className='heading1'>  
                    <h1>Vantagens dos Carros Elétricos</h1>
                </div>
                <div className='cardContainer'>
                    <div className='card'>
                        <img src={Motivo1}/>
                        <div className='cardContent'>
                            <h2>Economia</h2>
                            <p>Custo de abastecimento com eletricidade é geralmente menor que combustíveis fósseis</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Motivo2}/>
                        <div className='cardContent'>
                            <h2>Tecnologia Avançada</h2>
                            <p>Carros elétricos oferecem recursos de ponta e conectividade</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Motivo3}/>
                        <div className='cardContent'>
                            <h2>Manutenção Reduzida</h2>
                            <p>Menos peças móveis, o que significa menos gastos com manutenção</p>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={Motivo4}/>
                        <div className='cardContent'>
                            <h2>Sustentabilidade</h2>
                            <p>Reduzem a emissão de gases poluentes, ajudando o meio ambiente</p>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Home