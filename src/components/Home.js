import React from 'react'
import styled from 'styled-components'
import video from '../videos/light.mp4'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'


export default function Home(props) {
    return (
        <Container>
            <div className='wrapper'> 

            <Navigation />

                <video autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>

                <div className='title'>
                    <h1>Restaurant name</h1>
                </div>

                <div className='buttons'>
                    <Link to='/menu'>
                        <button>Menu</button>
                    </Link>
                    <br />
                    <button>Order Online</button>
                    <br />
                    <button>Phone Number</button>
                </div>
            </div>  
        </Container>
    )
}

const Container = styled.div`
    .wrapper {
        height: 100vh;
        width: 100vw;
        display: grid;
    }

    .title{
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        text-align: center; 
    }

    .buttons{
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }

    button{
        height: 5vh;
        width: 20vw;
        margin: 1vh;
        border-radius: 15px;
        transition: transform 500ms;
    }

    button:hover {
        transform: scale(1.5);
    }

    video {
        position: fixed;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -100;
        transform: translateX(-50%) translateY(-50%);
        background-size: cover;
    }
    
    
`;



