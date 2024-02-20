import React from 'react'
import navimg from '../../images/footer.png';
import './navbar.css';

const section1 = () => {
    return (
        <section className="heroContainer">
        <header className="header">
          <div className="header1">
            <div className="logo">
              <img
                className="logoIco"
                loading="eager"
                alt=""
                src={navimg}
              />
            </div>
            <input className="search" placeholder="Search For brand, category, coupon">
              {/* <img className="searchIcon" alt="" src="/search.svg" /> */}
            </input>
            <button className="btn btn btn-primary">
              <div className="loginSign">Login / Sign Up</div>
            </button>
          </div>
          <div className="menu">
            <div className="menus">
            
            <div className="menu1">
                <div className="home">Home</div>
              </div>
              <div className="menu2">
                <div className="deals">Deals</div>
                <img
                  className="dropDownIcon"
                  alt=""
                  src="/drop-down.svg"
                />
              </div>
              <div className="menu3">
                <div className="coupon">Coupon</div>
                <img
                  className="dropDownIcon1"
                  alt=""
                  src="/drop-down.svg"
                />
              </div>
              <div className="menu4">
                <div className="stores">Stores</div>
                <img
                  className="dropDownIcon2"
                  alt=""
                  src="/drop-down.svg"
                />
              </div>
              <div className="menu5">
                <div className="contactUs">Contact us</div>
              </div>
              


            </div>
          </div>
        </header>
        <img
          className="imageIcon"
          loading="eager"
          alt=""
          src="/image@2x.png"
        />
      </section>
    )
}


export default section1