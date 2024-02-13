import React from 'react'
import Product from './product'
import data from './data'

const BestDealPro = () => {
    const filterdata = data.filter((item, index) => index < 4);

  return (
    <div className='mt-5 d-flex justify-content-center'>
        <center>
            <h3>Deals of the day</h3>
            <div className='bestdeal'>
            {
               filterdata.map(item=>(
                <Product key={item.id} item={item}/>
               ))
            }


            </div>
            {/* <div className="products">
                    {
                        data.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </div> */}
            
        </center>

    </div>
  )
}

export default BestDealPro