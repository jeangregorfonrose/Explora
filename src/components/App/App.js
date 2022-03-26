import React from 'react';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

var business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
];

export default class App extends React.Component {

  searchYelp(term,location,sortBy){
    console.log(`Search: ${term}, ${location}, ${sortBy}.`);
  }

  render () {
    return (
      <div className="App">
        <h1>Explora</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList businesses={businesses} /> 
      </div>
    );
  }
}
