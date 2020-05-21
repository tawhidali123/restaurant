import React from 'react'
import styled from 'styled-components'

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
    }
    
    
`;



export default function Home(props) {
    return (
        <Container>
            <div className='wrapper'>
                <div className='title'>
                    <h1>Restaurant name</h1>
                </div>

                <div className='buttons'>
                    <button>Menu</button>
                    <br />
                    <button>Order Online</button>
                    <br />
                    <button>Phone Number</button>
                </div>
            </div>  
        </Container>
    )
}



