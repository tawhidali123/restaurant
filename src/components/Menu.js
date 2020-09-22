import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'

const Container = styled.div`
    .wrapper {
        height: 100vh;
        width: 100vw;
        
    }

    .title{
        text-align: center;
    }

    .menuList{
        display: grid;
        margin-left: 15%;
        grid-gap: 1em;
    }
    
    .description{
        border: 4px solid black;
        grid-column: 1 / 3;
        text-align: center;
    }

    .imgContainer{
        grid-column: 3 / 4;
    }

    .image{
        height: 75vh;
        width: 65vh;
    }
`

export default function Menu(props) {
    return (
        <Container>
            <div className='wrapper'>
                <div className='title'>
                    <h2>Menu</h2>
                </div>

                <MenuItem z={ 1 } />
                <MenuItem z={ 2 } />
            </div>
        </Container>
    )
}
