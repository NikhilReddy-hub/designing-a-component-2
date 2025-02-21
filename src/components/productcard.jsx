// write product card here
import React from 'react';
import Button from '../components/button';

const Productcard = () => {
  const productImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU5M2BIj8uLwu-m6bhQ39vXZ26ne8dQqnSTw&s';
  const productName = 'Cricket Bat';
  const productPrice = '$100';

  return (
    <div className="card">
      <img src={productImage} alt={productName} />
      <h2>{productName}</h2>
      <p>Price: {productPrice}</p>
      <Button />
    </div>
  );
};

export default Productcard;