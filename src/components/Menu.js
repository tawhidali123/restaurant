import React from 'react'
import styled from 'styled-components'

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
        border: 25px solid black;
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

                <div className='menuList'>
                    <div className='description'>
                        <h4>chicken</h4>
                        <p>description</p>
                    </div>

                    <div className='imgContainer'>
                        <div className='picture'>
                            <img  className='image' src='https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg' />
                        </div>
                    </div>
                </div>

                <div className='menuList'>
                    <div className='description'>
                        <h4>chicken</h4>
                        <p>description</p>
                    </div>

                    <div className='imgContainer'>
                        <div className='picture'>
                            <img  className='image' src='https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
