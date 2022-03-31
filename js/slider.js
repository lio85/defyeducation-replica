const customers= [
    {
        id: 1,
        name: "Delfina Pipan",
        profession: "Digital Transformation Analyst at NewCombin",
        testimony: "El curso fue una experiencia muy valiosa, interesante y sumamente didáctica. Al no requerir conocimientos previos sobre el tema, es una gran oportunidad y punto de partida para entrar en el mundo Cripto.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6201ee0b5b98717073f240ac_delfina_pipan-p-500.jpeg"
    },
    {
        id: 2,
        name: "Julian Gurfinkiel",
        profession: "Co-founder & CMO en Turismocity",
        testimony: "Lo mejor del curso es la forma en que aborda todos los temas de una forma sencilla y clara de entender para gente que no está muy metida en el tema. Se alcanza un nivel de profundidad que muy probablemente sin este curso no hubiese escuchado o entendido.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6201f03d10fc04896d3b3840_julian_gurfinkiel.jpeg"
    },
    {
        id: 3,
        name: "Exequiel Bonalian",
        profession: "Branding & Value Proposition Lead en Banco Supervielle",
        testimony: "El curso me parece muy bueno y super completo. Hace mucho quería aprender sobre esto pero solo encontraba información desordenada. Defy toma toda esa info y suma a gente extremadamente capacitada que te ordena el contenido de una manera que se haga mucho más ameno. Creo que hasta ahora es el curso que mejor relación precio-calidad que hice.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050e41f2cece9694f18f67_exequiel_bonalian-p-500.jpeg"
    },
    {
        id: 4,
        name: "Santiago Sanchez Avalos",
        profession: "Programador de smart contracts. Exactly",
        testimony: "Recomiendo el curso incluso para quienes ya están interiorizados en el ecosistema. Los conceptos en los que Pablo profundiza son de suma importancia y utilidad, desde los inicios de blockchain hasta temas como riesgos de inversión o seguridad. Un excelente profesional, con mucha paciencia, comprometido a continuar construyendo y ayudando.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050eccd4fdce802279103c_santi_sanchez.jpeg"
    },
    {
        id: 5,
        name: "Ana Zapiola",
        profession: "Program Manager en Satellogic",
        testimony: "Pablo tiene un background que lo vuelve el profe de cripto ideal: es economista, hacker y sabe mucho de tecnología, sumado a que sabe explicar muy bien. El contenido del curso va de cero a cien, tengas el nivel que tengas te llevas algo valioso. Te da las herramientas para enfrentar la revolución cripto sin morir en el intento.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050f0924425a9e256760a2_ana_zapiola.jpeg"
    },
    {
        id: 6,
        name: "Andrés Cardenal",
        profession: "Economista y analista financiero, CFA. Newsletter editor en Seeking Alpha",
        testimony: "El curso es excelente, comienza desde cero y ofrece una mirada completa e integral. Pablo es un apasionado de estos temas que conoce en profundidad. Su entusiasmo es contagioso. Es clave su abordaje sobre seguridad informática. Muy recomendable.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050f637538a70bfbda2663_andres_cardenal.jpeg"
    },
    {
        id: 7,
        name: "Fernando Sasiain",
        profession: "Socio en Klein & Sasiain Abogados",
        testimony: "El mundo legal no escapa al impacto de la tecnología Blockchain; por el contrario, a mi juicio en muy poco tiempo asistiremos a un cambio total de paradigma y habrá una diferencia abismal entre los profesionales del derecho que se subieron al cambio y aquellos que se quedaron en el viejo mundo. Defy Education me dió en un principio los basics de dicha tecnología, pero a medida que el curso fue avanzando, y habiendo asumido el compromiso personal de dedicarle horas a explorar todo el material y los recursos que generosamente te brindan, me fui sumergiendo en un ecosistema tan vasto como apasionante. Al conocer a los players del ecosistema crypto de la Argentina, me di cuenta que Pablo Sabbatella es uno de los top referents del mismo, que tiene genuina pasión por lo que hace y eso queda muy evidente en los cursos que dicta, a los que suele sumar otros referentes de su nivel. Simplemente, el curso es un must.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/62050fdaa6d92d7157568202_fernando_sasiain.jpeg"
    },
    {
        id: 8,
        name: "Giannella Ligato",
        profession: "SEO & marketing expert",
        testimony: "Desde el minuto 1 este curso te empieza a abrir un mundo nuevo. Si empezás de cero como yo, con este curso salís muy bien parado para comenzar a operar y para seguir formándote; y si ya tenías conocimientos de web3 y criptomonedas, te permite profundizar un montón y cada clase te deja nuevas herramientas para explorar. A mí personalmente, viniendo del SEO y del marketing, me abrió mucho la cabeza en cuanto a todas las posibilidades de futuro que ofrecen los smart contracts y el blockchain en general.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6205104f1b8a0a97c2deb858_giannella_ligato.jpeg"
    },
    {
        id: 9,
        name: "Sebastián De La Toma",
        profession: "Periodista en Infotechnology y El Cronista",
        testimony: "El curso de Defy Education me sirvió para ordenar todos los conocimientos sueltos que tenía sobre las criptomonedas de una manera sistemática y con ejemplos prácticos. En un momento en el que la información sobre el tema todavía está muy dispersa, el trabajo de Pablo Sabbatella no podría ser más importante: para invertir con responsabilidad, hay que entender y para entender, hay que saber.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/620510bc0ffe1c34e2941775_sebastian_delatoma-p-500.jpeg"
    },
    {
        id: 10,
        name: "Edwin Rager",
        profession: "CMO y co-fundador de Belo",
        testimony: "Defy es la puerta de entrada para cada nueva persona que se suma a nuestro equipo, tanto si ya están metidos en el ecosistema crypto y quieren ampliar su conocimiento cómo si tienen que partir desde cero.Encontramos que es el mejor puntapié inicial, dándoles bases sólidas para entender y seguir creciendo dentro del ecosistema. Incluso esto termina generando que se despierte su curiosidad en el tema, que traigan preguntas y muchas ideas nuevas al equipo. Sin dudas Defy es clave en el crecimiento y maduración que buscamos continuamente en Belo.",
        profileImage: "https://global-uploads.webflow.com/61942494d9efcb7a66aac5ef/6205121ca928079a3489e7c1_edwin_rager.jpeg"
    }
]

