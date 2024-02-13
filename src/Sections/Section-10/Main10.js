import React from 'react'
import Footer from './Footer'
import logo from '../../img-2/logo-1.png'
import img1 from '../../images/apple.png'
import img2 from '../../images/playstore.png'

const Main10 = () => {
  const footerData = [
    { id: 1, content: 'Footer Content 1', links: ['Link 1', 'Link 2', 'Link 3', 'Link 4'] },
    { id: 2, content: 'Footer Content 2', links: ['Link 5', 'Link 6', 'Link 7', 'Link 8'] },
    // Add more objects as needed
  ];
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#3e4551' }}>
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <img src={logo}/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                
                                <div className='col-4'>
                                    <img className='hero-img' src={img1} alt="png"/>
                                </div>
                                <div className='col-8'>
                                    <span className='text-secondary fs-6'>Download From</span><br></br>
                                    <b>APP STORE</b>
                                </div>
                                <div className='col-4'>
                                    <img className='hero-img' src={img2} alt="png"/>
                                </div>
                                <div className='col-8'>
                                    <span className='text-secondary fs-6'>Download From</span><br></br>
                                    <b>PLAY STORE</b>
                                </div>
                  
              </div>
              {footerData.map(footerItem => (

                <Footer key={footerItem.id} content={footerItem.content} links={footerItem.links} />
              ))}

              {/* Other columns go here */}
            </div>
          </section>

        </div>

      </footer>

    </div>
  )
}

export default Main10