import React from 'react'
import salesimg from '../../images/headerimg.png'
import './section2.css'

const Salesimg = () => {
  return (
    <div className='center'>
      <img
        style={{
          maxWidth: '100%',
          height: 'auto',
          margin: 'auto',
          marginTop: '20px',
          borderRadius: '30px'
        }}
        src={salesimg}
        alt="Sales Image"
      />
    </div>

  )
}

export default Salesimg