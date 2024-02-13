import React from 'react'
import formimg from '../../img-2/form-img.png'
import './Main.css'

const main = () => {
  return (
    <div style={{margin:"auto"}} className='bg-light d-flex justify-content-center'>
        <div style={{width:"70%"}} className='row bg-white'>
            <div className='col-6'>
                <img className='hero-img' src={formimg}/>
            </div>
            <div className='col-6 d-flex flex-column justify-content-evenly'>
              <h2 className='mt-4'>Subscribe to our NewsLetter!</h2>
              <p>Be the first to get exclusive offers
                ands the latest news</p>
              <input style={{width:"80%",height:"3rem"}} className='border border-dark' type="email" placeholder='pankajsoni93444@gmail.com'></input>
              <button style={{width:"30%"}} className='btn btn-danger text-white'>Subscribe</button>

            </div>
        

        </div>
    </div>
  )
}

export default main