import Link from "next/link";
import React from "react";

const CtaTwo = () => {
  return (
    <>
      <div
        className="cta-area pt-125 pb-95"
        style={{ background: "url(assets/img/bg/bg-2.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="cta-text mb-30">
                <span>do you have any project ?</span>
                <h1>{`Let’s`} Talk About Business Soluations With Us</h1>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="cta-button text-lg-right mb-30">
                <Link
                  className="btn btn-white join-button btn-none"
                  href="/contact"
                >
                  <span className="btn-text">
                    contact us <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
                <Link
                  className="btn btn-white join-button btn-none btn-margin"
                  href="/contact"
                >
                  <span className="btn-text">
                    join with us <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
