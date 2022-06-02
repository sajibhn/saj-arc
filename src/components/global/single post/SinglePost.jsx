import React from "react";

const SinglePost = () => {
    return (
        <section id="single-post" className="container">
            <div className="post__img">
                <img src="./images/architecture/architecture-3.jpg" alt="" />
            </div>
            <div className="post__container grid">
                <div className="post__container__left">
                    <h2 className="featured__projects__title">featured</h2>
                    <h2 className="post__title">Henders Tragers Villa</h2>
                    <p className="post__description">
                        We propose creating a multifunctional space where you can make a
                        choice: either to retire or be together with everybody. The space,
                        clear of all unnecessary items, will take you to another dimension
                        and help you to get tuned to a calm repose. Lot’s of light and air.
                        <br /> <br />
                        In the center of the room there is a functional zoning volume, a
                        white cube, dividing the entire living room into 5 zones: active
                        pastime area, TV area, dressing area, secluded relaxation area and
                        the central area – relaxation area, located inside the white volume.
                    </p>
                </div>
                <div className="post__container__right">
                    <div className="post__details">
                        <h3>client</h3>
                        <p>insight studio</p>
                    </div>
                    <div className="post__details">
                        <h3>Date</h3>
                        <p>28 Aug 2019</p>
                    </div>
                    <div className="post__details">
                        <h3>Services</h3>
                        <p>Design, Art Direction, Website</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglePost;
