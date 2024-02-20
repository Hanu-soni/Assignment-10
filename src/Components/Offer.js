import styles from "./Offer.css";
import amazon from '../img-2/amazon.png'

const Offer = () => {
  return (
    <div className="offer1">
      <div className="upto60OffOnAppliancesParent">
        <div className="upto60OffContainer">
          <p className="upto60Off">Upto 60% off on</p>
          <p className="appliances">Appliances</p>
        </div>
        <img
          className="image12Icon"
          loading="eager"
          alt=""
          src={amazon}
        />
        <div className="upto60Off1">
          Upto 60% off on summer Appliances
        </div>
      </div>
      <div className="btn">
        <div className="grabNow">Grab now</div>
      </div>
    </div>
  );
  }

export default Offer;