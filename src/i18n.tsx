import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Lang = 'fr' | 'es' | 'en'

export interface ServiceItem {
  name: string
  category: string
  tagline: string
}

export interface CareerItem {
  period: string
  role: string
  org: string
  place: string
  desc: string
}

export interface Copy {
  meta: { title: string; description: string }
  nav: { about: string; expertise: string; services: string; career: string; contact: string }
  hero: {
    eyebrow: string
    name: string
    headline: string
    headlineGold: string
    available: string
    sub: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { value: string; label: string }[]
  }
  marquee: string[]
  about: {
    eyebrow: string
    title: string
    quote: string
    p1: string
    p2: string
    p3: string
    chipsTitle: string
    chips: string[]
    langsTitle: string
    langs: string[]
  }
  expertise: {
    eyebrow: string
    title: string
    sub: string
    items: { title: string; desc: string }[]
  }
  services: {
    eyebrow: string
    title: string
    sub: string
    prevLabel: string
    nextLabel: string
    items: ServiceItem[]
  }
  career: {
    eyebrow: string
    title: string
    sub: string
    items: CareerItem[]
  }
  education: {
    eyebrow: string
    title: string
    schools: { school: string; note: string }[]
    extra: string
    langsTitle: string
    langsNote: string
    langs: string[]
  }
  contact: {
    eyebrow: string
    title: string
    sub: string
    emailLabel: string
    linkedinLabel: string
    location: string
  }
  footer: { role: string; rights: string }
}

