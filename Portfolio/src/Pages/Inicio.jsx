import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip'
import fotoPerfil from '../assets/foto-perfil.webp'
import '../colors.css'; 
import html from '../assets/HTML.svg'
import css from '../assets/CSS.svg'
import javascript from '../assets/JavaScript.svg'
import typescript from '../assets/TypeScript.svg'
import react from '../assets/React-Dark.svg'
import sass from '../assets/Sass.svg'
import figma from '../assets/Figma-Dark.svg'

const Inicio = () => {
  return (
    <ContainerInicio id='inicio'>
      <div className='container'>
        <div className='content'>
          <div className='container_text'>
            <h1>Front-End React Developer</h1>
            <p>Hola, soy Adrián Rivadera, desarrollador Semi Senior, actualmente resido  en Buenos Aires, Argentina📍.</p>
            <div>
              <a
                href="https://www.linkedin.com/in/adrian-rivadera/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitá mi Linkedin"
              >
                <span className='iconSocialMedia'><LinkedInIcon sx={{ fontSize: 36 }} /></span>
              </a>
              <a
                href="https://github.com/AdrianRivadera"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visitá mi GitHub"
              >
                <span className='iconSocialMedia'><GitHubIcon sx={{ fontSize: 36 }} /></span>
              </a>
            </div>
          </div>
          <ConImgPerfil></ConImgPerfil>
        </div>
        <StackContent>
          <div className='stack_text'>
            <p>Habilidades</p>
            <span>|</span>
          </div>

          <div className='stack_icon'>
            <Tooltip title="HTML">
              <img src={html} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="CSS">
              <img src={css} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="JavaScript">
              <img src={javascript} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="TypeScript">
              <img src={typescript} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="React JS">
              <img src={react} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="Sass">
              <img src={sass} alt="skill-icon" className='iconSkills'/>
            </Tooltip>
            <Tooltip title="Figma">
              <img src={figma} alt="skill-icon" className='iconSkills'/>
            </Tooltip>

          </div>
        </StackContent>
      </div>


    </ContainerInicio>


  )
}

export default Inicio

const ContainerInicio = styled.div`

  z-index: 9;
  display: flex;
  height: calc(100vh);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  .container{
    margin: 0 auto;
    max-width: 82rem;
    padding: 0 2rem;
    .content{
      align-items: center;
      display: flex;
      gap: 10rem;
      justify-content: center;
      position: relative;
      @media only screen and (max-width: 1024px) {
        gap: 2rem;
      }
      .container_text{
        max-width: 30rem;
        h1{
        font-size: 3.4rem;
        line-height: 1.2;
        } p{
        font-size: 1.2rem;
        opacity: 0.9;
        margin: 1.6rem 0;
        }
        div{
          display: flex;
          align-items: center;
          gap: 10px;
          a{
            color: var(--var-color-text-primary);
            text-decoration: none;
          }
          .iconSocialMedia{
            padding: 0px 6px;
            display: block;
            height: auto;
            display: flex;
            align-items: center;
            cursor: pointer;
          }:hover{
            color: var(--var-color-text-hover);
            transition: all .2s;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    height: auto;
    padding: 6rem 0 2rem 0;
    .content{
      flex-direction: column-reverse;
      gap: 2rem;

      .container_text{
        text-align: center;
        div{
          justify-content: center;
        }
      }
    }
  }

`
const StackContent = styled.div`
  display: flex;

  padding: 40px 0 ;
  .stack_text{
    display: flex;
    align-items: center;
    p{
      font-weight: 600;
      font-size: 1.2rem;
    }
    span{
      font-weight: 300;
      font-size: 30px;
      margin: 0 10px;
    }
  }
  .stack_icon{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: .4rem;
    list-style: none;
    .iconSkills{
      width: 3.4rem;
      height: 3.4rem;
      margin: 0 10px;
      cursor: pointer;
      transition: all .3s ease-in-out;
    }:hover{
      transform: translateY(-1rem);
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    .stack_text{
      justify-content: center;
      p{
        border-bottom: 1px solid;
      }
      span{
        display: none;
      }
    }
    .stack_icon{
      gap: 1.5rem;
      margin: 2rem 0 ;
    }
  }

`

const ConImgPerfil = styled.div`
    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 8s ease-in-out infinite;
    background-image:  url(${fotoPerfil});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid black;
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    height: 24rem;
    position: relative;
    transition: all 1s ease-in-out;
    width: 24rem;

    @keyframes morph {
      0% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }

      50% {
        border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
      }

      100% {
        border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
      }
    }
    @media only screen and (max-width: 1024px) {
      width: 16rem;
      height: 16rem;
    }
`

