import React, { useEffect, useState } from 'react';
import './NewCollections.css';

import Item from '../Item/Item';

const NewCollections = () => {
  const [new_collection, setNew_Collection] = useState([]);

  useEffect(() => {
    fetch('https://shopper-e-commerce-website-jheh.onrender.com')  // Update this to your Render backend URL
      .then((response) => response.json())
      .then((data) => setNew_Collection(data));
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default NewCollections;