const fr: Copy = {
  meta: {
    title: 'Lydie Lebron Sanchez M. | Consultante internationale',
    description:
      'Consultante internationale. Diplomatie, coopération, formation, immigration, affaires consulaires, immobilier, microfinance, levée de fonds et gestion de crise.',
  },
  nav: {
    about: 'À propos',
    expertise: 'Expertise',
    services: 'Services',
    career: 'Parcours',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Consultante internationale · France',
    name: 'Lydie Lebron Sanchez M.',
    headline: 'Relier les institutions, les entreprises et les personnes au delà des frontières.',
    headlineGold: 'au delà des frontières',
    available: 'Disponible pour de nouvelles missions',
    sub: "J'accompagne les institutions, les entreprises et les particuliers en diplomatie, coopération, communication politique, tourisme, immigration, affaires consulaires, microfinance, levée de fonds et gestion de crise.",
    ctaPrimary: 'Discutons de votre projet',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '15+', label: "années d'expérience" },
      { value: '12', label: "domaines d'expertise" },
      { value: '4', label: 'langues de travail' },
    ],
  },
  marquee: [
    'Diplomatie',
    'Coopération internationale',
    'Gestion de crise',
    'Formation',
    'Tourisme',
    'Immigration',
    'Immobilier',
    'Microfinance',
    'Levée de fonds',
    'Événementiel',
    'Langues',
    'Gestion de projets',
  ],
  about: {
    eyebrow: 'À propos',
    title: 'Une diplomatie du concret',
    quote: "Chaque projet international est d'abord une rencontre entre des cultures, des institutions et des personnes.",
    p1: "Formatrice et consultante depuis 2011, j'interviens à la croisée de la diplomatie, de la coopération et du développement de projets. Depuis 2017, je forme les élues locales au sein de l'IEPP à Paris et j'accompagne des organisations publiques et privées, en France comme à l'international.",
    p2: "Formée à l'Université des Antilles et à l'Université Bordeaux 2, je porte une attention particulière à la coopération caribéenne et internationale. Mon approche associe rigueur institutionnelle, sens du terrain et culture du résultat.",
    p3: "De la stratégie à la mise en œuvre, chaque mission est construite sur mesure: analyse, plan d'action, accompagnement et transmission.",
    chipsTitle: 'Compétences clés',
    chips: [
      'Diplomatie',
      'Affaires migratoires',
      'Négociation',
      'Traduction',
      'Gestion du changement',
      'Relations publiques',
      'Conseil aux ONG',
      'Conseil en gestion',
      'Gestion de projets',
      'Organisation & recrutement',
    ],
    langsTitle: 'Langues',
    langs: ['Français', 'Espagnol', 'Anglais', 'Portugais'],
  },
  expertise: {
    eyebrow: 'Expertise',
    title: "Domaines d'intervention",
    sub: "Un accompagnement transversal, de la stratégie institutionnelle aux projets de terrain.",
    items: [
      { title: 'Diplomatie & relations extérieures', desc: 'Représentation, protocole et relations institutionnelles.' },
      { title: 'Coopération caribéenne & internationale', desc: "Partenariats entre l'Europe, la Caraïbe et le monde." },
      { title: 'Gestion de crise', desc: 'Anticipation, médiation et communication sensible.' },
      { title: 'Tourisme & immigration', desc: 'Mobilité internationale, séjours et démarches.' },
      { title: 'Microfinance & levée de fonds', desc: 'Financement de projets et recherche de partenaires.' },
      { title: 'Immobilier', desc: 'Location, vente, achat et estimation.' },
      { title: "Formation d'élues & de formateurs", desc: 'Formations continues, pédagogie et ingénierie.' },
      { title: 'Gestion de projets & organisation', desc: 'Cadrage, pilotage, organisation et recrutement.' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'Ce que je peux faire pour vous',
    sub: 'Faites glisser pour faire tourner la galerie.',
    prevLabel: 'Service précédent',
    nextLabel: 'Service suivant',
    items: [
      { name: 'Diplomatie & coopération', category: 'Conseil stratégique', tagline: 'Représentation, médiation et relations institutionnelles.' },
      { name: 'Services migratoires & consulaires', category: 'Mobilité internationale', tagline: 'Visas, démarches administratives et accompagnement consulaire.' },
      { name: 'Organisation de voyages', category: 'Mobilité internationale', tagline: 'Voyages sur mesure pour particuliers et professionnels.' },
      { name: 'Immobilier', category: 'Patrimoine', tagline: 'Location, vente, achat et estimation immobilière.' },
      { name: "Formation d'élues", category: 'Formation', tagline: 'Accompagnement des élues locales depuis 2017.' },
      { name: 'Microfinance & levée de fonds', category: 'Financement', tagline: 'Structuration financière et recherche de fonds.' },
      { name: "Organisation d'événements", category: 'Événementiel', tagline: 'Événements institutionnels, professionnels et privés.' },
      { name: 'Institut de langues', category: 'Éducation', tagline: 'FLE, espagnol et anglais, tous niveaux.' },
      { name: 'Formation en entreprise', category: 'Formation', tagline: 'Formation de formateurs et ingénierie pédagogique.' },
      { name: 'Centre sportif', category: 'Bien-être', tagline: 'Programmes sportifs et encadrement.' },
      { name: 'Naturopathie', category: 'Bien-être', tagline: 'Approche naturelle de la santé et du bien-être.' },
    ],
  },
  career: {
    eyebrow: 'Parcours',
    title: 'Expérience professionnelle',
    sub: "Quinze ans de formation, de conseil et de conduite de projets.",
    items: [
      {
        period: '2017 · aujourd’hui',
        role: 'Formatrice',
        org: 'IEPP, Formation des Élus',
        place: 'Paris, Île-de-France',
        desc: 'Formation continue des élues locales.',
      },
      {
        period: '2011 · aujourd’hui',
        role: "Formatrice d'entreprises",
        org: 'Indépendante',
        place: 'France & international',
        desc: 'Conseil et formation sur mesure pour entreprises, institutions et particuliers.',
      },
      {
        period: '2020',
        role: 'Responsable de projet',
        org: 'Fornaxess',
        place: 'France',
        desc: "Création d'un centre de formation de A à Z.",
      },
      {
        period: '2019 · 2020',
        role: 'Formatrice',
        org: 'AFTRAL',
        place: 'France',
        desc: 'Formations LEA anglais et espagnol, transport et tourisme.',
      },
      {
        period: '2016 · 2018',
        role: 'Propriétaire',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: "Direction d'une agence de services de proximité.",
      },
    ],
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation académique',
    schools: [
      { school: 'Université des Antilles', note: 'Formation universitaire' },
      { school: 'Université Bordeaux 2', note: 'Formation universitaire' },
    ],
    extra: 'Complétée par des formations continues et des certifications tout au long du parcours.',
    langsTitle: 'Langues de travail',
    langsNote: 'Un accompagnement possible en quatre langues.',
    langs: ['Français', 'Espagnol', 'Anglais', 'Portugais'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Travaillons ensemble',
    sub: "Basée en France, disponible pour des missions en Europe, dans la Caraïbe et à l'international. Parlons de votre projet.",
    emailLabel: 'Envoyer un email',
    linkedinLabel: 'Me suivre sur LinkedIn',
    location: 'France',
  },
  footer: {
    role: 'Consultante internationale',
    rights: 'Tous droits réservés.',
  },
}

const es: Copy = {
  meta: {
    title: 'Lydie Lebron Sanchez M. | Consultora internacional',
    description:
      'Consultora internacional. Diplomacia, cooperación, formación, inmigración, asuntos consulares, bienes raíces, microfinanzas, captación de fondos y gestión de crisis.',
  },
  nav: {
    about: 'Sobre mí',
    expertise: 'Especialidades',
    services: 'Servicios',
    career: 'Trayectoria',
    contact: 'Contacto',
  },
  hero: {
    eyebrow: 'Consultora internacional · Francia',
    name: 'Lydie Lebron Sanchez M.',
    headline: 'Conectar instituciones, empresas y personas más allá de las fronteras.',
    headlineGold: 'más allá de las fronteras',
    available: 'Disponible para nuevas misiones',
    sub: 'Acompaño a instituciones, empresas y particulares en diplomacia, cooperación, comunicación política, turismo, inmigración, asuntos consulares, microfinanzas, captación de fondos y gestión de crisis.',
    ctaPrimary: 'Hablemos de su proyecto',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '15+', label: 'años de experiencia' },
      { value: '12', label: 'áreas de especialización' },
      { value: '4', label: 'idiomas de trabajo' },
    ],
  },
  marquee: [
    'Diplomacia',
    'Cooperación internacional',
    'Gestión de crisis',
    'Formación',
    'Turismo',
    'Inmigración',
    'Bienes raíces',
    'Microfinanzas',
    'Captación de fondos',
    'Eventos',
    'Idiomas',
    'Gestión de proyectos',
  ],
  about: {
    eyebrow: 'Sobre mí',
    title: 'Una diplomacia de lo concreto',
    quote: 'Cada proyecto internacional es, ante todo, un encuentro entre culturas, instituciones y personas.',
    p1: 'Formadora y consultora desde 2011, trabajo en el cruce de la diplomacia, la cooperación y el desarrollo de proyectos. Desde 2017 formo a electas locales en el IEPP de París y acompaño a organizaciones públicas y privadas, en Francia y a nivel internacional.',
    p2: 'Formada en la Université des Antilles y en la Université Bordeaux 2, presto especial atención a la cooperación caribeña e internacional. Mi enfoque combina rigor institucional, sentido práctico y cultura de resultados.',
    p3: 'De la estrategia a la ejecución, cada misión se construye a medida: análisis, plan de acción, acompañamiento y transmisión.',
    chipsTitle: 'Competencias clave',
    chips: [
      'Diplomacia',
      'Asuntos migratorios',
      'Negociación',
      'Traducción',
      'Gestión del cambio',
      'Relaciones públicas',
      'Consultoría para ONG',
      'Consultoría de gestión',
      'Gestión de proyectos',
      'Organización y selección',
    ],
    langsTitle: 'Idiomas',
    langs: ['Francés', 'Español', 'Inglés', 'Portugués'],
  },
  expertise: {
    eyebrow: 'Especialidades',
    title: 'Áreas de intervención',
    sub: 'Un acompañamiento transversal, de la estrategia institucional a los proyectos de terreno.',
    items: [
      { title: 'Diplomacia y relaciones exteriores', desc: 'Representación, protocolo y relaciones institucionales.' },
      { title: 'Cooperación caribeña e internacional', desc: 'Alianzas entre Europa, el Caribe y el mundo.' },
      { title: 'Gestión de crisis', desc: 'Anticipación, mediación y comunicación sensible.' },
      { title: 'Turismo e inmigración', desc: 'Movilidad internacional, estancias y trámites.' },
      { title: 'Microfinanzas y captación de fondos', desc: 'Financiación de proyectos y búsqueda de socios.' },
      { title: 'Bienes raíces', desc: 'Alquiler, venta, compra y tasación.' },
      { title: 'Formación de electas y de formadores', desc: 'Formación continua, pedagogía e ingeniería.' },
      { title: 'Gestión de proyectos y organización', desc: 'Definición, pilotaje, organización y selección.' },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    title: 'Lo que puedo hacer por usted',
    sub: 'Arrastre para girar la galería.',
    prevLabel: 'Servicio anterior',
    nextLabel: 'Servicio siguiente',
    items: [
      { name: 'Diplomacia y cooperación', category: 'Consultoría estratégica', tagline: 'Representación, mediación y relaciones institucionales.' },
      { name: 'Servicios migratorios y consulares', category: 'Movilidad internacional', tagline: 'Visados, trámites administrativos y acompañamiento consular.' },
      { name: 'Organización de viajes', category: 'Movilidad internacional', tagline: 'Viajes a medida para particulares y profesionales.' },
      { name: 'Bienes raíces', category: 'Patrimonio', tagline: 'Alquiler, venta, compra y tasación inmobiliaria.' },
      { name: 'Formación de electas', category: 'Formación', tagline: 'Acompañamiento de electas locales desde 2017.' },
      { name: 'Microfinanzas y captación de fondos', category: 'Financiación', tagline: 'Estructuración financiera y búsqueda de fondos.' },
      { name: 'Organización de eventos', category: 'Eventos', tagline: 'Eventos institucionales, profesionales y privados.' },
      { name: 'Instituto de idiomas', category: 'Educación', tagline: 'Francés, español e inglés, todos los niveles.' },
      { name: 'Formación empresarial', category: 'Formación', tagline: 'Formación de formadores e ingeniería pedagógica.' },
      { name: 'Centro deportivo', category: 'Bienestar', tagline: 'Programas deportivos y acompañamiento.' },
      { name: 'Naturopatía', category: 'Bienestar', tagline: 'Enfoque natural de la salud y del bienestar.' },
    ],
  },
  career: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia profesional',
    sub: 'Quince años de formación, consultoría y gestión de proyectos.',
    items: [
      {
        period: '2017 · actualidad',
        role: 'Formadora',
        org: 'IEPP, Formation des Élus',
        place: 'París, Île-de-France',
        desc: 'Formación continua de electas locales.',
      },
      {
        period: '2011 · actualidad',
        role: 'Formadora de empresas',
        org: 'Independiente',
        place: 'Francia e internacional',
        desc: 'Consultoría y formación a medida para empresas, instituciones y particulares.',
      },
      {
        period: '2020',
        role: 'Responsable de proyecto',
        org: 'Fornaxess',
        place: 'Francia',
        desc: 'Creación de un centro de formación de la A a la Z.',
      },
      {
        period: '2019 · 2020',
        role: 'Formadora',
        org: 'AFTRAL',
        place: 'Francia',
        desc: 'Formación LEA de inglés y español, transporte y turismo.',
      },
      {
        period: '2016 · 2018',
        role: 'Propietaria',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: 'Dirección de una agencia de servicios de proximidad.',
      },
    ],
  },
  education: {
    eyebrow: 'Formación',
    title: 'Formación académica',
    schools: [
      { school: 'Université des Antilles', note: 'Formación universitaria' },
      { school: 'Université Bordeaux 2', note: 'Formación universitaria' },
    ],
    extra: 'Completada con formación continua y certificaciones a lo largo de toda la trayectoria.',
    langsTitle: 'Idiomas de trabajo',
    langsNote: 'Acompañamiento posible en cuatro idiomas.',
    langs: ['Francés', 'Español', 'Inglés', 'Portugués'],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    sub: 'Con base en Francia, disponible para misiones en Europa, el Caribe y a nivel internacional. Hablemos de su proyecto.',
    emailLabel: 'Enviar un email',
    linkedinLabel: 'Seguirme en LinkedIn',
    location: 'Francia',
  },
  footer: {
    role: 'Consultora internacional',
    rights: 'Todos los derechos reservados.',
  },
}

