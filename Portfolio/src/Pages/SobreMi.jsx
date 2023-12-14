import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';
import fondosobremi from '../assets/fondosobremi4.webp'
import iconoSobreMi from '../assets/iconosobre.webp'
import bordeGira from '../assets/circuloFrontSobreMi.svg'

export function SobreMi() {
    return (
        <>  
            <SobreMiContainer id='sobreMi'>
                <div className='container'>
                    <div className='sobreMi'>
                        <div className='img-content'>
                            <img src={fondosobremi} alt="fodno-manosTrabajando" className='img-lateral' />
                            <div className='container_emoji'>
                                <span>
                                    <img src={bordeGira} alt="text" />
                                </span>
                                <img src={iconoSobreMi} alt="emoji" className='work-emoji' />
                            </div>

                        </div>
                        <div className='text-side'>
                            <h2>Sobre mi</h2>
                            <p className='subtitle'>Técnico en informática profesional</p>
                            <p>Actualmente, trabajo en  la empresa <a href='https://www.pwc.com.ar/'  className='link-text'>PWC Argentina</a> como desarrollador full stack semi senior, donde me desempeño principalmente en tareas relacionadas con el front-end. <br /> <br />Durante los últimos tres años, me enfoqué en mejorar mis habilidades en el desarrollo front-end a través de cursos especializados. Además, estoy cursando la carrera universitaria en Ingeniería en Computación en la UNTREF (primer año).</p>
                            <button className='button-curriculum'>Descargar CV</button>
                        </div>
                    </div>

                </div>
            </SobreMiContainer>
        </>
    )
}


const SobreMiContainer = styled.div`
    padding: 8rem 0;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 1024px) {
        padding: 4rem 0;
    }
    .container{
        margin: 0 auto;
        max-width: 60%;
        padding: 0 0rem;
        @media only screen and (max-width: 1024px) {
            max-width: 90%;
        }
    }
    .sobreMi{
        align-items: center;
        display: grid;
        max-width: 82rem;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        @media only screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
            gap: 2rem;
            justify-content: center;
            align-items: center;
        }
    }
    .img-content{
        position: relative;
        height: 100%;
        @media only screen and (max-width: 1024px) {
            width: none;
        }

        .img-lateral{
            border-radius: 1.7rem;
            height: 100%;
            max-height: 30rem;
            width: 80%;
            max-width: 30rem;
            margin: auto;
            @media only screen and (max-width: 1024px) {
                width: 21rem;
                height: auto;
                display: flex;
                width: 100%;
            }
        }
        .container_emoji{
            position: absolute;
            right: 6rem;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .work-emoji{
                bottom: 0px;
                position: absolute;
                right: -5px;
                width: 6.2rem!important;
                z-index: 10;
                @media only screen and (max-width: 1024px) {
                    display: none;
            }
            }
            span{
                background-color: #fff;
                border-radius: 50%;
                bottom: -40px;
                height: 10rem;
                position: absolute;
                right: -34px;
                width: 10rem;
                @media only screen and (max-width: 1024px) {
                    display: none;
                }
                img {
                    width: 10rem;
                    animation: rotate 9s linear infinite;

                    @media (max-width: 1020px) {
                        width: 17rem;
                    }
                    @keyframes rotate {
                        to {
                        transform: rotate(360deg);
                        }
                    }
                }
        
            }
        }

    }
    .text-side {
        max-height: auto;
        padding-right: 1rem;
        @media only screen and (max-width: 1024px) {
            text-align: center;
            width: 100%;
            padding: 0 0 0 0;
        }
        .link-text{
            color: #147efb;
            text-decoration: none;
            font-weight: bold;
        }
        .button-curriculum{
            padding: 12px 18px;
            margin: 2rem 0 0 0;
            background-color: #4196f6;
            font-weight: 500;
            border: none;
            color: #ffff;
            border-radius: 20px;
            font-size: 1rem;
            cursor: pointer;
            transition: all .4s;
            &:hover{
                background-color: #147efb;
                color: white;
            }
        }   
        h2{
            color: #147efb;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }
        .subtitle{
            font-weight: bold;
            font-size: 1.4rem;
            line-height: 1.4;
            margin-bottom: 2rem;
        }
        p{
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
        }

    }
`