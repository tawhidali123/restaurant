import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;

`;

const Title = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3; 
`

export default function Home(props) {
    return (
        <Container>
            <Title>
                <h1>Restaurant name</h1>
            </Title>

            <div className='buttons'>
                <button>Menu</button>
                <button>Order Online</button>
                <button>Phone Number</button>
            </div>
        </Container>
    )
}



