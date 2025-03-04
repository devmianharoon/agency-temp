import Link from 'next/link';
import React from 'react';

const ServiceSidebar = () => {
    return (
        <div className="bd-service-sidebar mb-50">
            <div className="bd-service-widget gray-bg mb-30">
                <div className="bd-service-sidebar-category">
                    <h5 className="bd-service-sidebar-category-title mb-25">Category</h5>
                    <ul>
                        <li><Link href="/service-1">Web Development <i className="far fa-chevron-right"></i></Link></li>
                        <li><Link href="/service-1">Creative Design <i className="far fa-chevron-right"></i></Link></li>
                        <li><Link href="/service-1">Consultancy <i className="far fa-chevron-right"></i></Link></li>
                        <li><Link href="/service-1">Content Writing <i className="far fa-chevron-right"></i></Link></li>
                        <li><Link href="/service-1">SEO Optimization <i className="far fa-chevron-right"></i></Link></li>
                        <li><Link href="/service-1">Digital Marketing <i className="far fa-chevron-right"></i></Link></li>
                    </ul>
                </div>
            </div>
            <div className="bd-service-widget heading-bg">
                <div className="bd-service-sidebar-support text-center pt-30 pb-30">
                    <h5 className="bd-service-sidebar-support-title mb-30">Need support to this <br />service?</h5>
                    <div className="bd-service-sidebar-support-btn">
                        <Link href="/contact" className="btn">
                            <span className='btn-text'>Contact US</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;