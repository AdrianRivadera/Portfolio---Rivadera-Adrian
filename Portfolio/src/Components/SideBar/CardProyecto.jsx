import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

export function CardProyecto({ imgCard, tituloProyecto, descripcionProyecto,stackProyecto1, stackProyecto2, stackProyecto3, stackProyecto4,codigoProyecto, orden}) {

    const estiloPorDefecto = {
        display: 'flex',
        flexDirection: 'row',
    }

    const estiloReverso = {
        display: 'flex',
        flexDirection: 'row-reverse', 
    }

    const estiloFinal = orden == 'reverso' ? estiloReverso : estiloPorDefecto;

    return (
        <>
            <CardContainer style={estiloFinal}>
                <div className='container-img'>
                    <img src={imgCard} alt="" />
                </div>

                <div className='container-text'>
                    <h4>{tituloProyecto}</h4>
                    <p>{descripcionProyecto}</p>
                    <div className='stack'>
                        <img src={stackProyecto1} alt="skill-icon" />
                        <img src={stackProyecto2} alt="skill-icon" />
                        <img src={stackProyecto3} alt="skill-icon" />
                        <img src={stackProyecto4} alt="skill-icon" />
                    </div>

                    <div className='links'>
                        <a href={codigoProyecto} className='link-repositorio' target="_blank" rel="noopener noreferrer">
                            <button>
                                <span className='iconSocialMedia'><GitHubIcon sx={{ fontSize: 36 }} /></span>
                                <p>código</p>
                            </button>
                        </a>

                        <a href={codigoProyecto} className='link-repositorio' target="_blank" rel="noopener noreferrer">
                            <button>
                                <span className='iconSocialMedia'><LaunchIcon sx={{ fontSize: 36 }} /></span>
                                <p>Ver sitio</p>
                            </button>
                        </a>
                    </div>
                </div>

            </CardContainer>
        </>
    )
}

const CardContainer = styled.div`
    background-color: #fff;
    border-radius: 1.5rem;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    gap: 4%;
    height: 25rem;
    padding: 2rem;
    width: 100%;
    @media only screen and (max-width: 1024px) {
        flex-direction: column!important;
        gap: 3rem;
        max-height: 50rem;
        margin: 0 auto;
        height: 50rem;
        width: -moz-fit-content;
        width: -webkit-fit-content;
        width: fit-content;
        padding: 1rem;
        gap: 5%;
    }   

    .container-img{
        background-color: hsla(0,0%,46%,.2);
        border-radius: 1.7rem;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        height: auto;
        overflow: hidden;
        width: 55%;
        cursor: pointer;
        @media only screen and (max-width: 1024px) {
            width: 100%;
            margin: auto;
            height: 50%;
        }   
        img{
            height: auto;
            width: 100%;
            transform: translateY(0%); 
            transition: transform 10s ease-in-out 0s;
            &:hover{
                transform: translateY(-80%); 
            }
            @media only screen and (max-width: 1024px) {
            width: 100%;
            margin: auto;
            &:hover{
                transform: none; 
            }
        }   
        }
    }

    .container-text{
        display: flex;
        flex-direction: column;
        height: auto;
        text-align: center;
        width: 42%;
        @media only screen and (max-width: 1024px) {
            width: 100%;
            height: 45%;
        }   
        h4{
            align-items: center;
            color: #2d2e32;
            display: flex;
            font-size: 1.2rem;
            gap: 0.2rem;
            justify-content: center;
            margin-bottom: 1.2rem;
            position: relative;
            text-transform: uppercase;
            @media only screen and (max-width: 1024px) {
                margin-bottom: 1rem;
            }
        }
        p{
            color: #767676 !important;
            font-size: 1rem;
            font-weight: 500 !important;
            text-transform: none !important;
            text-align: center;
            text-transform: none;
        }
        .stack{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            padding: 1rem 0;
            img{
                width: 2rem;
            }
            @media only screen and (max-width: 1024px) {
                padding: 10px 0;
            }
        }
        .links{
            display: flex;
            flex-direction: row;
            gap: 2rem;
            .link-repositorio{
                text-decoration: none;
                text-transform: none;
            }
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            padding: 2rem 0;
            @media only screen and (max-width: 1024px) {
                padding: 10px 0;
            }
            button{
                display: flex;
                border: none;
                border-radius: 6px;
                padding: 8px 10px;
                background-color: #fff;
                color: #2d2e32;
                cursor: pointer;
                gap: 10px;
            }
            p{
                margin: auto 0;
            }
        }
    }
`