import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    .menuList{
        display: grid;
        margin-left: 15%;
        grid-gap: 1em;
        margin-top: 2vh;
        margin-bottom: 2vh;
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

export default function MenuItem(props) {
    return (
        <Container style={{ 'z-index': `-${props.z}`, 'transform': `translateX(-${ 6 * props.z }px)`, 'transform': `translateY(-${ 6 * props.z }px)` }}>
            <div className='menuList'>
                <div className='description'>
                    <h4>chicken</h4>
                    <p>description</p>
                </div>

                <div className='imgContainer'>
                    <div className='picture'>
                        <img alt='' className='image' src='https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg' />
                    </div>
                </div>
            </div>
        </Container>
    )
}
