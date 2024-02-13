import React from 'react'
import data from './data'

const section2 = () => {
    return (
        <>
             <nav className="d-flex  flex-row justify-content-center gap-2">
      <div>
        
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
        </>
    )
}

export default section2