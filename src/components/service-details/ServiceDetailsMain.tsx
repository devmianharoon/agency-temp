import { servicesData } from '@/data/services-data';
import { idType } from '@/interFace/interFace';
import Image from 'next/image';
import React from 'react';
import blogTwo from "../../../public/assets/img/blog/blog-2.jpg";
import ServiceSidebar from './ServiceSidebar';
import FaqContent from '@/sheardComponent/elements/FaqContent';
const ServiceDetailsMain = ({ id }: idType) => {
    const service:any = servicesData.find((item)=> item.id == id)
    return (
        <>
             <section className="bd-service-details-area pt-150 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="bd-service-details mb-50">
                                <div className="bd-service-details-img mb-50">
                                    <Image src={service.banner} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                </div>
                                <p className="mb-30">When I skim through the documentation of popular frameworks, I find the features described in Part 1 straight away. When I read the web platform documentation (for example, on MDN), I find many confusing patterns of how to do things, without a conclusive representation of data-binding, list synchronization, or reactivity. I will try to draw some guidelines of how to approach these problems on the web platform, without requiring a framework (in other words, by going vanilla).</p>
                              
                                <h4 className="mb-25">{service.serviceTitle}</h4>
                                <p className="mb-30">When an unknown printer took a galley of type and scrambled it to make a type specimen book has been survived not only five centuries, but also the leap into electronic typesetting.</p>
                                <div className="row pb-10">
                                    <div className="col-xl-5 col-lg-6">
                                        <div className="bd-service-details-feature mb-30">
                                            <h5 className="mb-20">Finished Check Steps</h5>
                                            <ul>
                                                <li><i className="far fa-check"></i> Assets Optimizations</li>
                                                <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                                <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                                <li><i className="far fa-check"></i> Laravel Structure</li>
                                                <li><i className="far fa-check"></i> Assets Optimizations</li>
                                                <li><i className="far fa-check"></i> Setting Realistic Goals Set</li>
                                                <li><i className="far fa-check"></i> Delivery Optimizations</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6">
                                        <div className="bd-service-details-feature-img mb-30">
                                            <Image src={blogTwo} style={{ width: "100%", height: "auto" }} alt="img not found" />
                                        </div>
                                    </div>
                                </div>
                                <h4 className="mb-30">FAQ on the Service</h4>
                                <FaqContent/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <ServiceSidebar/>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    );
};

export default ServiceDetailsMain;