import React from 'react';
import "./PropertyCard.css";

function PropertyCard({ property }) {
  const url = () => `${process.env.PUBLIC_URL}/assets/${property.name}.jpg`;

  return (
    <div className="property-card">
      <img src={url()} alt={property.name} />
      <div className="property-info">
        <h2 style={{margin:"8px 8px", fontSize: "x-large"}}>{property.name}</h2>
        <p style={{color: 'GrayText', fontFamily:'cursive', margin:"8px 8px"}}>{property.description}</p>
      </div>
      <div className="button-container" style={{margin:"0 8px"}}>
        <button>Book now</button>
      </div>
    </div>
  );
}

export default PropertyCard;
