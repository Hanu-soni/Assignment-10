import React from 'react'
import data from './data'

const Coupan = () => {
  return (
    <div style={{margin:"auto"}} className='coupan d-flex justify-content-center'>
            {
               data.map(item=>(
                <img className='border border-dark' src={item} alt="coupan-img"/>
               ))
            }


            </div>
  )
}

export default Coupan