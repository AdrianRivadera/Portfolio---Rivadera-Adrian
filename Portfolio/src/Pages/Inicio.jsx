import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Inicio = () => {
  return (
    <ContainerInicio>
      <div className='container'>
        <div className='content'>
          <div className='container_text'>
            <h1>Front-End React Developer</h1>
            <p>Hi, I'm Adrián Rivadera. A passionate Front-end React Developer based in Buenos Aires, Argentina. 📍</p>
            <div>
              <span className='iconSocialMedia'><LinkedInIcon sx={{ fontSize: 36 }}/></span>
              <span className='iconSocialMedia'><GitHubIcon sx={{ fontSize: 36 }}/></span>
            </div>
          </div>
          <ConImgPerfil></ConImgPerfil>
        </div>

      </div>
    </ContainerInicio>
  )
}

export default Inicio

const ContainerInicio = styled.div`
  z-index: 10;
  display: flex;
  height: 92vh;
  position: relative;
  width: 100%;
  .container{
    margin: 0 auto;
    max-width: 82rem;
    padding: 0 4rem;
    .content{
      align-items: center;
      display: flex;
      gap: 10rem;
      height: 48rem;
      justify-content: center;
      position: relative;
      .container_text{
        max-width: 30rem;
        h1{
        font-size: 3.4rem;
        color:  var(--var-color-text-hover);
        line-height: 1.2;
        } p{
        font-size: 1.2rem;
        opacity: 0.9;
        margin: 1.6rem 0;
        }
        div{
          .iconSocialMedia{
            margin-right:  10px ;
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
    padding: 6rem 0;
    .content{
      flex-direction: column-reverse;
      .container_text{
        text-align: center;
      }
    }
  }

`


const ConImgPerfil = styled.div`
    -webkit-animation: morph 8s ease-in-out infinite;
    animation: morph 8s ease-in-out infinite;
    background-image: url(http://drive.google.com/uc?export=view&id=125n3QLkKxeob3CQy12w8_bIm2iMdYHqE);
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
`