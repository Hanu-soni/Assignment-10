import React from 'react'
import navimg from '../../images/footer.png';

const section1 = () => {
    return (
        <div>
        <nav className='mt-3'>
        
                <form style={{width:"100%"}} class="d-flex justify-content-evenly flex-row">
                <img src={navimg} alt="Logo" width="60" height="24" />
                    <input style={{width:"40%"}} class="form-control me-2" type="search" placeholder="Search" />
                        <button style={{width:"15%",backgroundColor:"#F01C21;"}} class="btn btn-danger text-white fw-bold" type="submit">Login/Signup</button>
                </form>
            
        </nav>
        </div >
        
    )
}

export default section1