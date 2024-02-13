import React from 'react'
import './section8.css';
import img1 from '../../images/apple.png'
import img2 from '../../images/playstore.png'
import mobile from '../../images/mobile-1.png'
import mobile2 from '../../images/mobile-2.png'


const Main8 = () => {
    return (
        <div className='d-flex ' style={{ background: "pink" }}>
        <div className='row'>
            <div className='col-6'>
                <div className='d-flex flex-column gap-2 mt-5 ms-5'>
                    <div style={{ width: "269px", height: "144px" }}>
                        <div style={{ height: "70%" }} className='text-danger fw-bold fs-2'>
                            Want to be a part of our team
                        </div>
                        <div style={{ height: "30%" }} className='text-secondary fw-bold'>
                            Be a part of best site of discount coupons
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-5 bg-white'>
                            <div className='row'>
                                <div className='col-4'>
                                    <img className='hero-img' src={img1} alt="png"/>
                                </div>
                                <div className='col-8'>
                                    <span className='text-secondary fs-6'>Download From</span><br></br>
                                    <b>APP STORE</b>
                                </div>
                            </div>
                        </div>
                        <div className='col-2'></div>
                        <div className='col-5 bg-white '>
                            <div className='row'>
                                <div className='col-4'>
                                    <center>
                                        <img className='hero-img' src={img2} alt="png"/>
                                    </center>
                                </div>
                                <div className='col-8'>
                                    <span className='text-secondary fs-6'>Download From</span><br></br>
                                    <b>PLAY STORE</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-6'>
                    <img  style={{transform: "rotate(-15deg)"}} src={mobile}/>   
                    </div>
                    <div className='col-6'>
                    <img style={{transform: "rotate(-15deg)"}}src={mobile2}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Main8