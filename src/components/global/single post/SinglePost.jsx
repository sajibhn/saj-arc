import React from "react";
import Button from "../../reusable/Button";

const SinglePost = ({ image, category, title, client, date, services, description }) => {


    return (
        <section id="single-post" className="container">
            <div className="post__img">
                <img src={image} alt="" />
            </div>
            <div className="post__container grid">
                <div className="post__container__left">
                    <Button text={category} />
                    <h2 className="post__title">{title}</h2>
                    <p className="post__description" dangerouslySetInnerHTML={{ __html: description }}>
                    </p>
                </div>
                <div className="post__container__right">
                    <div className="post__details">
                        <h3>client</h3>
                        <p>{client}</p>
                    </div>
                    <div className="post__details">
                        <h3>Date</h3>
                        <p>{date}</p>
                    </div>
                    <div className="post__details">
                        <h3>Services</h3>
                        <p>{services}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SinglePost;
