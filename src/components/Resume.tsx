import React from "react";

const work = [
    {
        "company": "viadee Unternehmensberatung AG",
        "title": "Unternehmensberater",
        "years": "März 2019 - Heute",
        "description": "Projektarbeit Data Science mit Fokus Explainable AI und MLOps"
    },
    {
        "company": "Westfälische Wilhelms-Universität Münster",
        "title": "Wissenschaftliche Hilfskraft",
        "years": "Sept. 2018 - März 2019",
        "description": "Blockchain Research"
    },
    {
        "company": "EXEC Software Team GmbH",
        "title": "Werkstudent",
        "years": "2014 - 2016",
        "description": "Softwareentwicklung Java EE"
    }
]

const education = [
    {
        "school": "Westfälische Wilhelms-Universität Münster",
        "degree": "M.Sc. Information Systems",
        "graduated": "Dez. 2018",
        "description": "Fokus: Business Networks & Information Systems Development",
        "description2": "Thesis: Analyzing and Extending Anchors – A Model-Agnostic ML Explanation Approach"
    },
    {
        "school": "Universität Liechtenstein",
        "degree": "Auslandssemester",
        "graduated": "2017-2018",
        "description": "Data Science & Business Process Management"
    },
    {
        "school": "Westfälische Wilhelms-Universität Münster",
        "degree": "B.Sc. Wirtschaftsinformatik",
        "graduated": "Sept. 2016",
        "description": "Fokus: Mobile application development & Logistics"
    }
]

const skills = [
    {
        "name": "Tensorflow",
        "level": "85%"
    },
    {
        "name": "Python",
        "level": "80%"
    },
    {
        "name": "Kubeflow / MLOps",
        "level": "95%"
    },
    {
        "name": "Kubernetes",
        "level": "90%"
    },
    {
        "name": "Go",
        "level": "50%"
    },
    {
        "name": "Java",
        "level": "60%"
    },
    {
        "name": "Spring (Boot)",
        "level": "50%"
    },
    {
        "name": "React / Typescript",
        "level": "45%"
    }
]


const certificates = [
    {
        "title": "Kubestronaut",
        "url": "https://www.credly.com/badges/85fc624d-1023-400e-a2b6-c03a152fefa9",
    },
    {
        "title": "Certification: Certified Kubernetes Security Specialist (CKS)",
        "url": "https://www.credly.com/badges/e0606408-a8fc-4dc4-94e6-2c53e6f08eb5/public_url",
    },
    {
        "title": "Certification: Certified Kubernetes Administrator (CKA)",
        "url": "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/f404e811-d929-4747-8cb6-d9575559b96c-tobias-maximilian-goerke-47d3daae-dc33-49d7-b25d-2ce787c367b2-certificate.pdf",
    },
    {
        "title": "Certification: Certified Kubernetes Application Developer (CKAD)",
        "url": "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/f404e811-d929-4747-8cb6-d9575559b96c-tobias-maximilian-goerke-5aa92f61-4d67-4656-b48b-207d36953246-certificate.pdf",
    },
    {
        "title": "Certification: Certified Kubernetes Application Developer (KCSA)",
        "url": "https://www.credly.com/badges/de635898-c9d4-48a4-ae0f-8184349b7964",
    },
    {
        "title": "Certification: Kubernetes and Cloud Native Associate (KCNA)",
        "url": "https://www.credly.com/badges/f1ba124d-af79-4a1d-9adf-55e54fe74fb2",
    },
    {
        "title": "Certification: TensorFlow Developer",
        "url": "https://www.credential.net/c4a71c18-2f9f-4cec-9199-a77079ec8d0d",
    },
    {
        "title": "Certification: Professional Scrum Master",
        "url": "https://www.scrum.org/user/471568",
    },
    {
        "title": "Beta Gamma Sigma Member",
        "url": "https://www.betagammasigma.org/",
    }
]


const Resume = () => {

    return (
        <section id="resume">

            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Berufserfahrung</span></h1>
                </div>
                <div className="nine columns main-col">
                    {work.map(entry => {
                        return (
                            <div key={entry.title} className="resume-entry">
                                <h3>{entry.title}</h3>
                                <p className="info">{entry.company}
                                    <span>&bull;</span>
                                    <em className="date">{entry.years}</em>
                                </p>
                                <p className="description">{entry.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Ausbildung</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education.map(entry => {
                                return (
                                    <div key={entry.degree} className="resume-entry">
                                        <h3>{entry.degree}</h3>
                                        <p className="info">
                                            {entry.school}
                                            <span>&bull;</span>
                                            <em className="date">{entry.graduated}</em>
                                        </p>
                                        <p className="description">{entry.description}<br/>{entry.description2}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row misc">
                <div className="three columns header-col">
                    <h1><span>Sonstiges</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {certificates.map(entry => {
                                return (
                                    <div key={entry.title} className="resume-entry misc-entry">
                                        <h4>{entry.title}</h4>
                                        <a href={entry.url} target="_blank" rel="noreferrer"> <i
                                            className="fa fa-external-link"/> </a>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>
                <div className="nine columns main-col">
                    <div className="bars">
                        <ul className="skills">
                            {skills.map(skill => {
                                const className = 'bar-expand ' + skill.name.toLowerCase();
                                return (
                                    <li key={skill.name}>
                                        <span style={{width: skill.level}} className={className}/>
                                        <em>{skill.name}</em>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
