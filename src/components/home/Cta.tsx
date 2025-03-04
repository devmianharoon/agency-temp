import Link from 'next/link';
import React from 'react';

const Cta = () => {
    return (
        <>
            <div className="cta-area pt-125 pb-95" style={{ background: "url(assets/img/bg/bg-2.jpg)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-7">
                        <div className="cta-text mb-30">
                            <span>do you have any project ?</span>
                            <h1>Let’s Talk About Business Soluations With Us</h1>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5">
                        <div className="cta-button text-lg-right mb-30">
                            <Link className="btn join-button btn-white btn-none" href="/contact"><span className="btn-text">join with us <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                            <Link className="cta-link" href="tel:+81234578988" target='_blank'><i className="fa-sharp fa-solid fa-phone"></i> +812 (345) 789 88</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Cta;