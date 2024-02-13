import React, { useState } from 'react'
import Coupan from './Coupan';
import '../Section-3/section3.css';
import Product from '../Section-3/product';
import data from '../Section-3/data';


const CoupanMain = () => {
    const filterdata = data.filter((item, index) => index < 4);

  return (
    <div style={{margin:"auto"}} className='bg-light d-flex justify-content-center mt-4'>
    <center><h3>Coupan By Categories</h3>
        <div className='bg-white mt-4'>
           <Coupan/>
           <div className='bestdeal'>
            {
               filterdata.map(item=>(
                <Product key={item.id} item={item}/>
               ))
            }


            </div>
        </div>
    </center>
        

        
    </div>
  )
}

export default CoupanMain