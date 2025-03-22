import React from 'react';
import '../styles/ProductCard.css'; // Import CSS file

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h4>{product.name}</h4>
        <p>Commission: <span>{product.commission}%</span></p>
      </div>
    </div>
  );
};

export default ProductCard;
