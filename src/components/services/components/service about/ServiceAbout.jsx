import React from "react";

const ServiceAbout = () => {
    return (
        <section className="section" id="service-about">
            <div className="service__about__container container grid">
                <div className="service__about__container__left">
                    <img src="./images/services/service-about-image.jpg" alt="" />
                </div>
                <div className="service__about__container__right">
                    <span>our basics</span>
                    <h2>Transform knowledge into creative potential.</h2>
                    <p>
                        The company principle of Prague is the collective conception. From
                        the very beginning, the practice has believed in the virtues of
                        exchange, crossing ideas, common effort, shared knowledge and
                        enthusiasm. Prague studio believes in a socially engaged
                        architecture. This approach is nourished by the numerous worldwide
                        achievements made over the last forty years, and by a constant
                        attention to the quality of public spaces and new uses.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ServiceAbout;
