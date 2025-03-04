import Link from 'next/link';
import React from 'react';
import aboutImg from "../../../public/assets/img/about/about.jpg"
import aboutTwo from "../../../public/assets/img/about/01.png"
import Image from 'next/image';
const About = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
            <div className="container">   
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-text">
                            <span>who we are</span>
                            <h1>More than 23+ years we provide <span>IT solutions </span></h1>
                            <p>Sedut perspiciatis unde omnis iste natus error sitlupt tem accusantium doloremque laudantium totam    remap eriaeaque ipsa quae ab illo inventore veritatis </p>
                            <Link href="/service-1">Our Services <i className='fas fa-long-arrow-alt-right'></i></Link>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-img">
                            <Image src={aboutImg} style={{ width: "100%", height: "auto" }} alt="about-img" />
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 mb-30">
                        <div className="about-content">
                            <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete acount of the system, and expound the actual teacings of the great explorer of the truth, titer-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter</p>
                            <div className="about-1-img">
                                <Image src={aboutTwo} style={{ width: "auto", height: "auto" }} alt="about-img" />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        </>
    );
};

export default About;