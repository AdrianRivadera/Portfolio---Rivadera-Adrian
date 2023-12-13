import React from 'react'
import styled from 'styled-components'
import { CardProyecto } from '../Components/SideBar/CardProyecto'



export function Proyectos() {

    const proyecto1 = [
        {
            stackProyecto: "https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"
        },

    ]

    return (
        <>
            <ContainerSobreMi>
                <div className='project-container'>
                    <p>Portfolio</p>
                    <h3>Cada proyecto es una pieza importante de mi crecimiento profesional.</h3>

                    <div className='cards-container'>

                        {/* {
                            proyecto1.map((icono,indice) => <CardProyecto key={indice}
                                stackProyecto={icono.stackProyecto}
                            />)
                        } */}
                        <CardProyecto
                            imgCard={"https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"}
                            tituloProyecto={"Car rental"}
                            descripcionProyecto={"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."}
                            stackProyecto1={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto2={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto3={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto4={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                            orden={"none"}
                        />

                        <CardProyecto
                            imgCard={"https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"}
                            tituloProyecto={"Car rental"}
                            descripcionProyecto={"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."}
                            stackProyecto1={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto2={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto3={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto4={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                            orden={"reverso"}
                        />

                        <CardProyecto
                            imgCard={"https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"}
                            tituloProyecto={"Car rental"}
                            descripcionProyecto={"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."}
                            stackProyecto1={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto2={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto3={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto4={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                            orden={"none"}
                        />

                        <CardProyecto
                            imgCard={"https://www.stefantopalovic.com/static/media/car-rental-full.c58b37da333d73238fdd.webp"}
                            tituloProyecto={"Car rental"}
                            descripcionProyecto={"A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."}
                            stackProyecto1={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto2={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto3={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            stackProyecto4={"https://raw.githubusercontent.com/tandpfun/skill-icons/59059d9d1a2c092696dc66e00931cc1181a4ce1f/icons/React-Dark.svg"}
                            codigoProyecto={"https://www.youtube.com/watch?v=RELxs6kKrbM"}
                            orden={"reverso"}
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
