import  "./Main.css";
import formImg from '../../img-2/form-img.png'

const Section6 = () => {
  return (
    <section className="terms">
      <div className="newsLetter">
        <div className="ul">
          <div className="ulChild" />
          <img
            className="formImgIcon"
            loading="eager"
            alt=""
            src={formImg}
          />
          <div className="content">
            <div className="texts">
              <h1 className="subscribeToOurContainer">
                <p className="subscribeToOur">Subscribe to our</p>
                <p className="newsletter">Newsletter!</p>
              </h1>
              <div className="beTheFirstContainer">
                <p className="beTheFirst">
                  Be the first to get exclusive offers
                </p>
                <p className="andsTheLatest">ands the latest news</p>
              </div>
            </div>
            <div className="email">
              <div className="textBox">
                <div className="enterYourEmail">
                  Enter your email address
                </div>
              </div>
              <div className="btn">
                <div className="subscribe">SUBSCRIBE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  };

export default Section6;
