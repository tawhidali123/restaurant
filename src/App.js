import React from 'react'
import Sidebar from './components/Sidebar'
import Showcase from './components/Showcase'

const menu = 
{
  Appetizers: 
  [
    
  ],
  Entrees:
  [
    {
      name: 'Chicken Cacciatore',
      priceInDollars: 22,
      description: 'a savory cut of roasted chicken covered in a decadent cream made from peas, spices, and pork fat',
      photoURL: 'https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg'
    },
    {
      name: 'Shrimp Alfredo',
      priceInDollars: 19,
      description: 'creamy and savory, this shrimp dish blends bites of umami-filled flavor with carefully cooked al dente pasta',
      photoURL: 'https://www.willcookforsmiles.com/wp-content/uploads/2019/07/Shrimp-Alfredo-3-1.jpg'
    },
    {
      name: 'Garlic Pernil',
      priceInDollars: 32,
      description: 'roasted pork that balances juicy on the inside with crispy on the outside, characterized by a light sweetness and strong garlic undertones',
      photoURL: 'https://diversedinners.com/wp-content/uploads/2018/12/Pernil-6060.jpg'
    }
  ],
  Desserts:
  [

  ],
  Drinks: 
  [

  ]
}

class App extends React.Component
{

  state = 
  {
    menu,
    selectedCategory: '',
    selectedItem: ''
  }

  selectCategory = (category) =>
  {
    this.setState(
    {
      selectedCategory: category
    })
  }

  selectItem = (item) =>
  {
    this.setState(
    {
      selectedItem: item
    })
  }

  render()
  {
    return (
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.2)", width: "calc(100% - 32px)", height: "calc(100vh - 32px)", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Sidebar menu={ this.state.menu } selectCategory={ this.selectCategory } selectItem={ this.selectItem }></Sidebar>
        <Showcase menu={ this.state.menu } item={ this.state.selectedItem }></Showcase>
      </div>
    )
  }

}

export default App
