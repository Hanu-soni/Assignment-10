import React from 'react'
import prodimg from '../../images/amazon.png'

const product = ({ item }) => {
    console.log(item)
    return (
        <div style={{ width:"180px",overflow: "hidden", height: "220px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1), 0px 6px 6px rgba(0, 0, 0, 0.2)" }} class="card d-flex justify-content-center " >
            <div class=" cardCss">
                <center>
                    <p style={{ textWrap: "wrap" }} class="text-success">Upto 60% off on<br></br> Appliances.</p>
                    <img style={{ border: "none" }} className='img-fluid hero-img  rounded-top' src={prodimg} alt="PortfolioProjectImage" />

                    <p style={{ textAlign: "center", color: "grey" }} class="text-dark ">Upto 60% off on summer Appliances.</p>

                    <button className='btn btn-danger'>GRAB NOW</button>
                </center>



            </div>
        </div>
    )
}

export default product