import Offer from "../../Components/Offer";
import R1 from "../../Components/R1";
import  "./section2.css";

const Section2 = () => {
  return (
    <section className="arrowSymbol">
      <div className="breadcrumbTrail">
        <div className="pagination">
          <div className="mainContentArea" />
          <div className="aboutUs">
            <div className="footerInfo"/>
            <div className="listContainer"/>
          </div>
        </div>
        <div className="sectionTitle">
          <div className="t">
            <img className="trophyIcon" alt="" src="/trophy.svg" />
            <div className="popularCoupons">Popular Coupons</div>
          </div>
          <div className="t1">
            <img className="timerIcon" alt="" src="/timer.svg" />
            <div className="endingSoon">Ending Soon</div>
          </div>
          <div className="t2">
            <img className="hotIcon" alt="" src="/hot.svg" />
            <div className="latestCoupons">Latest Coupons</div>
          </div>
        </div>
      <div className="tableRow">
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
        <Offer />
      </div>
      </div>
      <div className="parentContainer">
        <div className="pagination1">
          <div className="compartment"/>
          <div className="aboutUs1">
            <div className="menuHeader"/>
            <div className="dropdownList"/>
          </div>
        </div>
      </div>
      <div className="accordionList">
        <h1 className="dealsOfThe">Deals Of The Day</h1>
        <div className="searchBar"/>
      </div>
      <div className="logoContainer">
        {/* <R1 /> */}
      </div>
      <div className="parentContainer1">
        <div className="pagination2">
          <div className="paginationChild"/>
          <div className="aboutUs2">
            <div className="aboutUsChild"/>
            <div className="aboutUsItem"/>
          </div>
        </div>
      </div>
      <div className="couponByCategories">
        <div className="couponByCategoriesParent">
          <h1 className="couponByCategories1">Coupon By Categories</h1>
          <div className="frameChild"/>
        </div>
        <div className="allCategoriesParent">
          <div className="allCategories">
            <div className="cat">
              <img
                className="fashionIcon"
                alt=""
                src="/fashion@2x.png"
              />
              <div className="fashion">Fashion</div>
            </div>
            <div className="cat1">
              <img className="foodIcon" alt="" src="/food@2x.png" />
              <div className="food">Food</div>
            </div>
            <div className="cat2">
              <img
                className="beautyCareIcon"
                alt=""
                src="/beauty-care@2x.png"
              />
              <div className="beauty">Beauty</div>
            </div>
            <div className="cat3">
              <img className="toysIcon" alt="" src="/toys@2x.png" />
              <div className="toys">Toys</div>
            </div>
            <div className="cat4">
              <img
                className="hostingIcon"
                alt=""
                src="/hosting@2x.png"
              />
              <div className="cloud">Cloud</div>
            </div>
            <div className="cat5">
              <img className="gamingIcon" alt="" src="/gaming@2x.png" />
              <div className="gaming">Gaming</div>
            </div>
            <div className="cat6">
              <img className="mobileIcon" alt="" src="/mobile@2x.png" />
              <div className="phones">Phones</div>
            </div>
            <div className="cat7">
              <img className="travelIcon" alt="" src="/travel@2x.png" />
              <div className="travel">Travel</div>
            </div>
            <div className="cat8">
              <img className="moviesIcon" alt="" src="/movies@2x.png" />
              <div className="movies">Movies</div>
            </div>
          </div>
          <div className="row">
            {/* <R1
              propFlex="unset"
              propAlignSelf="stretch"
              propBorder="unset"
              propBorder1="unset"
              propBorder2="unset"
              propBorder3="unset"
            /> */}
            <div className="pagination3">
              <div className="termsOfUse"/>
              <div className="aboutUs3">
                <div className="amazonOffer"/>
                <div className="amazonOffer1"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offer">
        <img
          className="image10Icon"
          loading="eager"
          alt=""
          src="/image-10@2x.png"
        />
      </div>
    </section>
  )
  }

export default Section2;