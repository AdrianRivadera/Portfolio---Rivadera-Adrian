import styled from 'styled-components';
import { useEffect, useState } from 'react';



function Encabezado() {

    const [mostrarMenuMovil, setMostrarMenuMovil] = useState(-70);

    const mostrarMenu = () => {
        setMostrarMenuMovil(mostrarMenuMovil === 0 ? -70 : 0);
    };


    // SE AGREGA EL FONDO DIFUMINADO
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(1);
            } else {
                setScroll(0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <EncabezadoContainer scroll={scroll}>

            <nav className='content'>
                <div className='content-logo'>
                    <h3>Adrián Rivadera</h3>
                </div>
                <div className='content-items'>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#sobreMi">Sobre mi</a></li>
                        <li><a href="#proyectos">Proyectos</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className='content-boton-menu' onClick={mostrarMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /></svg>
                </div>
                <div className='content-menu-Movil' style={{ left: `${mostrarMenuMovil}vw` }}>
                    <div className='content-logo-movil'>
                        <img
                            src="{logoMovil}"
                            alt='logo'
                        />
                    </div>
                    <div className='content-items-movil'>
                        <li onClick={mostrarMenu}><a href="#inicio">Inicio</a></li>
                        <li onClick={mostrarMenu}><a href="#sobreMi">Sobre mi</a></li>
                        <li onClick={mostrarMenu}><a href="#proyectos">Proyectos</a></li>
                        <li onClick={mostrarMenu}><a href="#contacto">Contacto</a></li>
                    </div>
                    <div className='content-social-movil'>
                        <a  href="https://www.linkedin.com/in/adrian-rivadera/" target="_blank" rel="noopener noreferrer" aria-label="Visitá mi Linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" /></svg>
                        </a>

                    </div>
                </div>
            </nav>
        
        </EncabezadoContainer >


    );
}

export default Encabezado;

const EncabezadoContainer = styled.header`
    width: 100%;
    height: 10vh;
    top: 0;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 10;
    background: rgba(255, 255, 255, ${props => props.scroll ? 0.5 : 0});
    backdrop-filter: ${props => props.scroll ? 'blur(6px)' : 'none'};

    .content{
        width: 80%;
        display: flex;
        justify-content: space-between;

        @media only screen and (max-width: 1520px) {
            width: 78%;
        }

        .content-logo{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            img{
                width: 8rem;
            }
        }

        .content-items{
            ul{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                li{
                    a{
                        color: #222225; 
                        transition: all .4s;
                        text-decoration: none;
                        font-weight: 500;
                        &:hover{
                            color: #147efb;
                        }
                    }
                    list-style: none;
                    padding: 0 3rem;
                    @media only screen and (max-width: 1450px) {
                        padding: 0 1.5rem;
                    }

                }
                li:last-child{
                    padding: 0 0 0 3rem;
                    @media only screen and (max-width: 1450px) {
                        padding: 0 0 0 1.5rem;
                    }
                    
                }
            }


            @media only screen and (max-width: 1024px) {
                display: none;
            }
        }
        //ARRANCA EL MENU RESPONSIVE -1024px

        @media only screen and (max-width: 1024px) {
            width: 90%;
        }
        .content-boton-menu{
            margin: auto 0;
            background-color: white;
            padding: .4rem;
            border-radius: 6px;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
            cursor: pointer;
            svg{
                width: 1.4rem;
                height: auto;
            }
            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
        .content-menu-Movil{
            position: fixed;
            box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            width: 70vw;
            top: 0;
            height: 100vh;
            background-color: white;
            transition: all .4s ease-in-out;
            @media only screen and (min-width: 1024px) {
                display: none;
            }

            .content-logo-movil{
                height: 18vh;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width: 8rem;
                }
            }
            .content-items-movil{
                height: 72vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;

                li{
                    list-style: none;
                    padding: 2rem;
                    font-size: 1.2rem;
                    a{
                        color: #727272;
                        transition: all .4s;
                        text-decoration: none;
                        &:hover{
                            color: #007296;
                        }
                    }
                }

            }
            .content-social-movil{
                height: 10vh;
                display: flex;
                justify-content: center;
                svg{
                    color: #0075B5;
                    width: 1.6rem;
                    height: auto;
                }
            }
        }
    }
`;