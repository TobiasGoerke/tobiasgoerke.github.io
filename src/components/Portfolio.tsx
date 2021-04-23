import React from "react";
import './Portfolio.css';

const portfolio = [
    {
        "title": "Krisensentiment - Wie Sie Stimmungen in Sozialen Medien Erkennen",
        "url": "https://blog.viadee.de/sentiment-analyse-yammer",
        "image": "https://blog.viadee.de/hs-fs/hubfs/KI/header-sentimentanalyse.png?width=1460&name=header-sentimentanalyse.png",
        "description": "Gestalten Sie Teile Ihrer Unternehmenskommunikation in sozialen Medien, dann kommen Sie um eine Auswertung der entstehenden Kommentare nicht herum. Ein nützliches Tool hierfür ist die Sentimentanalyse, mittels welcher sich die Stimmung oder die Gefühlslage aus Texten extrahieren lässt. Somit erfahren Sie, wie die aktuelle Kampagne die Außenwirkung Ihres Unternehmens beeinflusst, und können reagieren, wenn die Stimmung kippt. Am realen Beispiel des viadee Yammer-Netzwerkes behandelt der Artikel das grundsätzliche Vorgehen einer semantischen Sentimentanalyse von Texten."
    },
    {
        "title": "Machine Learning in der Logistikbranche: Wegbereiter in eine optimierte Zukunft",
        "url": "https://blog.viadee.de/machine-learning-in-der-logistikbranche",
        "image": "https://blog.viadee.de/hs-fs/hubfs/KI/machine-learning-logistikbr.jpg?width=1460&name=machine-learning-logistikbr.jpg",
        "description": "Als marktführender IT-Dienstleister für alle am Transportprozess beteiligten Parteien positioniert sich TIMOCOM als Partner der Kunden, mit dem Ziel, Prozesse zu verschlanken, zu vernetzen und zu digitalisieren. Die Erfolgsgeschichte des Unternehmens reicht dabei viele Jahre zurück bis zur Firmengründung der „TimoCom Soft- und Hardware GmbH“ im Jahr 1997. Damals erkannte Jens Thiermann, einer der beiden namensgebenden Firmengründer, dass das Auffinden von Ladungen und die Auslastung von LKW eine große Herausforderung darstellen. Die Lösung wurde in der Entwicklung einer digitalen Fracht- und Laderaumbörse gefunden und umgesetzt, über die Rückladungen gesucht und Leerfahrten verringert werden konnten. Mittlerweile unter TIMOCOM GmbH firmierend, ist daraus ein Smart Logistics System mit weiteren Anwendungen, sog. Smart Apps, z. B. zur digitalen Auftragsabwicklung und GPS Tracking, gewachsen. Mit diesem System unterstützt TIMOCOM mehr als 43.000 Unternehmen aus ganz Europa täglich bei der Bewältigung komplexer Prozesse der Transportlogistik."
    },
    {
        "title": "Machine Learning Modelle Erklärbar Machen mit Anchors",
        "url": "https://blog.viadee.de/machine-learning-modelle-erklaerbar-machen-mit-anchors",
        "image": "https://blog.viadee.de/hs-fs/hubfs/KI/Anchors_oT.jpg?width=1460&name=Anchors_oT.jpg",
        "description": "Sowohl bei der Entwicklung als auch bei der Verwendung von Machine-Learning-Modellen steht man vor mehreren Herausforderungen: Die Modelle müssen validiert und Vertrauen muss geschaffen werden. Sofern es außerdem um automatisierte Entscheidungen geht, müssen einzelne Vorhersagen bzw. Entscheidungen erklärt werden. Dazu haben Marco Tulio Ribeiro, Sameer Singh und Carlos Guestrin in 2018 den Algorithmus Anchors entworfen."
    },
    {
        "title": "Cloud Native KI: MLOps Mithilfe der Kubeflow Plattform",
        "url": "https://www.youtube.com/watch?v=PRYA2RPFlSw",
        "image": "https://upload.wikimedia.org/wikipedia/en/2/21/Kubeflow-logo.png",
        "description": "Dieser Talk beleuchtet typische Probleme und Ansprüche, die Machine Learning Projekten vor ihrem Release bevorstehen. Zudem wird gezeigt, wie MLOps-Techniken und Methoden helfen können den Ansprüchen gerecht zu werden. Hierfür wird insbesondere Googles Cloud-Native ML Plattform „Kubeflow“ vorgestellt. Diese hat keinen geringeren Anspruch, als den gesamten ML-Projektlebenszyklus durch skalierbare Workflows zu begleiten, Modell-Deployments zu vereinfachen und somit den professionellen Betrieb von KI-Projekten zu ermöglichen."
    },
    {
        "title": "Explainable AI or Halting Faulty Models ahead of Disaster",
        "url": "https://www.kdnuggets.com/2019/03/explainable-ai.html",
        "image": "https://www.kdnuggets.com/wp-content/uploads/artificial-intelligence-agi.jpg",
        "description": "A brief overview of a new method for explainable AI (XAI), called anchors, introduce its open-source implementation and show how to use it to explain models predicting the survival of Titanic passengers."
    },
    {
        "title": "Contribution to Interpretable Machine Learning Book: Scoped Rules (Anchors)",
        "url": "https://christophm.github.io/interpretable-ml-book/anchors.html",
        "image": "https://christophm.github.io/interpretable-ml-book/images/anchors-visualization.png",
        "description": ""
    },
    {
        "title": "Equipping Titanic with Anchors: Halting Faulty Models ahead of Disaster",
        "url": "https://www.kaggle.com/c/titanic/discussion/83178",
        "image": "https://www.kaggle.com/static/images/site-logo.png",
        "description": ""
    },
    {
        "title": "Hanseatic Governance: Understanding Blockchain as Organizational Technology",
        "url": "https://www.wi.uni-muenster.de/research/publications/154505",
        "image": "",
        "description": "Blockchain technology provides a distributed ledger and is based on a logic of peer to peer authentication. It gained prominence with the rise of cryptocurrencies but provides a much broader field of possible applications. While it has been originally closely linked to a libertarian agenda rejecting organizations, its developments have illustrated that this ideological framing is being reversed in practice. Based on contrastive empirical cases, the purpose of our paper is to discuss blockchain as an organizational technology. Its peculiar mode of governance, which we name ‘Hanseatic', needs to mediate between the fluidity typical of Free and Open Source Software development and the immutability that use organizations adopt blockchain for."
    },
    {
        "title": "CryptoWidget",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=bQbt5RMMyb",
        "image": "https://img.samsungapps.com/productNew/000002876159/IconImage_20210413115855550_NEW_WAP_ICON_512_512.png",
        "description": "CryptoWidget is the first Gear app to provide you with real-time information and charts about your favourite cryptocurrency directly on your watch."
    },
    {
        "title": "StockWidget",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=EyslxRoanH",
        "image": "https://img.samsungapps.com/productNew/000004816422/IconImage_20210414120450514_NEW_WAP_ICON_512_512.png",
        "description": "StockWidget is the first gear app that provides you with real-time stock quotes and charts of your favorite stocks directly on your watch."
    }
]

const Portfolio = () => {

    return (
        <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                    <h1>Projekte und Links</h1>
                    <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                        {portfolio.map((projects, index) => {
                            const modalId = "modal-" + index;
                            return (
                                <div key={index}>
                                    <div key={projects.title} className="columns portfolio-item">
                                        <div className="item-wrap" style={{background: "transparent"}}>
                                            <a href={"#" + modalId} title={projects.title}>
                                                <img alt={projects.title} src={projects.image}/>
                                                <div className="overlay">
                                                    <div className="portfolio-item-meta">
                                                        <h5>{projects.title}</h5>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div id={modalId} className="popup-modal slider mfp-hide">
                                        <div className="media">
                                            <img src={projects.image} alt=""/>
                                        </div>
                                        <div className="description-box">
                                            <h4>{projects.title}</h4>
                                            <p>{projects.description}</p>
                                        </div>

                                        <div className="link-box" style={{display: "flex"}}>
                                            <a href={projects.url}>Details</a>
                                            <a href="#" className="popup-modal-dismiss">Schließen</a>
                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;