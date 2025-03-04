import { caseDataType } from "@/interFace/interFace";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import thumbImg from "../../../public/assets/img/project/case-details.jpg"
import SocilaLinks from "@/utils/SocilaLinks";
interface propsType {
  data: caseDataType | any;
}
 
const CaseDeailsContent = ({ data }: propsType) => {
  return (
    <>
      <div className="case-details-area pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="case-details-wrapper">
                <div className="case-details-img">
                  <Image
                    style={{ width: "100%", height: "auto" }}
                    src={thumbImg}
                    alt="case-img"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5 col-lg-5 mb-30">
                  <div className="case-details-text">
                    <h1> {data?.title} </h1>
                    <span>{data?.details}</span>
                    <div className="case-post-tag">
                      <span>Project Tags :</span>
                      <Link href="/blog">IT,</Link>
                      <Link href="/blog">Management,</Link>
                      <Link href="/blog">Strategy,</Link>
                      <Link href="/blog">Product Design</Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 mb-30">
                  <div className="case-details-content">
                    <p>
                      Must explain to you how all this mistaken idea denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in
                      which toil and pain can procure him some great pleasure.{" "}
                    </p>
                    <div className="case-share-icon">
                      <span>Project Share :</span>
                      <SocilaLinks/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gallery-layout-bg mt-55">
                <div className="gallery-layout-info">
                  <span>Case Name</span>
                  <h5>IT Consultancy</h5>
                </div>
                <div className="gallery-layout-info">
                  <span>Category</span>
                  <h5>Product Design</h5>
                </div>
                <div className="gallery-layout-info">
                  <span>Date</span>
                  <h5>10 Sep 2019</h5>
                </div>
                <div className="gallery-layout-info">
                  <span>Clients</span>
                  <h5>BDevs Ltd</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDeailsContent;
