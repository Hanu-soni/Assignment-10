import  "./section7.css";
import mobile from '../../img-2/Phone.png'

const Main7 = () => {
  return (
    <div className="applicationDownload">
      <div className="bg" />
      <div className="dropdownMenuItems">
        <div className="content">
          <div className="texts">
            <h1 className="wantToBe">Want to be a part of our team</h1>
            <div className="beAPart">
              Be a part of best site of discount coupons
            </div>
          </div>
          <div className="btns">
            <div className="btn">
              <img
                className="image64Icon"
                loading="eager"
                alt=""
                src={mobile}
              />
              <div className="t">
                <div className="downloadFrom">Download From</div>
                <div className="appStore">App Store</div>
              </div>
            </div>
            <div className="btn1">
              <img
                className="image64Icon1"
                alt=""
                src={mobile}
              />
              <div className="t1">
                <div className="downloadFrom1">Download From</div>
                <div className="playStore">Play Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ulListContainer">
        <div className="liArrowContainer">
          <img
            className="phoneIcon"
            loading="eager"
            alt=""
            src={mobile}
          />
          <img className="phoneIcon1" alt="" src={mobile}/>
        </div>
      </div>
    </div>
  );
  }

export default Main7;