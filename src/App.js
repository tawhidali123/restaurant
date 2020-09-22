import React from 'react';
// import {Route, Switch} from 'react-router-dom'; // include Link

// import Home from './components/Home.js'
// import Menu from './components/Menu.js'


function App() 
{
  return (

    // <div>
    //   <Switch>
    //     <Route path="/home" render={ (routerProps) => <Home routerProps={routerProps}/> }/>
    //     <Menu />
    //   </Switch>
    // </div>

    <div style={{backgroundColor: "rgba(255, 255, 255, 0.2)", width: "calc(100% - 32px)", height: "calc(100vh - 32px)", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

      <div className="sidebar" style={{backgroundColor: "white", height: '100%', width: '26%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

        <h1 style={{fontFamily: 'Poppins', fontWeight: '500', letterSpacing: '13px', textAlign: 'center', fontSize: '36px', margin: '0 0 12px 0', borderBottom: '1px solid black'}}><b>me</b>nuvers<b>al</b></h1>

        <div style={{width: '90%', height: '80%', fontFamily: 'Kumbh Sans', padding: '18px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>

          <div style={{marginBottom: '32px'}}>
            <b style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>Appetizers</b>
          </div>
          <div style={{marginBottom: '32px'}}>
            <b style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>Entrees</b>
            <p style={{marginLeft: '24px', color: 'white', backgroundColor: 'black', width: 'auto', padding: '2px 4px'}}>Chicken Cacciatore</p>
            <p style={{marginLeft: '24px'}}>Shrimp Alfredo</p>
            <p style={{marginLeft: '24px'}}>Garlic Pernil</p>
          </div>
          <div style={{marginBottom: '32px'}}>
            <b style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>Desserts</b>
          </div>
          <div style={{marginBottom: '32px'}}>
            <b style={{fontSize: '28px', marginLeft: '12px', fontWeight: '500'}}>Drinks</b>
          </div>

        </div>

      </div>

      <div className="showcase" style={{backgroundColor: "white", height: '100%', width: '72%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}>

        <h2 style={{fontSize: '48px', fontWeight: '200', fontFamily: 'Kumbh Sans', marginTop: '54px', width: '65%', textAlign: 'left'}}>Chicken Cacciatore</h2>
        <div style={{height: '80%', display: 'flex', justifyContent: 'space-between', width: '65%'}}>
          <img style={{height: '70vh', marginRight: '36px'}} src="https://40aprons.com/wp-content/uploads/2019/12/paleo-gluten-free-chicken-piccata-9.jpg" />
          <div style={{width: '55%', display: 'flex', flexDirection: 'column'}}>
            <h4 style={{fontSize: '30px', fontWeight: '300'}}>a savory cut of roasted chicken covered in a decadent cream made from peas, spices, and pork fat</h4>
            <p style={{fontWeight: '200', fontSize: '24px'}}><i>$22</i></p>
          </div>
        </div>

      </div>

    </div>

  )
}

export default App;
