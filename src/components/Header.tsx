import React, {useEffect, useState} from "react";

const occupations = [
    "Data Scientist", "Consultant", "MLOps Engineer", "Machine Learning Enthusiast",
    "Cloud Engineer", "ML Explainer", "Software Engineer"
]

export const networks: Array<{ name: string, url: string, iconClassName: string }> = [
    {
        "name": "twitter",
        "url": "https://twitter.com/TobiasGoerke",
        "iconClassName": "fa fa-twitter"
    },
    {
        "name": "linkedin",
        "url": "https://www.linkedin.com/in/tobias-goerke-086b8aa9/",
        "iconClassName": "fa fa-linkedin"
    },
    {
        "name": "xing",
        "url": "https://www.xing.com/profile/Tobias_Goerke2/cv",
        "iconClassName": "fa fa-xing"
    },
    {
        "name": "instagram",
        "url": "https://www.instagram.com/tobiasgoerke/",
        "iconClassName": "fa fa-instagram"
    },
    {
        "name": "github",
        "url": "https://github.com/TobiasGoerke",
        "iconClassName": "fa fa-github"
    }
]

const Header = () => {

    const [currentOccupation, setCurrentOccupation] = useState(occupations[0]);

    useEffect(() => {
        const interval = setInterval(() => setCurrentOccupation(
            occupations[(occupations.indexOf(currentOccupation) + 1) % occupations.length]
        ), 3500);

        return () => clearInterval(interval);
    }, [currentOccupation]);

    return (
        <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>


                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">Über mich</a></li>
                    <li><a className="smoothscroll" href="#resume">Résumé</a></li>
                    <li><a className="smoothscroll" href="#portfolio">Projekte und Links</a></li>
                    <li><a className="smoothscroll" href="#contact">Kontakt</a></li>
                </ul>
            </nav>

            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Ich bin Tobias Goerke</h1>
                    <h3>ein Münsteraner <span>{currentOccupation}</span>.</h3>

                    <ul className="social">
                        {networks.map(function (network) {
                            return (
                                <li key={network.name}>
                                    <a href={network.url} target="_blank" rel="noreferrer">
                                        <i className={network.iconClassName}/>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"/></a>
            </p>

        </header>
    );
}

export default Header;