const en: Copy = {
  meta: {
    title: 'Lydie Lebron Sanchez M. | International Consultant',
    description:
      'International consultant. Diplomacy, cooperation, training, immigration, consular affairs, real estate, microfinance, fundraising and crisis management.',
  },
  nav: {
    about: 'About',
    expertise: 'Expertise',
    services: 'Services',
    career: 'Career',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'International consultant · France',
    name: 'Lydie Lebron Sanchez M.',
    headline: 'Connecting institutions, businesses and people across borders.',
    headlineGold: 'across borders',
    available: 'Available for new assignments',
    sub: 'I support institutions, businesses and individuals in diplomacy, cooperation, political communication, tourism, immigration, consular affairs, microfinance, fundraising and crisis management.',
    ctaPrimary: 'Let us talk about your project',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '15+', label: 'years of experience' },
      { value: '12', label: 'areas of expertise' },
      { value: '4', label: 'working languages' },
    ],
  },
  marquee: [
    'Diplomacy',
    'International cooperation',
    'Crisis management',
    'Training',
    'Tourism',
    'Immigration',
    'Real estate',
    'Microfinance',
    'Fundraising',
    'Events',
    'Languages',
    'Project management',
  ],
  about: {
    eyebrow: 'About',
    title: 'Diplomacy, made practical',
    quote: 'Every international project is, above all, a meeting of cultures, institutions and people.',
    p1: 'A trainer and consultant since 2011, I work at the crossroads of diplomacy, cooperation and project development. Since 2017 I have been training locally elected officials at the IEPP in Paris, while supporting public and private organisations in France and internationally.',
    p2: 'Educated at the Université des Antilles and the Université Bordeaux 2, I pay particular attention to Caribbean and international cooperation. My approach combines institutional rigour, field experience and a focus on results.',
    p3: 'From strategy to delivery, every assignment is tailor made: analysis, action plan, hands-on support and knowledge transfer.',
    chipsTitle: 'Core skills',
    chips: [
      'Diplomacy',
      'Migration affairs',
      'Negotiation',
      'Translation',
      'Change management',
      'Public relations',
      'NGO consulting',
      'Management consulting',
      'Project management',
      'Organisation & recruitment',
    ],
    langsTitle: 'Languages',
    langs: ['French', 'Spanish', 'English', 'Portuguese'],
  },
  expertise: {
    eyebrow: 'Expertise',
    title: 'Areas of practice',
    sub: 'Cross-cutting support, from institutional strategy to projects on the ground.',
    items: [
      { title: 'Diplomacy & foreign affairs', desc: 'Representation, protocol and institutional relations.' },
      { title: 'Caribbean & international cooperation', desc: 'Partnerships between Europe, the Caribbean and beyond.' },
      { title: 'Crisis management', desc: 'Anticipation, mediation and sensitive communication.' },
      { title: 'Tourism & immigration', desc: 'International mobility, stays and procedures.' },
      { title: 'Microfinance & fundraising', desc: 'Project financing and partner outreach.' },
      { title: 'Real estate', desc: 'Rental, sale, purchase and appraisal.' },
      { title: 'Training of elected officials & trainers', desc: 'Continuing education, pedagogy and design.' },
      { title: 'Project management & organisation', desc: 'Scoping, steering, organisation and recruitment.' },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'What I can do for you',
    sub: 'Drag to rotate the gallery.',
    prevLabel: 'Previous service',
    nextLabel: 'Next service',
    items: [
      { name: 'Diplomacy & cooperation', category: 'Strategic consulting', tagline: 'Representation, mediation and institutional relations.' },
      { name: 'Migration & consular services', category: 'International mobility', tagline: 'Visas, administrative procedures and consular support.' },
      { name: 'Travel planning', category: 'International mobility', tagline: 'Tailor-made trips for individuals and professionals.' },
      { name: 'Real estate', category: 'Property', tagline: 'Rental, sale, purchase and property appraisal.' },
      { name: 'Training for elected officials', category: 'Training', tagline: 'Supporting locally elected officials since 2017.' },
      { name: 'Microfinance & fundraising', category: 'Financing', tagline: 'Financial structuring and fundraising.' },
      { name: 'Event planning', category: 'Events', tagline: 'Institutional, professional and private events.' },
      { name: 'Language institute', category: 'Education', tagline: 'French, Spanish and English, all levels.' },
      { name: 'Corporate training', category: 'Training', tagline: 'Train-the-trainer programmes and instructional design.' },
      { name: 'Sports centre', category: 'Wellbeing', tagline: 'Sports programmes and coaching.' },
      { name: 'Naturopathy', category: 'Wellbeing', tagline: 'A natural approach to health and wellbeing.' },
    ],
  },
  career: {
    eyebrow: 'Career',
    title: 'Professional experience',
    sub: 'Fifteen years of training, consulting and project leadership.',
    items: [
      {
        period: '2017 · present',
        role: 'Trainer',
        org: 'IEPP, Formation des Élus',
        place: 'Paris, Île-de-France',
        desc: 'Continuing education for locally elected officials.',
      },
      {
        period: '2011 · present',
        role: 'Corporate trainer',
        org: 'Independent',
        place: 'France & international',
        desc: 'Tailor-made consulting and training for businesses, institutions and individuals.',
      },
      {
        period: '2020',
        role: 'Project manager',
        org: 'Fornaxess',
        place: 'France',
        desc: 'Built a training centre from the ground up.',
      },
      {
        period: '2019 · 2020',
        role: 'Trainer',
        org: 'AFTRAL',
        place: 'France',
        desc: 'LEA English and Spanish training, transport and tourism.',
      },
      {
        period: '2016 · 2018',
        role: 'Owner',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: 'Ran a local home-services agency.',
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Academic background',
    schools: [
      { school: 'Université des Antilles', note: 'University education' },
      { school: 'Université Bordeaux 2', note: 'University education' },
    ],
    extra: 'Complemented by continuing education and certifications throughout my career.',
    langsTitle: 'Working languages',
    langsNote: 'Support available in four languages.',
    langs: ['French', 'Spanish', 'English', 'Portuguese'],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us work together',
    sub: 'Based in France, available for assignments in Europe, the Caribbean and worldwide. Tell me about your project.',
    emailLabel: 'Send an email',
    linkedinLabel: 'Follow me on LinkedIn',
    location: 'France',
  },
  footer: {
    role: 'International consultant',
    rights: 'All rights reserved.',
  },
}

const copies: Record<Lang, Copy> = { fr, es, en }

interface I18nContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: Copy
}

const I18nContext = createContext<I18nContextValue>({
  lang: 'fr',
  setLang: () => {},
  t: fr,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null
    return saved === 'es' || saved === 'en' || saved === 'fr' ? saved : 'fr'
  })

  useEffect(() => {
    window.localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
    document.title = copies[lang].meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', copies[lang].meta.description)
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, t: copies[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useLang() {
  return useContext(I18nContext)
}
