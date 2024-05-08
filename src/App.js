import './App.css';
import React from 'react';
import restaurantMenu from './models/restaurantMenu';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Appetizers from './components/Appetizers';
import Salads from './components/Salads';
import Entrees from './components/Entrees';
import Desserts from './components/Desserts';
import Drinks from './components/Drinks';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Appetizers menu={restaurantMenu.appetizers} />
      <Salads menu={restaurantMenu.salads} />
      <Entrees menu={restaurantMenu.entrees} />
      <Desserts menu={restaurantMenu.desserts} />
      <Drinks menu={restaurantMenu.drinks} />
      <Footer />
    </div>
  );
}

export default App;
