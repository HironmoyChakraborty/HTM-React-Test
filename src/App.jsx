import React, { useState } from 'react';
import './App.css'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PropertyList from './components/PropertyList/PropertyList';
import propertiesData from './data/properties.json';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('');

  const handleSearch = () => {
    setFilter(inputValue);
  };

  const filteredProperties = propertiesData.filter(
    property => property.name.toLowerCase().includes(filter.toLowerCase()) ||
                property.description.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <div className='searchbar'>
        <h1>Check Availability and Book Now</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          placeholder="Search properties"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {filteredProperties.length > 0 ? (
        <PropertyList properties={filteredProperties} />
      ) : (
        <h1>No properties match your search criteria.</h1>
      )}
      <Footer />
    </div>
  );
}

export default App;
