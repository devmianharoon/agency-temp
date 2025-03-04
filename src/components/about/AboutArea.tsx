import React from 'react';
import thumbOne from "../../../public/assets/img/about/02.png"
import Image from 'next/image';
import Link from 'next/link';
const AboutArea = () => {
    return (
        <>
            <div className="about-area pt-130 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-2-img">
                                    <Image src={thumbOne} alt="img-data" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-30">
                                <div className="about-1-wrapper">
                                    <div className="about-text">
                                        <span>who we are</span>
                                        <h1>More than 23+ years we provide <span>IT solutions </span></h1>
                                        <p>Sed ut perspiciatis unde omnis iste natus errorsit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo invetore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                        <p className="mt-20">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem </p>
                                    </div>
                                    <div className="about-button">
                                        <Link className="btn" href="/goals"><span className="btn-text">learn more <i className='fas fa-long-arrow-alt-right'></i></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default AboutArea;