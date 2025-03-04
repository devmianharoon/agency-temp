import React from 'react';

const Newsletter = () => {
 
    return (
        <div className="newsletter-area pt-75 pb-40" style={{ background: "url(assets/img/bg/bg-5.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-5 mb-30">
                        <div className="newsletter-text">
                            <h1>Subscribe Our Newsletter <br/> To Get More Update</h1>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 mb-30">
                        <div className="single-newsletters">
                            <div className="newsletter-form">
                                <div className='d-flex input-wrapper justify-content-around'>
                                    <input type="email" placeholder='Your Email' />
                                    <button className='mb-1'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;