import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/scss/modal-video.scss';
import { BsPlay } from 'react-icons/bs';


const Video = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <section className="video section">
            <div className="section__container container">
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="oyA7Ucnmje4" onClose={() => setOpen(false)} />

                <button className="btn-primary video__btn" onClick={() => setOpen(true)}>
                    <BsPlay />
                </button>
            </div>
        </section>
    )
}

export default Video