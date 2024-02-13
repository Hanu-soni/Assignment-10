import React from 'react';
import offer1 from '../../img-2/offer1.png'
import offer2 from '../../img-2/offer1-1.png'
import offer3 from '../../img-2/offer1-2.png'
import offer4 from '../../img-2/offer1-3.png'

const Membership = () => {
    const data=[offer1,offer2,offer3,offer4]
  return (
    <div style={{
        marginTop: "3rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 20fr)",
        gap: "2rem", 
        
    }}>
        {data.map(item => (
            <img className='hero-img' src={item} alt="offer-img" />
        ))}
    </div>
    
  )
}

export default Membership