const staff= [
    {
        id: 1,
        name: "Pablo Sabbatella",
        role: "Director & Profesor",
        presentation: "El curso fue una experiencia muy valiosa, interesante y sumamente didáctica. Al no requerir conocimientos previos sobre el tema, es una gran oportunidad y punto de partida para entrar en el mundo Cripto.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/619d79eb8484832bd52691d5_pablitoeth-p-500.png"
    },
    {
        id: 2,
        name: "Bruno Torossi",
        role: "Profesor",
        presentation: "Inversor y operador del mercado financiero.Research y divulgación sobre finanzas descentralizadas",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c826f43cb006c14f352a_Bruno%20Torossi-p-500.jpeg"
    },
    {
        id: 3,
        name: "Nicolas Bourbon",
        role: "Profesor Blockchain & Bitcoin",
        presentation: "Lic en Física, MBA, Data Scientist VP @ Nielsen.Bitcoiner por vocación, admin del grupo Bitcoin Argentina.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c7ed9288fa83352985d2_Nicolas%20Bourbon.jpeg"
    },
    {
        id: 4,
        name: "Hernán Milstein",
        role: "Profesor Ecosistema Terra",
        presentation: "Host de DeFiSpace en twitter y TerraNuestra en YouTube.DeFi Multichain Researcher y difusor de la tecnología blockchain.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c80cb20fd90970fdea8d_Hernan%20Milstein-p-500.jpeg"
    },
    {
        id: 5,
        name: "Hector Bulgarini",
        role: "Profesor Ecosistema Polkadot",
        presentation: "Common Good Parachains Product Owner/Project Manager en @Parity Technologies.Software Developer con foco en el desarrollo de productos descentralizados principalmente sobre redes tipo Substrate como Polkadot, Kusama, etc.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c839bd17f020fff34d60_Hector%20Bulgarini.jpeg"
    },
    {
        id: 6,
        name: "Matias Sykuler",
        role: "Profesor DeFi avanzado",
        presentation: "Ex product manager @ Friction Network Token. Estudiante de Actuario y Web Full Stack Developer. DeFi/crypto analyst & researcher, especialista en detectar oportunidades y apasionado por compartirlas.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c7931b28fa627c788f24_Matias%20Sykuler-p-500.jpeg"
    },
    {
        id: 7,
        name: "Max Carjuzaa",
        role: "Profesor RSK & Money on Chain",
        presentation: "Co- Founder y Contributor en MONEY ON CHAIN. Bitcoiner desde 2011, emprendedor en Bitcoin, Co-Founder y Contributor en Money On Chain",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c849ecac6b009f36a78f_Max%20Carjuzaa-p-500.jpeg"
    },
    {
        id: 8,
        name: "Daniela Dávila",
        role: "Customer Success Manager",
        presentation: "Lic. en Administración de Empresas. Mi rol es ayudar a los alumnos a que tengan la mejor experiencia posible antes, durante y después de la cursada.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c7928e51896dc46490ea_Daniela%20Davila-p-500.jpeg"
    },
    {
        id: 9,
        name: "Jeronimo Ohanessian",
        role: "Growth Lead",
        presentation: "Mi trabajo es ayudar a que cada vez más gente pueda conocer el mundo cripto a través de nuestros cursos. Marketer apasionado y cripto geek.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6202c792ba659e4ddefdea4a_Jeronimo-ohanessian.jpg"
    },
    {
        id: 10,
        name: "Aldana Maldonado",
        role: "Visual Artist",
        presentation: "Solidity Trainee Developer - Encargada de resumentes y material de estudios",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050aadb26f4a561fe1422e_Aldana%20Maldonado-p-500.jpeg"
    }
]

const staffContainer= document.getElementById('staff-container')
const staffFragment= document.createDocumentFragment()

for (const member of staff) {
    const memberArticle= document.createElement('article')
    const memberStripe= document.createElement('div')
    const memberInformation= document.createElement('div')
    const memberProfileImage= document.createElement('img')
    const memberName= document.createElement('h4')
    const memberRole= document.createElement('h5')
    const memberPresentation= document.createElement('p')
    const memberMediaLink= document.createElement('a')
    const memberMediaLinkIcon= document.createElement('i')

    memberArticle.classList.add('staff-member')
    memberStripe.classList.add('staff-member__stripe')
    memberInformation.classList.add('staff-member__information')
    memberProfileImage.setAttribute('src', member.profileImage)
    memberProfileImage.classList.add('staff-member__img')
    memberName.textContent= member.name
    memberName.classList.add('staff-member__name')
    memberRole.textContent= member.role
    memberRole.classList.add('staff-member__role')
    memberPresentation.textContent= member.presentation
    memberPresentation.classList.add('staff-member__presentation')
    memberMediaLink.classList.add('staff-member__media-link')
    memberMediaLinkIcon.classList.add('fab','fa-twitter')

    memberMediaLink.appendChild(memberMediaLinkIcon)
    
    memberInformation.appendChild(memberProfileImage)
    memberInformation.appendChild(memberName)
    memberInformation.appendChild(memberRole)
    memberInformation.appendChild(memberPresentation)
    memberInformation.appendChild(memberMediaLink)

    memberArticle.appendChild(memberStripe)
    memberArticle.appendChild(memberInformation)
    
    staffFragment.appendChild(memberArticle)
}

staffContainer.appendChild(staffFragment)

