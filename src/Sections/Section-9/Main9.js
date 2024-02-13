import React from 'react'
import LeftImg from './LeftImg'
import RightTable from './RightTable'

export const Main9 = () => {
  return (
    <div>
        <div className='row'>
            <div className='col-4'>
                <LeftImg/>
            </div>
            <div className='col-8'>
                <h3>Popular Categories</h3>
                <RightTable/>
            </div>
        </div>
    </div>
  )
}
