import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Tooltip from '@mui/material/Tooltip';


export function Footer() {
    return (
        <FooterContainer>
            <div className='container'>
                <div className='footer-text'>
                    <h3>Copyright © 2023. All rights are reserved</h3>
                    <div className='footer-social'>
                        <a
                            href="https://www.linkedin.com/in/adrian-rivadera/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className='iconSocialMedia'><LinkedInIcon sx={{ fontSize: 36 }} /></span>
                        </a>
                        <a
                            href="https://github.com/AdrianRivadera"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className='iconSocialMedia'><GitHubIcon sx={{ fontSize: 36 }} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </FooterContainer>

    )
}

const FooterContainer = styled.div`
    background-color: #2d2e32;
    padding: 5rem 0;
    width: 100%;
    @media only screen and (max-width: 1024px) {
        padding: 4rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container{
        width: 60%;
        margin: 0 auto;
        max-width: 107rem;
        @media only screen and (max-width: 1024px) {
            width: 90%;
            margin: auto auto;
        }
        .footer-text{
            align-items: center;
            display: flex;
            justify-content: space-between;
            @media only screen and (max-width: 1024px) {
             flex-direction: column;
             text-align: center;
            }
            h3{
                color: #fff;
                font-size: 1.2rem;
            }
            .footer-social{
                align-items: center;
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-top: 1rem;
                a{
                    color: #fff;
                    font-size: 2.3rem;
                    cursor: pointer;
                }:hover{
                    color: #f4fcff;
                    transition: all .2s;
                }
            }
        }
    }
`