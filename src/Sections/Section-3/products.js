import React from 'react';
import data from './data';
import Product from './product';
import './section3.css'

const products = () => {
    return (
        <div style={{margin:"auto"}} className='container'>
        
                <div className="products container">
                    {
                        data.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </div>

            
        </div>

    )
}

export default products