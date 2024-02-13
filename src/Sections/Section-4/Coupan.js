import React from 'react'
import data from './data'

const Coupan = () => {
  return (
    <div className='coupan'>
            {
               data.map(item=>(
                <img src={item} alt="coupan-img"/>
               ))
            }


            </div>
  )
}

export default Coupan