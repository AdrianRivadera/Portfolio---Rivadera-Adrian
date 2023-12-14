import React from 'react'
import styled from 'styled-components'
import { CardProyecto } from '../Components/CardProyecto'
import proyectoDoctor from '../assets/Doc.-Online.webp'
import figma from '../assets/Figma-Dark.svg'
import react from '../assets/React-Dark.svg'
import styledComponent from '../assets/styledComponents.svg'

export function Proyectos() {

    const proyecto1 = [
        {
            stackProyecto: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"
        },

    ]

    return (
        <>
            <ContainerSobreMi id='proyectos'>
                <div className='project-container'>
                    <p>Proyectos</p>
                    <h3>Cada proyecto es una pieza importante de mi crecimiento profesional.</h3>

                    <div className='cards-container'>

                        {/* {
                            proyecto1.map((icono,indice) => <CardProyecto key={indice}
                                stackProyecto={icono.stackProyecto}
                            />)
                        } */}
                        <CardProyecto
                            imgCard={proyectoDoctor}
                            tituloProyecto={"Doc. Online"}
                            descripcionProyecto={"Desarrollé de forma integral una plataforma que simplifica la solicitud de turnos médicos y trámites REPROCANN, encargándome también del diseño."}
                            stackProyecto1={react}
                            stackProyecto2={figma}
                            stackProyecto3={styledComponent}
                            linkProyecto={"https://front-doc-online.vercel.app/"}
                            orden={"none"}
                        />

                    </div>
                </div>
            </ContainerSobreMi>
        </>
    )
}



const ContainerSobreMi = styled.div`
    margin: 0 auto;
    padding: 8rem 0;
    max-width: 60%;
    @media only screen and (max-width: 1024px) {
        max-width: 90%;
    }
    
    .project-container{
        @media only screen and (max-width: 1024px) {
            p,h3{
                text-align: center;
            }
        }   
        p{
            color: #147efb;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }
        h3{
            color: #2d2e32;
            font-size: 1.4rem;
            line-height: 1.4;
            margin-bottom: 4rem;
        }
        .cards-container{
            grid-gap: 5rem;
            display: grid;
            gap: 2rem;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto;
            height: auto;
            width: 100%;
            margin: auto;
        }
    }
    
`
