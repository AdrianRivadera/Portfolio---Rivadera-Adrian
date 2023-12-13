import React from 'react'
import { useRef } from "react";
import styled from 'styled-components'
import '../../colors.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const SideBar = () => {

	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<Header>
			<h3>Adrian Rivadera</h3>
			<nav ref={navRef}>
				<ul>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">About me</a></li>
					<li><a href="/#">Projects</a></li>
					<li><a href="/#">Contact</a></li>
				</ul>




				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<CloseIcon />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<MenuIcon />
			</button>
		</Header>
	);
}


const Header = styled.header`
	z-index: 100;
    display: flex;
	position: fixed;
    align-items: center;
	justify-content: space-between;
    width: 100%;
	height: 8vh;
	padding: 0 4rem;
	background-color: var(--var-color-background-primary);
	color: var(--var-color-text-primary);
    box-shadow: 0 0 10px rgba(0,0,0,.09);
    nav a {
        color: var(--var-color-text-primary);
        text-decoration: none;
        font-weight: 600;
		font-size: 1.1rem;
    }:hover {
	color: var(--var-color-text-hover);
    transition:.3s;
    }
    .nav-btn {
	padding: 20px;
	cursor: pointer;
	background: transparent;
	border: none;
	outline: none;
	color: var(--var-color-text-primary);
	display: none;
	opacity: 0;
	width: 30px;
	height: 30px;
    }

    header div,nav {
	display: flex;
	align-items: center;
    width: auto;

    }nav{
		flex-grow: 1;
		justify-content: end;
		ul{
			display: flex;
			list-style: none;
			li{
				padding: 0 20px;
			}
		}
	}


    @media only screen and (max-width: 1024px) {
	/* padding: 0 1rem; */
	.nav-btn {
		display: block;
		opacity: 1;
		margin-top: 6px;
	}

	nav {
		position: fixed;
		top: -140vh;
		left: 0;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1.5rem;
		background-color: var(--var-color-background-primary);
		transition: 1s;
		ul{
			flex-direction: column;
			justify-content: center;
			align-items: center;
			li{
				margin: 10px 0;
				padding: 4px;
			}
		}
	}

	.responsive_nav {
		transform: translateY(140vh);
	}

	.nav-close-btn {
		position: absolute;
		top: 2rem;
		right: 1rem;
	}
	.nav-close-btn{
		margin-top: 0;
	}

	nav a {
		font-size: 1.5rem;
	}
}

`






export default SideBar