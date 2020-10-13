import React from 'react'
import Sidebar from './components/Sidebar'
import Showcase from './components/Showcase'

const menu = 
{
  Appetizers: 
  [
    {
      name: 'GARLIC MASHED POTATOES',
      priceInDollars: 16,
      description: 'The taste of comfort is given Southern Brazilian flair with roasted garlic, drawn butter, cracked pepper, and fresh chives.',
      photoURL: 'https://i2.wp.com/grandbaby-cakes.com/wp-content/uploads/2019/09/Garlic-Mashed-Potatoes-Recipe-1-500x375.jpg'
    },
    {
      name: 'PÃO DE QUEIJO',
      priceInDollars: 13,
      description: 'Warm, soft cheesy bread rolls are served throughout the entire meal. Our irresistible homemade recipe from São Paulo can’t be missed. These rolls are naturally gluten-free.',
      photoURL: 'https://i.pinimg.com/originals/cb/c4/06/cbc406ae3d5dcec7ebc30b05054afab7.jpg'
    },
    {
      name: 'FAROFA',
      priceInDollars: 22,
      description: 'A staple of many meals in Brazil, farofa is yuca flour that is sautéed with bacon, sausage and light seasonings. Perfect complement to churrasco.',
      photoURL: 'https://www.kitchenbutterfly.com/wp-content/uploads/2015/04/16948776979_aa62fc5eca_c.jpg'
    }
  ],
  Entrees:
  [
    {
      name: 'Chicken Cacciatore',
      priceInDollars: 22,
      description: 'a savory cut of roasted chicken covered in a decadent cream made from peas, spices, and olive oil',
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
      description: 'roasted beef that balances juicy on the inside with crispy on the outside, characterized by a light sweetness and strong garlic undertones',
      photoURL: 'https://diversedinners.com/wp-content/uploads/2018/12/Pernil-6060.jpg'
    }
  ],
  Desserts:
  [
    {
      name: 'Trio Ice Cream',
      priceInDollars: 13,
      description: 'made with extra cream for an unforgettable flavor bite after bite',
      photoURL: 'https://exhibitorsearch.messefrankfurt.com/images/large/userdata/bata/160529/5a675fb1d9535.jpg'
    },
    {
      name: 'Vanilla Ice cream',
      priceInDollars: 8,
      description: 'made with extra cream for an unforgettable flavor bite after bite',
      photoURL: 'https://static.toiimg.com/thumb/54677722.cms?imgsize=134423&width=800&height=800'
    },
    {
      name: 'Chocolate Ice cream',
      priceInDollars: 8,
      description: 'made with extra cream for an unforgettable flavor bite after bite',
      photoURL: 'https://bakingamoment.com/wp-content/uploads/2019/08/IMG_5627-chocolate-ice-cream.jpg'
    }
  ],
  Drinks: 
  [
    {
      name: 'Pepsi',
      priceInDollars: 4,
      description: 'Cola Drink',
      photoURL: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pepsi-1568232214.jpg'
    },
    {
      name: 'Sprite',
      priceInDollars: 4,
      description: 'Lemon-Lime Drink',
      photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWdVLa7CXs0M15dtTyHwm9sgVLbUMuYJi23Q&usqp=CAU'
    },
    {
      name: 'Fanta',
      priceInDollars: 4,
      description: 'Orange Flavored Soda',
      photoURL: 'https://brandstruck.co/wp-content/uploads/2017/01/fanta-logo.jpg'
    }
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
