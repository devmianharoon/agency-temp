import { casesData } from "@/data/case-data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCase = () => {
  return (
    <>
      <div className="case-area pt-120 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 offset-lg-3 offset-xl-3">
              <div className="section-title text-center ml-50 mr-50 mb-80">
                <span className="border-left-1"></span>
                <span>our project</span>
                <span className="border-right-1"></span>
                <h1>Our Latest Case Studies</h1>
              </div>
            </div>
          </div>
          <div className="row">
            {casesData?.slice(0,6)?.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                <div className="case-wrapper mb-30">
                  <div className="case-img">
                    <Link href="/case-details">
                      <Image
                        style={{ width: "100%", height: "auto" }}
                        src={item.img}
                        alt="case-img"
                      />
                    </Link>
                  </div>
                  <div className="case-text">
                    <span> {item.subText} </span>
                    <h3>
                      <Link href="/case-details">{item.titleTwo}</Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestCase;
