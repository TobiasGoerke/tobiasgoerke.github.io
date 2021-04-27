import React from "react";

const Contact = () => {

    return (
        <section id="contact">
            <h1>Sag hallo!</h1><br/>

            <p>Ich freue mich auf Deine Nachricht unter: <br/>
                <a style={{color: "#C8C8C8"}} href="mailto:tobias.goerke@gmail.com">tobias.goerke@gmail.com</a>
            </p>

            <div className="download">
                <p>
                    <a href="mailto:tobias.goerke@gmail.com" className="button" style={{color: "white"}}>
                        <i className="fa fa-envelope"/> Mail Schreiben
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;