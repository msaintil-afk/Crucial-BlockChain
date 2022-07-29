import React from 'react'
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import Carousel  from './Carousel'
import bitcoin_image from '../../assets/images/bitcoin.jpg';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom';
import { AuthCheck } from 'reactfire'; // New Import
import { Suspense } from 'react';


interface Props{
    title: string;
}


// Styled Components with styled-components
const Root = styled("div")({
    padding: 0,
    margin: 0
})
const NavbarContainer = styled('div')( {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
})
const Logo = styled('h1')({
    margin: '0 0 0 0.45em'
})
const LogoA = styled('a')( {
    color: 'rgb(28,24,22)',
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none'
})
const LogoNavigation = styled('ul')( {
    listStyle: 'none',
    textTransform: 'uppercase',
    textDecoration: 'none',
    display: 'flex'
})

const NavA = styled(Link)({
    display: 'block',
    padding: '1em',
    color: 'black'
})
const Main = styled('main')( {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bitcoin_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    position: 'absolute',
})
const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white'
});



export const Home = ( props:Props) => {

    return (
        <Root>
            <NavbarContainer>
                <Logo>
                    <LogoA href="#">Crucial Blockchain</LogoA>
                </Logo>
                <LogoNavigation>
                    <li>
                        {/* <NavA to='/'>Home</NavA> */}
                    </li>
                    
                    <li>
                        {/* <NavA to='/Dashboard'>Dashboard</NavA> */}
                    </li>
                    <li>
                        <NavA to='/SignIn'>SignIn</NavA>
                    </li>
                    
                </LogoNavigation>
            </NavbarContainer>
            <Main>
                <MainText>
                    <Carousel />
                    <h1>{props.title}</h1>
                    <p> Decentralized Tracker</p>
                    <Button color='warning' variant='contained' component={Link} to='/SignIn'>See live prices</Button>
                </MainText>
            </Main>

        </Root>
    )
}