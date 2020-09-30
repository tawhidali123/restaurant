import React from "react"

class ItemCategory extends React.Component
{

    state = 
    {
        activeItem: ''
    }

    handleCategoryClick = (category) =>
    {

        this.props.makeActive(category)

    }

    handleItemClick = (item) =>
    {
        this.setState(
        {
            activeItem: item
        }, this.props.selectItem(item))
    }

    render()
    {

        return(
            <div style={{marginBottom: '32px'}}>
                <b onClick={ () => {this.handleCategoryClick(this.props.category)} } style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>{this.props.category}</b>
                {
                    this.props.active === this.props.category 
                    ? 
                    this.props.menu[this.props.active].map((item) => 
                    {
                        return <p onClick={ () => { this.handleItemClick(item) } } style={this.state.activeItem === item ? {marginLeft: '24px', color: 'white', backgroundColor: 'black', width: 'auto', padding: '2px 4px'} : {marginLeft: '24px'}}>{ item.name }</p>
                    })
                    :
                    null
                }
            </div>
        )

    }

}

export default ItemCategory

{/* <div style={{marginBottom: '32px'}}>
    <b style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>Entrees</b>
    <p style={{marginLeft: '24px', color: 'white', backgroundColor: 'black', width: 'auto', padding: '2px 4px'}}>Chicken Cacciatore</p>
    <p style={{marginLeft: '24px'}}>Shrimp Alfredo</p>
    <p style={{marginLeft: '24px'}}>Garlic Pernil</p>
</div> */}