import React from 'react'

const Header = () => {
    return (
        <>
        
            <header>
                <section className='container main-hero-container'>
                    <div className='row'>
                        <div className="col-12 col-lg-6 header-left-side  d-flex justify-content-center flex-column align-items-centre mt-20
                        order-lg-first order-last">
                            <h1 className='display-2'>
                                Online Payment Mode<br />Easy For You.
                            </h1>
                             <p className='main-hero-para '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, animi. Tempora ratione ex, aut officia dolor cum mollitia deleniti! Amet voluptates animi earum.</p>
                              <h3>Get early access for you</h3>
                               <div className='input-group mt-3'>
                              <input type="text"className='rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text' 
                                  placeholder='Enter Your Email ' 
                              />
                               <div className='input-group-button'>Get it now</div>
                              </div>
                              </div>
                              <div className='col-12 col-lg-6 header-right-side  d-flex justify-content-center  align-items-centre  main-herosection-images
                              order-md-first order-sm-first'>
                              <img src="https://th.bing.com/th/id/OIP.MigcIJVOgdgysSV0dh8PowHaE7?w=1100&h=800&c=7&r=0&o=5&dpr=1.5&pid=1.7 "  alt="ashu" />
                               
                              </div>
                    </div>
                    </section>
        </header>
        </>
    );
}

export default Header;
