import React from "react";

const ContactLeft = () => {
    return (
        <div className="contact__left">
            <div className="contact__left__description">
                <h3>contact</h3>
                <h2>Let's start new project.</h2>
                <p>
                    Now, as you were able to get a picture of who we are, it is up to you to
                    contact us and lay the foundation for a new and successful business
                    relationship. Our team consists
                </p>
            </div>

            <div className="contact__left__info grid">
                <div>
                    <h4>PHONE</h4>
                    <p>+22 (0)4 29 65 88 38</p>
                    <p>+22 (0)4 29 65 88 38</p>
                </div>

                <div>
                    <h4>EMAIL</h4>
                    <p>example@info.com</p>
                    <p>exampletwo@info.com</p>
                </div>

                <div>
                    <h4>SKYPE</h4>
                    <p>saj_arc_support</p>
                    <p>saj_arc_support</p>
                </div>
            </div>
        </div>
    );
};

export default ContactLeft;
