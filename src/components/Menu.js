import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

export default function Menu(props) {
    return (
        <Container>
            <div>
                <div>
                    <h2>Menu</h2>
                </div>

                <div className='menuList'>
                    <div className='menuItem'>
                        <h4>chicken</h4>
                        <p>description</p>
                        <img  className='image' src='https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg' />
                    </div>
                </div>
            </div>
        </Container>
    )
}
