import React from "react";

const About = () => {

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="/images/profile_picture.jpg" alt="Profilbild Tobias Goerke"/>
                </div>
                <div className="nine columns main-col">
                    <h2>Über Mich</h2>

                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    </p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Kontaktdaten</h2>
                            <p className="address">
                                <span>Tobias Goerke</span><br/>
                                <span>Münster, NRW
                   </span><br/>
                                <span>tobis.goerke@gmail.com</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                {/*TODO href*/}
                                <a href="sasd" className="button"><i className="fa fa-download"/>Download
                                    Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About;