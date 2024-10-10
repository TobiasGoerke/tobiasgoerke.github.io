import './Portfolio.css';

const portfolio: Array<{ "title": string, shortTitle?: string, "category": string, "url": string, "image": string, "imgFit"?: string, "description": string }> = [
    {
        "title": "Prompt Engineering ist tot - Lang lebe das Model Programming (DSPy)",
        "shortTitle": "Prompt Programming mit DSPy",
        "category": "Blog",
        "url": "https://blog.viadee.de/lang-lebe-das-model-programming",
        "image": "https://blog.viadee.de/hs-fs/hubfs/dspy.jpg?width=2000&height=1000&name=dspy.jpg",
        "description": "Unsicher welcher Prompt der richtige für die eigene LLM-Anwendung ist? RAG- oder Agentensysteme, die Anweisungen von Prompt-Templates ignorieren oder sensibel auf dessen Änderungen reagieren? Unschlüssig, welche Few-Shot-Beispiele verwendet werden sollen? All diesen Herausforderungen begegnen Data Scientists regelmäßig; insbesondere bei der Optimierung, dem Debuggen oder dem Ausrollen von LLM-Systemen. Ein neues Tool namens DSPy, das dem Ansatz des Prompt Programmings folgt, bietet eine Lösung. Denn es hilft, optimierte Prompts automatisch zu generieren - ganz ohne vordefinierte Anweisungen. Dadurch werden Prompt-Templates aus der Entwicklung verbannt und zusätzlich die Performance der Anwendung optimiert."
    },
    {
        "title": "MLOps: Hightech made in Lingen",
        "shortTitle": "MLOps: Hightech made in Lingen",
        "category": "Blog",
        "url": "https://blog.viadee.de/mlops-hightech-made-in-lingen",
        "image": "https://blog.viadee.de/hs-fs/hubfs/rosen.jpg?width=2000&height=1000&name=rosen.jpg",
        "description": "Die Schweizer ROSEN Gruppe nutzt modernste Technologien, um kleinste Risse und Korrosionsschäden in Öl- und Gasleitungen sowie diversen anderen industriellen Anlagen und Strukturen zu erkennen. Gemäß dem Leitmotiv 'Spitzentechnologien zum Schutz von Mensch und Umwelt' können Kunden des Pipeline-Inspektions-Weltmarktführers somit seit 1981 ihre Infrastrukturen prädiktiv untersuchen lassen.  Die Grundlage des Geschäftsmodells bildet das Sammeln und Auswerten von Daten mittels autonomer Inspektions- und Messtechnik, die das Unternehmen selbst an seinen weltweiten Standorten entwickelt, herstellt und auch selbst einsetzt.  So konnte das Unternehmen in mehr als 40 Jahren über zwei Millionen Pipeline-Kilometer weltweit hochauflösend abtasten und inspizieren. Die ROSEN Gruppe geht aber noch einen Schritt weiter und verkauft die Rohdaten nicht einfach an die Auftraggeber wie Infrastrukturbetreiber. Die Daten werden von den Datenspezialisten in Lingen auch ausgewertet, analysiert und interpretiert. Mit dieser Strategie stellt der Markt- und Technologieführer in diesem Sektor die datengetriebene Entscheidungsunterstützung und -findung in den Mittelpunkt."
    },
    {
        "title": "Die eigene AI Chat Platform Powered by LibreChat",
        "shortTitle": "LibreChat - AI Chat Platform",
        "category": "Blog",
        "url": "https://blog.viadee.de/die-eigene-ai-chat-platform-powered-by-librechat",
        "image": "https://blog.viadee.de/hs-fs/hubfs/Erweiterbarkeit%20durch%20Plugins.jpg?width=1100&height=852&name=Erweiterbarkeit%20durch%20Plugins.jpg",
        "description": "Intelligente Chat-Tools sind aus der modernen Arbeitswelt nicht mehr wegzudenken und Unternehmen bieten ihre produktivitätssteigernden Potenziale zunehmend gezielt ihren Mitarbeitenden an. Hierfür eignet sich insbesondere die Einführung einer eigenen, internen Lösung, um die sichere und datenschutzrechtlich konforme Nutzung der KIs zu gewährleisten. Denn ein fehlendes Angebot der intelligenten Helfer bedeutet meist die wesentlich riskantere Nutzung externer Dienste durch die Hintertür. Eine innovative AI Chat Plattform namens LibreChat erleichtert uns mit einer ChatGPT-ähnlichen Oberfläche die Einführung solcher KI-Tools: Das Open Source Produkt bietet Funktionen von intelligenten Chats bis zur Integration eigener GenAI-Anwendungen - und das alles ohne das Schreiben einer einzigen Zeile Code! In diesem Blogbeitrag geben wir einen tieferen Einblick in LibreChat und teilen unsere Erfahrungen, die wir während der Implementierung von viadeeGPT auf Basis von LibreChat gesammelt haben."
    },
    {
        "title": "Produktive ML-Modelle mit Kubernetes und KServe on-premises betreiben",
        "shortTitle": "KServe und LangChain",
        "category": "Blog",
        "url": "https://blog.viadee.de/produktive-ml-modelle-mit-kubernetes-und-kserve-on-premises-betreiben",
        "image": "https://blog.viadee.de/hs-fs/hubfs/Bild%20f%C3%BCr%20Blogpost%20(5)%20(1).jpg",
        "description": "KI-Modelle werden zunehmend in Produkten und Dienstleistungen eingesetzt. Durch die hohen Anforderungen und Komplexität dieser Modelle ist die Produktivsetzung jedoch oft eine Herausforderung. In diesem Blog zeigen wir, wie das Kubernetes Framework KServe die Bereitstellung von ML-Modellen auf der eigenen Infrastruktur vereinfacht und beschreiben die reproduzierbare Implementierung eines hochskalierbaren KI-Web-Servers. Als Beispiel dient ein eigens entwickeltes Retrieval-Augmented Generation System (RAG) auf das Basis von LangChain, das die spezifische Frage nach den Teilnehmern unserer NAVIGATE-Konferenz souverän beantwortet: 'According to my sources, there were 850 Participants (a new record for the organizer), 54 Speakers ...'"
    },
    {
        "title": "MLOps-Einführung leicht gemacht mit Kubeflow",
        "shortTitle": "How To: Kubeflow-Einführung",
        "category": "Artikel (Informatik Aktuell)",
        "url": "https://www.informatik-aktuell.de/betrieb/kuenstliche-intelligenz/mlops-einfuehrung-leicht-gemacht-mit-kubeflow.html",
        "image": "https://www.informatik-aktuell.de/fileadmin/_processed_/0/6/csm_GitOps-mit-Kubeflow_df873aed77.png",
        "imgFit": "contain",
        "description": "In den vergangenen Jahren hat die MLOps-Plattform Kubeflow deutlich an Popularität gewonnen. Nun dürften weitere Unternehmen das Open-Source-Produkt durch seine Aufnahme in das CNCF-Incubator-Projekt und die damit verbundene Entwicklung hin zum Branchenstandard als Grundgerüst ihrer ML-Infrastruktur in Betracht ziehen. Doch wie gelingt die herausfordernde Einführung des hinreichend komplexen Open-Source-Systems? Wie können diverse Aspekte, wie User-Experience, IT-Sicherheitsfragen und Compliance bedarfsgerecht umgesetzt werden? In diesem Artikel beleuchten wir das Kubeflow-Ökosystem sowie verschiedene Aspekte und Überlegungen, die bei der Einführung der Kubeflow-Plattform berücksichtigt werden müssen. Hierbei berichten wir aus unseren mehrjährigen Erfahrungen des Kubeflow-Cluster-Managements. Dabei gehen wir sowohl auf organisatorische als auch technische Aspekte ein, nennen infrastrukturelle und personelle Anforderungen sowie angemessene Ansätze für das Management von Manifest-Modifikationen und die Bereitstellung von Notebook-Umgebungen für Data Scientists."
    },
    {
        "title": "Effiziente Datenverwaltung und Governance, Erfahrungen aus der Implementierung eines DataHubs",
        "shortTitle": "DataHub Erfahrungsbericht",
        "category": "Talk (YouTube)",
        "url": "https://www.youtube.com/watch?v=milZHXjE8rc",
        "image": "https://i3.ytimg.com/vi/milZHXjE8rc/maxresdefault.jpg",
        "imgFit": "contain",
        "description": "Moderne Plattformen wie DataHubs bieten praktische Werkzeuge zur effizienten Datenverwaltung und Governance. Diese Plattformen versprechen, eine bedeutende Rolle in der nächsten Generation des Datenmanagements zu spielen, indem sie Unternehmen dabei unterstützen, datenbasierte Strategien wie Data-Mesh erfolgreich umzusetzen. Dieser Vortrag teilt praxisnahe Erfahrungen aus der Implementierung eines DataHubs und betont dessen strategische Relevanz für die gesamte Datenstrategie eines Unternehmens. Es werden Cloud-Architekturen vorgestellt, die dazu beigetragen haben, die dezentrale Struktur des Unternehmens abzubilden. Zudem werden Wege aufgezeigt, die mittels Containertechnologien helfen, selbst nicht unterstützte Datenquellen wie RavenDB erfolgreich zu integrieren. Weitere Infos gibt es auch im BigData-Insider Artikel: https://www.bigdata-insider.de/datahub-die-zukunft-der-unternehmensweiten-datenstrategie-a-3aaa1ea99b1d8eb0aa901acab741950c/"
    },
    {
        "title": "Ein Blick in die Black-Box: Explainable AI (XAI) erklärt",
        "shortTitle": "Explainable AI erklärt (Red Stack Magazin)",
        "category": "Artikel",
        "url": "https://meine.doag.org/zeitschriften/id.211.red-stack-magazin-inkl-business-news-nr-2-2024-ist-online/",
        "image": "https://tobias-goerke.de/files/xaiexplaineddoag.jpg",
        "description": "Machine-Learning-Modelle (ML-Modelle) finden in einem enormen Tempo Einzug in unseren Alltag und werden für Prognosen, datengetriebene Entscheidungen oder Generierung von Inhalten genutzt. Um die gewünschte Genauigkeit der Vorhersagen zu erreichen, werden statt menschenverständlicher Entscheidungssysteme oftmals komplexe Verfahren wie tiefe neuronale Netze (DNNs) verwendet, deren Entscheidungen aufgrund ihrer inhärenten Komplexität unverständlich und nicht nachvollziehbar sind. Der Bereich der Explainable AI (XAI) versucht, das Problem fehlender Transparenz von ML-Modellen zu adressieren und die Ergebnisse für den Menschen verständlich zu machen. In diesem Artikel wird das Potenzial von XAI erschlossen und einige exemplarische XAI-Methoden kurz vorgestellt. Im Anschluss werden Kriterien aufgeführt, die bei der Auswahl einer passenden XAI-Methode zu beachten sind. Abschließend werden allgemeine Handlungsempfehlungen für die Sicherstellung interpretierbarer ML-Modelle innerhalb eines Entwicklungs- und Deployment-Workflows gegeben."
    },
    {
        "title": "Datenbusiness Podcast #159 mit Dr. Frank Köhne & Tobias Goerke von der viadee | LLMs, RAG, MLOps",
        "shortTitle": "Datenbusiness Podcast: LLMs, RAGs & MLOps",
        "category": "Podcast",
        "url": "https://open.spotify.com/episode/1yJ7UANiEltIfevKxUM1ST?si=cac9a4f937884bf3",
        "image": "https://i.scdn.co/image/ab67656300005f1ff9e464171b3c47a8babf4e62",
        "description": "Mein Kollege Dr. Frank Köhne und ich waren zu Gast beim datenbusiness Podcast und haben über die viadee, LLMs, RAG und MLOps gesprochen. Ein Videocast der Folge ist auf Youtube zu finden (https://www.youtube.com/watch?v=Uz9YNGiN9pY). Folgenbeschreibung: IT-Unternehmensberatung mit ganz besonderer Kultur. Die viadee steht seit 1994 für Unabhängigkeit, fachliches Know-how und Innovationsfreude. Mit mehr als 200 Mitarbeiter:innen an den Standorten in Münster, Köln und Dortmund berät die viadee namhafte Unternehmen aus unterschiedlichen Branchen in allen Phasen der Softwareentwicklung. Die Dienstleistungen reichen von der Entwicklung komplexer Anwendungssysteme über den Aufbau der IT-Architekturen bis zur Optimierung der Geschäftsprozesse, alles maßgeblich gesteuert durch Qualitäts- und Projektmanagement. Im heutigen Gespräch erfahren wir mehr über die viadee und unterhalten uns weiter über die fachlichen Themen rund um LLMs, RAG sowie MLOps."
    },
    {
        "title": "Von Chat with your Data bis ChatGPT mit Embedded & Fine-Tuned LLMs",
        "shortTitle": "LLM Embeddings & Fine-Tuning",
        "category": "Blog",
        "url": "https://blog.viadee.de/llms-optimieren-mit-embeddings-und-fine-tuning",
        "image": "https://blog.viadee.de/hs-fs/hubfs/image%20(3)(1).png?width=1536&height=768&name=image%20(3)(1).png",
        "description": "Large Language Models (LLMs) wie ChatGPT können viele Herausforderungen, wie das Schreiben von Texten und Code, von Haus aus bewältigen. Doch haben sie im Normalfall keinen Zugriff auf eigene bzw. unternehmensinterne Daten. Was also, wenn ihnen Informationen fehlen und sie falsche Antworten liefern? In diesem Beitrag untersuchen wir die Lösungsansätze Embedding bzw. Retrieval Augmented Generation und Fine-Tuning, um spezifisches Kontextmaterial bereitzustellen und Anwendungsfälle vom Typ 'Chat with your Data' zu ermöglichen. So können LLMs auf neuem Terrain eingesetzt werden und mit mehr Zuversicht in die Produktion gehen."
    },
    {
        "title": "Self-Hosted Code-Copilot mit Llama-2",
        "shortTitle": "Llama-2 Copilot",
        "category": "Blog",
        "url": "https://blog.viadee.de/self-hosted-code-copilot-mit-llama-2",
        "image": "https://blog.viadee.de/hs-fs/hubfs/Code_Llama-1000x500.jpg?width=1500&height=750&name=Code_Llama-1000x500.jpg",
        "description": "Längst ist der Entwickleralltag durch Machine Learning und Large Language Models (LLMs) geprägt. Bislang führte OpenAI die populärsten KI-Tools ein und sicherte sich durch einen Vorsprung in Forschung und Entwicklung eine führende Position im Bereich KI-Anwendungen. Dank ihrer Modelle GPT und Codex konnten sie Anwendungen wie ChatGPT und GitHub Copilot ermöglichen. Diese wurden weitreichend adaptiert und führen bei Entwickler:innen zu teilweise erheblichen Produktivitätssteigerungen.  Nun holt OpenAIs Konkurrenz auf und durchbricht das Monopol mit der Veröffentlichung verschiedener Alternativmodelle. Insbesondere der Konzern Meta geht mit gutem Beispiel voran und stellt sein Modell Llama-2 kostenlos zur Verfügung – solange es nicht von Anwendungen mit mehr als 700 Millionen Nutzer:innen genutzt wird. In vielen Disziplinen erreicht Llama-2 eine mit GPT-4 vergleichbare Leistung, wie Metas wissenschaftliche Publikation belegt. Somit steht Unternehmen, die nicht länger von Anbietern wie OpenAI abhängig sein möchten oder können, endlich eine wahre Alternative zur Verfügung.  In diesem Artikel wird beleuchtet, wie das Llama-2 Modell auf unternehmenseigener Infrastruktur bereitgestellt werden kann. Auf diesem Wege kann auch das am 24.08.2023 von Meta veröffentlichte Code Llama Modell, das speziell für diesen Anwendungsfall erstellt wurde, genutzt werden. Darüber hinaus wird anhand eines VSCode-Plugins veranschaulicht, wie die KI zur Steigerung der Produktivität integriert werden kann."
    },
    {
        "title": "DataHub: Die Zukunft der unternehmensweiten Datenstrategie? (BigData Insider, 06.09.2023)",
        "shortTitle": "DataHub (BigData Insider)",
        "category": "Artikel",
        "url": "https://www.bigdata-insider.de/datahub-die-zukunft-der-unternehmensweiten-datenstrategie-a-3aaa1ea99b1d8eb0aa901acab741950c/",
        "image": "https://datahubproject.io/img/datahub-logo-color-light-horizontal.svg",
        "imgFit": "contain",
        "description": "Durch die zunehmende Bedeutung von Daten wird ein reibungsloser Umgang mit ihnen immer wichtiger. Die zentrale Verwaltung und Bereitstellung von (Meta-)Daten spielen dabei entscheidende Rollen. Moderne Daten-plattformen wie DataHub versprechen Unterstützung, indem sie als zentrale Instanzen Beschreibungen und Dokumentationen von Datenquellen verschiedener Geschäftseinheiten zusammenführen und so eine unterneh-mensweite Datenstrategie befähigen. Dieser Beitrag berichtet von unseren Projekterfahrungen im Aufbau solcher DataHub-Instanzen. Wir erläutern ihre datenstrategische Bedeutung und erklären, wie die Plattformlösung wertschaffend für Unternehmen einge-setzt werden kann. Zudem berichten wir über typische Probleme, die bei der Integration der Plattform auftreten können. Schlussendlich diskutieren wir architekturelle Überlegungen für dezentrale Datenstrukturen und zeigen, wie selbst semistrukturierte, bislang nicht durch DataHub unterstützte Datenquellen angebunden werden können."
    },
    {
        "title": "Kubeflow: Re-Introducing the Volumes Viewer",
        "shortTitle": "Kubeflow Volumes Viewer",
        "category": "Open Source",
        "url": "https://github.com/kubeflow/kubeflow/pull/6876",
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "description": "Im Rahmen einer Open-Source contribution für das Kubeflow v1.8 release habe ich den sog. Volumes Viewer entwickelt und integriert, der es Nutzer:innen sehr einfach macht, mit Hilfe eines Filebrowsers Daten ins bzw. aus dem Cluster zu laden. Hierdurch werden bekannte Hindernisse im Umgang mit Daten und Kubernetes überwunden."
    },
    {
        "title": "Filebrowser: Integrating tus.io for resumable and chunked uploads",
        "shortTitle": "Tus.io Protocol Integration",
        "category": "Open Source",
        "url": "https://github.com/filebrowser/filebrowser/pull/2145",
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "description": "Damit für Nutzer:innen des Filebrowser-Projekts große Uploads nicht an Proxy-Limitationen scheitern, habe ich das tus.io Protokoll in den Filebrowser integriert. Durch dieses fast einjährige Nebenprojekt können Uploads nun in mehreren, kleinen Teilen erfolgen. Abgebrochene Uploads können wiederaufgenommen werden. Der Beitrag war motiviert durch die Entwicklung des Kubeflow Volumes Viewer."
    },
    {
        "title": "Kubeflow @ Provinzial: Aufbau einer modernen Machine Learning und MLOps-Plattform im Versicherungswesen",
        "shortTitle": "Kubeflow @ Provinzial",
        "category": "Blog",
        "url": "https://blog.viadee.de/kubeflow-provinzial-aufbau-einer-modernen-machine-learning-und-mlops-plattform-im-versicherungswesen",
        "image": "https://blog.viadee.de/hs-fs/hubfs/0_Neural-Networks_MLops_Kubeflow_Provinzial-Versicherung.jpg?width=1000&height=500&name=0_Neural-Networks_MLops_Kubeflow_Provinzial-Versicherung.jpg",
        "description": "KI-Methoden und insbesondere Machine Learning-Ansätze können viele Anwendungsfälle in Unternehmen effizienter gestalten - dieses Potenzial identifizierte die Provinzial Holding AG bereits frühzeitig. Der Wunsch, diese neuartigen Verfahren in den produktiven Einsatz zu bringen und in bestehende Produkte zu integrieren, gestaltete sich jedoch anspruchsvoll in seiner Realisierung. Wie hat also ein Unternehmen, welches in seiner Größenordnung den Top-10 Versicherern Deutschlands angehört, es geschafft, seine KI-Initiativen und Methoden konzernweit zu konsolidieren?"
    },
    {
        "title": "Das Operator Pattern in Kubernetes",
        "shortTitle": "Kubernetes Operator",
        "category": "Blog",
        "url": "https://blog.viadee.de/operator-pattern-in-kubernetes",
        "image": "https://blog.viadee.de/hs-fs/hubfs/Operator%20Pattern%20in%20Kubernetes.png?width=736&height=368&name=Operator%20Pattern%20in%20Kubernetes.png",
        "description": "Operator in Kubernetes sind allgegenwärtig und unverzichtbar. Doch was sind Operator und wie können wir sie nutzen, um das eigene Cluster um Funktionalität zu erweitern? Wie nutzt Kubernetes dieses Pattern, um z.B. Pods aus Jobs zu erzeugen? Wir führen durch die Begrifflichkeiten und erklären, wie Operator, Controller und Custom Resources zusammenspielen. Zudem stellen wir verschiedene Frameworks vor, mit denen eigene Controller entwickelt werden können, wodurch sich das Management des Clusters vereinfacht."
    },
    {
        "title": "Krisensentiment - Wie Sie Stimmungen in Sozialen Medien Erkennen",
        "shortTitle": "Das Krisensentiment",
        "category": "Blog",
        "url": "https://blog.viadee.de/sentiment-analyse-yammer",
        "image": "/images/sentiment.png",
        "description": "Gestalten Sie Teile Ihrer Unternehmenskommunikation in sozialen Medien, dann kommen Sie um eine Auswertung der entstehenden Kommentare nicht herum. Ein nützliches Tool hierfür ist die Sentimentanalyse, mittels welcher sich die Stimmung oder die Gefühlslage aus Texten extrahieren lässt. Somit erfahren Sie, wie die aktuelle Kampagne die Außenwirkung Ihres Unternehmens beeinflusst, und können reagieren, wenn die Stimmung kippt. Am realen Beispiel des viadee Yammer-Netzwerkes behandelt der Artikel das grundsätzliche Vorgehen einer semantischen Sentimentanalyse von Texten."
    },
    {
        "title": "Machine Learning in der Logistikbranche: Wegbereiter in eine optimierte Zukunft",
        "shortTitle": "ML in der Logistikbranche",
        "category": "Blog",
        "url": "https://blog.viadee.de/machine-learning-in-der-logistikbranche",
        "image": "/images/ml-logistics.jpg",
        "description": "Als marktführender IT-Dienstleister für alle am Transportprozess beteiligten Parteien positioniert sich TIMOCOM als Partner der Kunden, mit dem Ziel, Prozesse zu verschlanken, zu vernetzen und zu digitalisieren. Die Erfolgsgeschichte des Unternehmens reicht dabei viele Jahre zurück bis zur Firmengründung der „TimoCom Soft- und Hardware GmbH“ im Jahr 1997. Damals erkannte Jens Thiermann, einer der beiden namensgebenden Firmengründer, dass das Auffinden von Ladungen und die Auslastung von LKW eine große Herausforderung darstellen. Die Lösung wurde in der Entwicklung einer digitalen Fracht- und Laderaumbörse gefunden und umgesetzt, über die Rückladungen gesucht und Leerfahrten verringert werden konnten. Mittlerweile unter TIMOCOM GmbH firmierend, ist daraus ein Smart Logistics System mit weiteren Anwendungen, sog. Smart Apps, z. B. zur digitalen Auftragsabwicklung und GPS Tracking, gewachsen. Mit diesem System unterstützt TIMOCOM mehr als 43.000 Unternehmen aus ganz Europa täglich bei der Bewältigung komplexer Prozesse der Transportlogistik."
    },
    {
        "title": "Machine Learning Modelle Erklärbar Machen mit Anchors",
        "shortTitle": "XAI & Anchors",
        "category": "Blog",
        "url": "https://blog.viadee.de/machine-learning-modelle-erklaerbar-machen-mit-anchors",
        "image": "/images/anchors.jpg",
        "description": "Sowohl bei der Entwicklung als auch bei der Verwendung von Machine-Learning-Modellen steht man vor mehreren Herausforderungen: Die Modelle müssen validiert und Vertrauen muss geschaffen werden. Sofern es außerdem um automatisierte Entscheidungen geht, müssen einzelne Vorhersagen bzw. Entscheidungen erklärt werden. Dazu haben Marco Tulio Ribeiro, Sameer Singh und Carlos Guestrin in 2018 den Algorithmus Anchors entworfen."
    },
    {
        "title": "Cloud Native KI: MLOps Mithilfe der Kubeflow Plattform",
        "shortTitle": "Cloud Native KI mit Kubeflow",
        "category": "Talk (YouTube)",
        "url": "https://www.youtube.com/watch?v=PRYA2RPFlSw",
        "image": "/images/kubeflow-logo.png",
        "description": "Dieser Talk beleuchtet typische Probleme und Ansprüche, die Machine Learning Projekten vor ihrem Release bevorstehen. Zudem wird gezeigt, wie MLOps-Techniken und Methoden helfen können den Ansprüchen gerecht zu werden. Hierfür wird insbesondere Googles Cloud-Native ML Plattform „Kubeflow“ vorgestellt. Diese hat keinen geringeren Anspruch, als den gesamten ML-Projektlebenszyklus durch skalierbare Workflows zu begleiten, Modell-Deployments zu vereinfachen und somit den professionellen Betrieb von KI-Projekten zu ermöglichen."
    },
    {
        "title": "Explainable AI or Halting Faulty Models ahead of Disaster",
        "shortTitle": "Halting Faulty Models ahead of Disaster",
        "category": "Blog",
        "url": "https://www.kdnuggets.com/2019/03/explainable-ai.html",
        "image": "/images/kdnuggest-post.jpg",
        "description": "A brief overview of a new method for explainable AI (XAI), called anchors, introduce its open-source implementation and show how to use it to explain models predicting the survival of Titanic passengers."
    },
    {
        "title": "Interpretable Machine Learning Book: Scoped Rules (Anchors)",
        "shortTitle": "Scoped Rules (Anchors)",
        "category": "Gastbeitrag",
        "url": "https://christophm.github.io/interpretable-ml-book/anchors.html",
        "image": "/images/lime-anchors.png",
        "description": ""
    },
    {
        "title": "Equipping Titanic with Anchors: Halting Faulty Models ahead of Disaster",
        "shortTitle": "Explainable AI goes Titanic",
        "category": "Blog",
        "url": "https://www.kaggle.com/c/titanic/discussion/83178",
        "image": "/images/kaggle.png",
        "imgFit": "scale-down",
        "description": ""
    },
    {
        "title": "Hanseatic Governance: Understanding Blockchain as Organizational Technology",
        "shortTitle": "Hanseatic Governance",
        "category": "Publikation",
        "url": "https://www.wi.uni-muenster.de/research/publications/154505",
        "image": "/images/researchgate.svg",
        "imgFit": "scale-down",
        "description": "Blockchain technology provides a distributed ledger and is based on a logic of peer to peer authentication. It gained prominence with the rise of cryptocurrencies but provides a much broader field of possible applications. While it has been originally closely linked to a libertarian agenda rejecting organizations, its developments have illustrated that this ideological framing is being reversed in practice. Based on contrastive empirical cases, the purpose of our paper is to discuss blockchain as an organizational technology. Its peculiar mode of governance, which we name ‘Hanseatic', needs to mediate between the fluidity typical of Free and Open Source Software development and the immutability that use organizations adopt blockchain for."
    },
    {
        "title": "CryptoWidget",
        "category": "Anwendung",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=bQbt5RMMyb",
        "image": "/images/cryptowidget.png",
        "imgFit": "contain",
        "description": "CryptoWidget is the first Gear app to provide you with real-time information and charts about your favourite cryptocurrency directly on your watch."
    },
    {
        "title": "StockWidget",
        "category": "Anwendung",
        "url": "https://apps.samsung.com/gear/appDetail.as?appId=EyslxRoanH",
        "image": "/images/stockwidget.png",
        "imgFit": "contain",
        "description": "StockWidget is the first gear app that provides you with real-time stock quotes and charts of your favorite stocks directly on your watch."
    },
    {
        "title": "Trace Clustering for an Online Freight Exchange at TIMOCOM",
        "shortTitle": "Trace Clustering @ TIMOCOM",
        "category": "Publikation",
        "url": "https://congreso.us.es/bpm2020/images/industryforum.pdf",
        "image": "/images/bpm2020.png",
        "imgFit": "contain",
        "description": "To guarantee a high level of customer satisfaction, providers of highly frequented platforms strive to continuously improve their application design. One promising potential to discover issues regarding the application design and at the same time consider the heterogeneity of different users lies in the clustering of traces and the examination of the corresponding process models. In order to leverage this potential, this study investigates how large-scale event logs can be preprocessed and clustered in order to enable cluster-specific application design by examining an event log of an online freight exchange. Using the Action Design Research approach, which allows a joint shaping of a solution with practitioners, a pipeline is developed, which enables the preprocessing of large-scale event logs and the execution of three trace clustering approaches. The investigation of the resulting clusters in the form of process models delivers valuable insights into customer behavior, helps to identify weaknesses and improvement possibilities of the platform and thereby provides a basis to support application design."
    },
    {
        "title": "CryptoTiles",
        "category": "Anwendung",
        "url": "https://play.google.com/store/apps/details?id=de.goerke.tobias.tiles.crypto",
        "image": "/images/cryptotiles.png",
        "imgFit": "contain",
        "description": "CryptoTiles provides Tiles that let you view charts and prices of all the cryptocurrencies you are interested in directly on your Wear OS watch."
    },
    {
        "title": "StockTiles",
        "category": "Anwendung",
        "url": "https://play.google.com/store/apps/details?id=de.goerke.tobias.tiles.stock",
        "image": "/images/stocktiles.png",
        "imgFit": "contain",
        "description": "StockTiles provides Tiles that let you view charts and prices of all the stock assets you are interested in directly on your Wear OS watch."
    },
    {
        "title": "Implementierung des Anchors Erklärers für maschinelle Lerner in Java",
        "shortTitle": "Anchors (XAI)",
        "category": "Open Source",
        "url": "https://github.com/viadee/javaAnchorExplainer",
        "image": "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        "description": "In meinster Masterarbeit beschäftigte ich mich mit erklärbarem maschinellem Lernen und untersuchte hierfür einen spezifischen Algorithmus, genannt Anchors. Die bis dato erste Anchors Implementierung in Java habe ich der Open-Source Community auf GitHub zur Verfügung gestellt."
    },
]

