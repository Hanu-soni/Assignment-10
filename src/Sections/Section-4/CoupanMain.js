import React, { useState } from 'react'
import Coupan from './Coupan';
import '../Section-3/section3.css';
import Card from '../../Components/Card'
import data from '../Section-3/data';


const CoupanMain = () => {
  const filterdata = data.filter((item, index) => index < 4);

  return (
    <div  className='bg-light  mt-5'>

    <center><h3>Coupan By Categories</h3></center>
     <Coupan/>
     
    



      <div className='d-flex justify-content-center'>
      <div className='products'>
        {
          filterdata.map(item => (
            <Card key={item.id} item={item} />
          ))
        }



      </div>

      </div>

    
      

      



    </div>
  )
}

export default CoupanMain