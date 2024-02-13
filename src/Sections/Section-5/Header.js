import React from 'react';
import img from '../../img-2/headerglass.jpeg'

const Header = () => {
  return (
    <div style={{margin:"auto"}} className='d-flex justify-content-center'>
        <img src={img}/>
    </div>
  )
}

export default Header