/* Carga de los elementos del slider */

const slider= document.getElementById('slider')
const fragment= document.createDocumentFragment()

for (const customer of customers) {
    const article= document.createElement('article')
    const profileImage= document.createElement('img')
    const name= document.createElement('h4')
    const profession= document.createElement('h5')
    const testimony= document.createElement('p')

    article.classList.add('customer__container')
    profileImage.setAttribute('src',customer.profileImage)
    profileImage.classList.add('customer__image')
    name.textContent= customer.name
    name.classList.add('customer__name')
    profession.textContent= customer.profession
    profession.classList.add('customer__profession')
    testimony.textContent= customer.testimony
    testimony.classList.add('customer__testimony')
    
    
    article.appendChild(profileImage)
    article.appendChild(name)
    article.appendChild(profession)
    article.appendChild(testimony)
    
    fragment.appendChild(article)
}

slider.appendChild(fragment)

/* Funcionamiento del slider */

let sliderElements= document.querySelectorAll(".customer__container")
let lastElement= sliderElements[sliderElements.length-1]
const btnLeft= document.getElementById("btn-left")
const btnRight= document.getElementById("btn-right")

slider.insertAdjacentElement("afterbegin", lastElement)

btnRight.addEventListener("click", ()=> {
    next()
    noClick()
})

btnLeft.addEventListener("click", ()=> {
    prev()
    noClick()
})

function next() {
    let firstElement= document.querySelectorAll(".customer__container")[0]
    slider.style.marginLeft= "-200%"
    slider.style.transition= "all 500ms"
    setTimeout(() => {
        slider.style.transition= "none"
        slider.insertAdjacentElement("beforeend", firstElement)
        slider.style.marginLeft= "-100%"
    }, 500);
}

function prev() {
    sliderElements= document.querySelectorAll(".customer__container")
    lastElement= sliderElements[sliderElements.length-1]
    slider.style.marginLeft= "0%"
    slider.style.transition= "all 500ms"
    setTimeout(() => {
        slider.style.transition= "none"
        slider.insertAdjacentElement("afterbegin", lastElement)
        slider.style.marginLeft= "-100%"
    }, 500);
}

function noClick(){
    btnLeft.style.pointerEvents="none"
    btnRight.style.pointerEvents="none"
    setTimeout(() => {
        btnLeft.style.pointerEvents="visible"
        btnRight.style.pointerEvents="visible"
    }, 500);
}


