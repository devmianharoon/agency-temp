"use client"
import React, { useState }  from 'react';
import ModalVideo from 'react-modal-video';
import imgVideo from "../../../public/assets/img/bg/c.jpg"
import Image from 'next/image';

const AboutVideo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(!isOpen);

    return (
        <div className="choose-wrapper">
            <ModalVideo channel='youtube' isOpen={isOpen} videoId='vWLcyFtni6U' onClose={() => { openModal(); }} />
            <div className="choose-text">
                <p>On the other hand we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment so blinded by desire that they cannot foresee the pain and trouble that are bound to ensue and equal blame belongs to those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly</p>
            </div>
            <div className="choose-img">
                <Image src={imgVideo} alt="" />
                <div className="choose-video">
                    <a className="popup-video" onClick={() => { openModal(); }}><i className='fas fa-play'> </i></a>
                </div>
            </div>
        </div>
    );
}

export default AboutVideo;