import React from 'react'
import ItemCategory from './ItemCategory'

class Sidebar extends React.Component
{

    state = 
    {
        activeCategory: ''
    }

    makeActive = (category) =>
    {

        this.setState(
        {
            activeCategory: category
        }, () => 
        {
            this.props.selectCategory(category)
        })

    }

    render()
    {
        return(
            <div className="sidebar" style={{backgroundColor: "white", height: '100%', width: '26%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <h1 style={{fontFamily: 'Poppins', fontWeight: '500', letterSpacing: '13px', textAlign: 'center', fontSize: '36px', margin: '0 0 12px 0', borderBottom: '1px solid black'}}><b>me</b>nuvers<b>al</b></h1>
                <div style={{width: '90%', height: '80%', fontFamily: 'Kumbh Sans', padding: '18px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                    { 
                        Object.keys(this.props.menu).map((k) => 
                        {
                            return <ItemCategory selectItem={ this.props.selectItem } makeActive={ this.makeActive } active={ this.state.activeCategory } menu={ this.props.menu } category={ k }/>
                        }) 
                    }  
                </div>
            </div>
        )
    }

}

export default Sidebar