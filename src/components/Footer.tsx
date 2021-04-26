import React from "react";
import {networks} from "./Header";

const Footer = () => {

    return (
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
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
                    <ul className="copyright">
                        <li>&copy; Tobias Goerke {new Date().getFullYear()}</li>
                    </ul>
                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;