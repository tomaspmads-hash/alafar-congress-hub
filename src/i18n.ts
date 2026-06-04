import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        program: "Programa",
        authorities: "Autoridades",
        registration: "Inscripciones",
        information: "Información",
        accommodation: "Alojamiento",
        sponsors: "Sponsors",
        register: "Inscribirme",
        programTechnical: "Programa Técnico",
        programSocial: "Programa Social",
        programCorporate: "Actividades Societarias",
      },
      welcomeModal: {
        title: "Bienvenidos / Welcome",
        subtitle: "Elegí tu idioma para continuar — Choose your language to continue",
        spanish: "Español",
        english: "English",
      },
      hero: {
        eyebrow: "XLIV Edición",
        title: "Congreso ALAFAR 2026",
        dates: "Buenos Aires · Hotel Sofitel · Octubre 2026",
        president: "Presidente del Congreso",
        presidentName: "Dr. Celso Freitas",
      },
      welcome: {
        title: "Bienvenidos",
        signature: "Dr. Celso Freitas — Presidente del Congreso ALAFAR 2026",
        p1: "Es un honor y un enorme placer darles la bienvenida al XLIV Congreso de la Asociación Latinoamericana de Fabricantes de Refractarios, que tendrá lugar en la ciudad de Buenos Aires en octubre de 2026.",
        p2: "Este congreso reúne, una vez más, a empresarios, técnicos, investigadores y profesionales de toda la región para compartir avances, experiencias y desafíos que están transformando la industria refractaria mundial.",
        p3: "Durante tres días tendremos la oportunidad de debatir sobre resiliencia operativa, eficiencia, sostenibilidad y nuevas tecnologías aplicadas a procesos térmicos críticos, en un entorno único de networking y colaboración.",
        p4: "Los esperamos en Buenos Aires para vivir juntos una edición memorable.",
      },
      bsAs: { title: "Buenos Aires, Argentina", tagline: "Ciudad sede del XLIV Congreso ALAFAR" },
      highlights: {
        title: "Lo que vas a encontrar",
        h1Title: "Programa Técnico de primer nivel",
        h1Desc: "Sesiones plenarias y mesas técnicas con referentes globales del sector refractario.",
        h2Title: "Networking regional",
        h2Desc: "Encontrate con líderes y decisores de toda la industria latinoamericana.",
        h3Title: "Hotel Sofitel · Recoleta",
        h3Desc: "Una sede de excelencia en el corazón cultural de Buenos Aires.",
        h4Title: "Programa Social",
        h4Desc: "Cocktail, almuerzo típico con tango y cena de despedida.",
        cta: "Conocé el programa completo",
      },
      footer: {
        orgAlafar: "Organización ALAFAR",
        alafarName: "Asociación Latinoamericana de Fabricantes de Refractarios",
        orgGeneral: "Organización General",
        metName: "MET GROUP — Marketing Events and Travel Group SA",
        metDesc: "Organización general del congreso.",
        venue: "Hotel Sofitel · Buenos Aires, Argentina",
        rights: "© ALAFAR 2026. Todos los derechos reservados.",
        backTop: "Volver arriba",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        program: "Program",
        authorities: "Authorities",
        registration: "Registration",
        information: "Information",
        accommodation: "Accommodation",
        sponsors: "Sponsors",
        register: "Register",
        programTechnical: "Technical Program",
        programSocial: "Social Program",
        programCorporate: "Corporate Activities",
      },
      welcomeModal: {
        title: "Welcome / Bienvenidos",
        subtitle: "Choose your language to continue — Elegí tu idioma para continuar",
        spanish: "Español",
        english: "English",
      },
      hero: {
        eyebrow: "XLIV Edition",
        title: "ALAFAR 2026 Congress",
        dates: "Buenos Aires · Sofitel Hotel · October 2026",
        president: "Congress President",
        presidentName: "Dr. Celso Freitas",
      },
      welcome: {
        title: "Welcome",
        signature: "Dr. Celso Freitas — President of ALAFAR 2026 Congress",
        p1: "It is an honor and a great pleasure to welcome you to the 44th Congress of the Latin American Association of Refractory Manufacturers, to be held in Buenos Aires in October 2026.",
        p2: "This congress brings together executives, technicians, researchers and professionals from across the region to share advances, experiences and challenges that are transforming the global refractory industry.",
        p3: "Over three days we will discuss operational resilience, efficiency, sustainability and new technologies applied to critical thermal processes, in a unique environment of networking and collaboration.",
        p4: "We look forward to seeing you in Buenos Aires for a memorable edition.",
      },
      bsAs: { title: "Buenos Aires, Argentina", tagline: "Host city of the 44th ALAFAR Congress" },
      highlights: {
        title: "What to expect",
        h1Title: "World-class Technical Program",
        h1Desc: "Plenary sessions and technical panels with global refractory leaders.",
        h2Title: "Regional networking",
        h2Desc: "Meet decision-makers from across the Latin American industry.",
        h3Title: "Sofitel Hotel · Recoleta",
        h3Desc: "An outstanding venue in the cultural heart of Buenos Aires.",
        h4Title: "Social Program",
        h4Desc: "Cocktail, typical lunch with tango show and farewell dinner.",
        cta: "See the full program",
      },
      footer: {
        orgAlafar: "ALAFAR Organization",
        alafarName: "Latin American Association of Refractory Manufacturers",
        orgGeneral: "General Organization",
        metName: "MET GROUP — Marketing Events and Travel Group SA",
        metDesc: "General organizers of the congress.",
        venue: "Sofitel Hotel · Buenos Aires, Argentina",
        rights: "© ALAFAR 2026. All rights reserved.",
        backTop: "Back to top",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: "es",
      supportedLngs: ["es", "en"],
      detection: {
        order: ["localStorage", "navigator"],
        lookupLocalStorage: "alafar-lang",
        caches: ["localStorage"],
      },
      interpolation: { escapeValue: false },
    });
}

export default i18n;