const Portfolio = () => {

    return (
        <section id="portfolio">
            <div>
                <h3>Projekte und Links</h3>
            </div>

            <ul className="works-list">
                {portfolio.map((projects, index) => {
                    const modalId = "modal-" + index;
                    return (
                        <li key={"works-list-item-" + index} className="item-wrap works-list-item">
                            <a href={"#" + modalId} className="works-list-link">

                                <img className="works-item-pic" src={projects.image} alt=""
                                     style={{objectFit: (projects.imgFit as any || "cover")}}/>

                                <div className="works-item-text-container">
                                    <i className="fa fa-expand expand-icon" />
                                    <div className="works-item-category">{projects.category}</div>

                                    <div className="works-item-title">{projects.shortTitle || projects.title}</div>

                                </div>
                            </a>
                        </li>
                    )
                })}
            </ul>

            {portfolio.map((projects, index) => {
                return (
                    <div key={"modal-popup-" + index} id={"modal-" + index} className="popup-modal slider mfp-hide">
                        <div className="media">
                            <img src={projects.image} alt=""
                                 style={{
                                     width: "100%",
                                     minWidth: "100%",
                                     maxHeight: "300px",
                                     objectFit: "scale-down"
                                 }}/>
                        </div>
                        <div className="description-box">
                            <h4>{projects.title}</h4>
                            <p>{projects.description}</p>
                        </div>
                        <div className="link-box">
                            <a target="_blank" rel="noreferrer" href={projects.url}>Details</a>
                            <a href="/#" className="popup-modal-dismiss">Schließen</a>
                        </div>
                    </div>
                )
            })}
        </section>
    );
}

export default Portfolio;
