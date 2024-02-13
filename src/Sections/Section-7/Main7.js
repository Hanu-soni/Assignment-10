import React from 'react';
import data from './data';
import './section7.css'

const Main7 = () => {
   

  return (
    <div className='bg-light'>
        <center><h3>How it works?</h3></center>
        <div style={{width:"100%"}} className='bg-white d-flex flex-row justify-content-evenly'>
            {
                data.map(item=>(
                    <div style={{width:"20%"}} className='card bg-white '>
                        <center>
                        <div className='card-img mt-3'>
                        <img style={{height:"20px",width:"20px"}} src={item.img} alt="vector-img"/><br></br>
                        </div>
                        <b>{item.title}</b><br></br>
                        <p>{item.para}</p>
                        </center>

                    </div>
                ))
            }
            
        </div>


    </div>
  )
}

export default Main7