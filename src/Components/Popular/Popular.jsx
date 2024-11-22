import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import "./Popular.css";

const Popular = () => {
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {  // Add i (index) here
                    return (
                        <Item 
                        key={i}   // Now 'key' is correctly using 'i'
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                        
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
