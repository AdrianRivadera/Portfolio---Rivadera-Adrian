import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';

export function SobreMi() {
    return (
        <>
            <SobreMiContainer>
                <div className='container'>
                    <div className='sobreMi'>
                        <div className='img-content'>
                            <img src='../assets/fondoSobreMi.jpg' alt="emoji" className='img-lateral' />
                            <div className='container_emoji'>
                                <span>
                                    <img src="https://www.stefantopalovic.com/static/media/text2.3d5aa6ba2d0632bb4e0572631c3f9dc2.svg" alt="text" />
                                </span>
                                <img src='../assets/iconosobremi.png' alt="emoji" className='work-emoji' />
                            </div>

                        </div>
                        <div className='text-side'>
                            <h3>Sobre mi</h3>
                            <h4>Técnico en informática profesional</h4>
                            <p>Actualmente, trabajo en  la empresa PWC como desarrollador full stack semi senior, donde me desempeño principalmente en tareas relacionadas con el front-end. <br /> <br />Durante los últimos tres años, me enfoqué en mejorar mis habilidades en el desarrollo front-end a través de cursos especializados. Además, estoy cursando la carrera universitaria en Ingeniería en Computación en la UNTREF (primer año).</p>
                            <button className='button-curriculum'>Curriculum vitae</button>
                        </div>
                    </div>

                </div>
            </SobreMiContainer>
        </>
    )
}


const SobreMiContainer = styled.div`
    background-color: #ffff;
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
            width: 80%;
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
                right: 6px;
                width: 5rem!important;
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
        .button-curriculum{
            padding: 10px 10px;
            margin: 2rem 0 0 0;
            border: none;
            background-color: white;
            font-weight: bold;
            border: 1px solid #147efb;
            color: #147efb;
            border-radius: 6px;
            letter-spacing: 1px;
            cursor: pointer;
            transition: all .4s;
            &:hover{
                background-color: #147efb;
                color: white;
            }
        }   
        h3{
            color: #147efb;
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-transform: uppercase;
        }
        h4{
            color: #2d2e32;
            font-size: 1.4rem;
            line-height: 1.4;
            margin-bottom: 2rem;
        }
        p{
            color: #767676;
            font-size: 1rem;
            font-weight: 500;
            line-height: 1.5;
        }

    }
`