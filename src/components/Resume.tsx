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
        "graduated": "Dez. 2019",
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
        "name": "Kubeflow",
        "level": "90%"
    },
    {
        "name": "Kubernetes",
        "level": "75%"
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
                    <p>
                        TODO short sentence
                    </p>
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