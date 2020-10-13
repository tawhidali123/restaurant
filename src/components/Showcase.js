import React from 'react'

function Showcase(props)
{
    return(
        <div className="showcase" style={{backgroundColor: "white", height: '100%', width: '72%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>

            <h2 style={{fontSize: '48px', fontWeight: '200', fontFamily: 'Kumbh Sans', marginTop: '54px', width: '65%', textAlign: 'left'}}>{ props.item.name }</h2>
            <div style={{height: '80%', display: 'flex', justifyContent: 'space-between', width: '65%'}}>
            <img style={{maxHeight: '50vh', marginRight: '36px', maxWidth: '30vw'}} src={ props.item.photoURL } />
            <div style={{width: '55%', display: 'flex', flexDirection: 'column'}}>
            <h4 style={{fontSize: '30px', fontWeight: '300'}}>{ props.item.description }</h4>
            <p style={{fontWeight: '200', fontSize: '24px'}}><i>{props.item.price ? `$${ props.item.price }` : null}</i></p>
            </div>
            </div>

      </div>
    )
}

export default Showcase