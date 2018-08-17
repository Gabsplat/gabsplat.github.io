/* LENGUAJES */

const languages = {
    en: {
        menu_index: "HOME",
        menu_about: "ABOUT ME",
        menu_contacto:"CONTACT",
        header_descripcion: "WEB DESIGNER <b>&</b > DEVELOPER",
        habilidad_titulo: "Skills",
        habilidad_item0_titulo: "Web development",
        habilidad_item0_descripcion: "I develop from landing web pages to business web pages, with excelent performance and beautiful animations.",
        habilidad_item1_titulo: "Web design",
        habilidad_item1_descripcion: "I can design web pages from scratch or make something new from an already made web site, always profesional and with an artistic touch.",
        habilidad_item2_titulo: "Learning",
        habilidad_item2_descripcion: "I am able to learn new technologies very fast and I can adjust to the workspace without problems.",
        proyectos_titulo: "Projects",
        proyectos_img1_descripcion: "Website for a Chinese food restaurant called 'SKETCHÁurant'. <br> (FICTIONAL) ",
        proyectos_img2_descripcion: "COMING SOON",
        // page 2
        about_titulo: "ABOUT ME",
        about_parrafo1: "Hi! My name is Gabriel Pérez Diez, I'm 17 years old and I'm from Mendoza, Argentina. Currently I study for school, and I build websites. I'd like to keep learning about web design and development, and I am always open to accept criticism about my work to get better.",
        about_parrafo2: "I like to use the computer, meet with friends and watch TV series. I have good relationship with people around me and I'm very straightforward with people.",
        experience_titulo: "EXPERIENCE",
        experience_1: "#MUJERSEGURA HACKATHON 3RD PLACE - 26/09/17",
        experience_2: "ROBOTICS AND PROGRAMMING CLASS - MARTÍN ZAPATA SCHOOL",
        experience_3: "EMPRENDE U ORANGE PROJECT (EDUCATION) - 19/04/17",
        abilities_titulo: "ABILITIES",

    },
    es: {
        menu_index: "INICIO",
        menu_about: "SOBRE MÍ",
        menu_contacto:"CONTACTO",
        header_descripcion: "DISEÑADOR <b>+</b> DESARROLLADOR WEB", 
        habilidad_titulo: "Habilidades",
        habilidad_item0_titulo: "Desarrollo Web",
        habilidad_item0_descripcion: "Desarrollo desde páginas de presentación a páginas empresariales, con buen rendimiento y excelentes animaciones. ",
        habilidad_item1_titulo: "Diseño Web",
        habilidad_item1_descripcion: "Puedo diseñar páginas web desde 0 o basarme en algún diseño ya hecho por otro, siempre con un toque artístico y profesional.",
        habilidad_item2_titulo: "Aprendizaje",
        habilidad_item2_descripcion: "Tengo la capacidad de aprender nuevas tecnologías rapidamente y adecuarme al espacio de trabajo sin problemas.",
        proyectos_titulo: "Proyectos",
        proyectos_img1_descripcion: "Página web para un restaurante de comida china llamado 'Sketchá'. <br> (FICTIO)",
        proyectos_img2_descripcion: "COMING SOON",
        // page 2
        about_titulo: "SOBRE MÍ",
        about_parrafo1: "¡Hola! Mi nombre es Gabriel Pérez Diez, tengo 17 años y soy de Mendoza, Argentina. Actualmente me dedico a estudiar, y al desarrollo de sitios web. Estoy interesado en progresar y seguir aprendiendo más sobre el diseño/desarrollo web, abierto a recibir críticas sobre lo que hago y mejorar.",
        about_parrafo2: "Me gusta usar la computadora, juntarme con amigos y ver series de televisión. Tengo buena relación con las personas que me rodean y soy bastante directo en algunas ocasiones.",
        experience_titulo: "EXPERIENCIA",
        experience_1: "HACKATHON #MUJERSEGURA 3ER PUESTO - 26/09/17",
        experience_2: "TALLER DE ROBÓTICA Y PROGRAMACIÓN - DICTADO EN ECMZ",
        experience_3: "EMPRENDE U PROYECTO NARANJA (EDUCACIÓN) - 19/04/17",
        abilities_titulo: "HABILIDADES",


    }
}


function addSpanish(){
    localStorage.setItem('lang', 'es');
    updateContent('es')
}

function addEnglish(){
    localStorage.setItem('lang', 'en');
    updateContent('en')
}



if(localStorage.length !== 1){
    var browserLang = navigator.languages || navigator.userLanguage; 
    if(navigator.languages[1] == "es"){
        updateContent("es");
    } else{
        updateContent("en");
    }
} else{
    updateContent(localStorage.getItem("lang"));
}

function updateContent(lang) {
    // get all elements that need translating
    const l10nElements = document.body.querySelectorAll('[data-l10n]');
    let identifier = "";

    // update the elements that need translating
    l10nElements.forEach(element => {
        identifier = element.getAttribute("data-l10n");
            element.innerHTML = languages[lang][identifier];
    });
}
