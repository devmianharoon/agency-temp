import Image from "next/image";
import Link from "next/link";
import React from "react";
import flagLogo from "../../../public/assets/img/icon/flag.png";

const TopHeader = () => {
  return (
    <>
      <div className="header-top-area grey-bg d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-6 d-flex align-items-center">
              <div className="header-info">
                <span>
                  <i className="far fa-map-marker-alt"></i> 15 Hamston Street,
                  West
                </span>
                <span className="header-ph cta-link hover-white">
                  {" "}
                  <Link href="tel:+81234578988" target="_blank">
                    <i className="fa-sharp fa-solid fa-phone"></i> +812 (0345)
                    6789
                  </Link>{" "}
                </span>
                <span className="header-en hover-white">
                  {" "}
                  <Link href="mailto:support@gmail.com" target="_blank">
                    <i className="fas fa-envelope-open"></i> support@gmail.com
                  </Link>{" "}
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="header-right f-right">
                {/* <div className="header-lang  pos-rel f-right">
                                <div className="lang-icon">
                                    <Link className='lang-icon-img' href="/">
                                        <Image src={flagLogo} style={{ width: "100%", height: "auto" }} alt='flag'  />
                                    </Link>
                                    <Link className='mt-1' href="#">English <i className='fas fa-angle-down'></i></Link>
                                </div>
                                <ul className="header-lang-list">
                                    <li><Link href="#">USA</Link></li>
                                    <li><Link href="#">UK</Link></li>
                                    <li><Link href="#">CA</Link></li>
                                    <li><Link href="#">AU</Link></li>
                                </ul>
                            </div> */}
                <div className="header-icon f-right">
                  <Link href="https://www.facebook.com/">
                    <i className="fab fa-facebok-f"></i>
                  </Link>
                  <Link href="https://www.twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </Link>
                  <Link href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
