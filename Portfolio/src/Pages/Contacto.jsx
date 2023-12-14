import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';

export function Contacto() {
    return (
        <>
            <ContactoContainer id='contacto'>
                <div className='container'>
                    <div className='contacto-content'>
                        <div className='contacto-titulo'>
                            <p>Contacto</p>
                            <h3>¡Hablemos! Contáctame aqui.</h3>
                        </div>
                    </div>
                    <div className='contacto-icon'>

                        <div className='contacto-icon-box'>
                            <span className='icono-contacto'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-map-search"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg></span>
                            <div className='contacto-info'>
                                <h3>Ubicación</h3>
                                <a href='https://www.google.com.ar/maps/place/Buenos+Aires/@-34.6078927,-58.5200469,11.25z/data=!4m6!3m5!1s0x95bcca3d05457fbb:0xe160f4fce7f7c017!8m2!3d-34.6143048!4d-58.4401655!16s%2Fg%2F1tw_pfss?entry=ttu' aria-label='Ciudad de Buenos Aires'>Buenos Aires, Argentina</a>
                            </div>
                        </div>

                        <div className='contacto-icon-box'>
                            <span className='icono-contacto'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-mail"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg></span>
                            <div className='contacto-info'>
                                <h3>Mail</h3>
                                <a href="mailto:adrianerivadera@gmail.com">
                                    adrianerivadera@gmail.com
                                </a>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </ContactoContainer>
        </>

    )
}

const ContactoContainer = styled.div`
    background-color: #fff;
    margin: 0 auto;
    padding: 8rem 0;
    @media only screen and (max-width: 1024px) {
        padding: 6rem 0;
    }

    .container{
        max-width: 60%;
        margin: 0 auto;
        @media only screen and (max-width: 1024px) {
            max-width: 90%;
        }
        .contacto-content{
            display: flex;
            flex-direction: row;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
            }
            .contacto-titulo{
                @media only screen and (max-width: 1024px) {
                    text-align: center;
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
            }

            
        }
        .contacto-icon{
            display: flex;
            gap: 6rem;
            @media only screen and (max-width: 1024px) {
                flex-direction: column;
                justify-content: center;
                gap: 4rem;
            }
            .contacto-icon-box{
                display: flex;
                align-items: center;
                gap: 1rem;
                @media only screen and (max-width: 1024px) {
                flex-direction: column;
                justify-content: center;
                }
                span{
                    align-items: center;
                    background-color: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0,0,0,.1);
                    color: #147efb;
                    display: flex;
                    height: 4rem;
                    justify-content: center;
                    width: 4rem;
                }
                .contacto-info{
                    @media only screen and (max-width: 1024px) {
                        text-align: center;
                    }
                    a{
                        text-decoration: none;
                        color: #2d2e32;
                        transition: all .4s;
                        font-weight: 500;
                        &:hover{
                            color: #147efb;
                        }
                    }
                }
            }
        }
    }

`