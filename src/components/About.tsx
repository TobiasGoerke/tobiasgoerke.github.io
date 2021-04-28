import React from "react";

const About = () => {

    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="/images/profile_picture.jpg" alt="Tobias Goerke"/>
                </div>
                <div className="seven columns main-col">
                    <h2>Über Mich</h2>

                    <p>
                        Als Data Scientist berate ich Firmen im Umkreis von Münster.
                        Hierbei liegt mein Fokus auf der Einführung künstlich intelligenter Systeme und der Fragestellung,
                        wie diese sowohl inhaltlich als auch organisatorisch in bestehende Strukturen integriert werden
                        können.
                    </p>
                </div>
                <div className="two columns main-col">
                    <h2>Kontaktdaten</h2>
                    <p className="address">
                        <span>Tobias Goerke</span><br/>
                        <span>Münster, NRW</span><br/>
                        <span>
                                    <a style={{color: "inherit"}}
                                       href="mailto:tobias.goerke@gmail.com">tobias.goerke@gmail.com</a>
                                </span>
                    </p>
                </div>
            </div>

        </section>
    );
}

export default About;