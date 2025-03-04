"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import videoImg from "../../../public/assets/img/bg/video.jpg";
import Image from "next/image";
import Link from "next/link";
const Video = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(!isOpen);

  return (
    <>
      <div
        className="video-area pt-130"
        style={{ background: "url(assets/img/bg/bg-4.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="vWLcyFtni6U"
              onClose={() => {
                openModal();
              }}
            />
            <div className="col-xl-7 col-lg-7 mb-30">
              <div className="video-img">
                <Image  style={{ width: "100%", height: "auto" }} src={videoImg} alt="" />
                <div className="video-icon">
                  <Link
                    href=""
                    className="popup-video"
                    onClick={() => {
                      openModal();
                    }}
                  >
                    <i className="fas fa-play"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 mb-30">
              <div className="video-wrapper">
                <div className="section-title section-title-white">
                  <span className="b-sm-left-1"></span>
                  <span className="b-sm-left-2"></span>
                  <span className="sub-t-left">latest video</span>
                  <h1>Watch Our Latest Videos Program</h1>
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denoun cing pleasure and praising pain was born and I will
                    giv complete account of the system, and expound the actual
                    teachings of the great explorer of the truth the
                    master-builder of
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
