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

export interface ForumPole {
  title: string
  items: string[]
}

export interface ForumDay {
  label: string
  title: string
  items: string[]
}

export interface Copy {
  meta: { title: string; description: string }
  nav: {
    about: string
    expertise: string
    services: string
    career: string
    forum: string
    contact: string
  }
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
  forum: {
    eyebrow: string
    title: string
    intro: string
    tabs: string[]
    vision: {
      theme: string
      durationLocation: string
      objectivesTitle: string
      objectives: string[]
      impactTitle: string
      impact: { label: string; items: string[] }[]
    }
    grandeCaraibe: {
      title: string
      sub: string
      poles: ForumPole[]
      missTitle: string
      missDesc: string
      prizesTitle: string
      prizes: string[]
    }
    guadeloupe: {
      title: string
      sub: string
      duration: string
      days: ForumDay[]
      missNote: string
      prizesTitle: string
      prizes: string[]
      budgetLabel: string
      budgetValue: string
      partnersTitle: string
      partners: string[]
    }
    academy: {
      title: string
      subtitle: string
      intro: string
      topicsTitle: string
      topics: string[]
    }
  }
  contact: {
    eyebrow: string
    title: string
    sub: string
    whatsappLabel: string
    whatsappMessage: string
    emailLabel: string
    linkedinLabel: string
    location: string
  }
  footer: { role: string; rights: string }
}

const fr: Copy = {
  meta: {
    title: 'Lydie Monthouel Lebron de Guarinos | Consultante internationale',
    description:
      'Consultante internationale. Diplomatie, coopération, formation, immigration, affaires consulaires, immobilier, microfinance, levée de fonds et gestion de crise.',
  },
  nav: {
    about: 'À propos',
    expertise: 'Expertise',
    services: 'Services',
    career: 'Parcours',
    forum: 'Forum Amérique Latine & Caraïbe',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'Consultante internationale · France',
    name: 'Lydie Monthouel Lebron de Guarinos',
    headline: 'Relier les institutions, les entreprises et les personnes au delà des frontières.',
    headlineGold: 'au delà des frontières',
    available: 'Disponible pour de nouvelles missions',
    sub: "J'accompagne les institutions, les entreprises et les particuliers en diplomatie, coopération, communication politique, tourisme, immigration, affaires consulaires, microfinance, levée de fonds et gestion de crise.",
    ctaPrimary: 'Discutons de votre projet',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '40+', label: "années d'expérience" },
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
    p1: "Après vingt-neuf ans au service de la Région Guadeloupe, dont un mandat d'adjointe au maire de Trois-Rivières, je me consacre depuis 2011 à la formation et au conseil, à la croisée de la diplomatie, de la coopération et du développement de projets. Depuis 2017, je forme les élues locales au sein de l'IEPP à Paris et j'accompagne des organisations publiques et privées, en France comme à l'international.",
    p2: "Formée à l'Université des Antilles et à l'Université Bordeaux 2, certifiée formatrice de formateurs (2011) et formée à l'ICOPER en diplomatie, relations extérieures et communication politique (2026), je porte une attention particulière à la coopération latino-américaine, caribéenne et internationale. Mon approche associe rigueur institutionnelle, sens du terrain et culture du résultat.",
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
      { name: 'Services migratoires', category: 'Mobilité internationale', tagline: 'Changement de pays, résidence et naturalisation.' },
      { name: 'Services consulaires', category: 'Mobilité internationale', tagline: 'Visas, démarches administratives et accompagnement consulaire.' },
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
    sub: 'Quarante ans de service public, de formation et de conduite de projets.',
    items: [
      {
        period: '2024 · aujourd’hui',
        role: 'Formatrice indépendante',
        org: 'AAA+ Formations et Insertion, Institut Paris 8',
        place: 'Paris',
        desc: 'Formations en anglais, espagnol et français langue étrangère (FLE).',
      },
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
        desc: 'Formation en gestion de projets, FLE, anglais et espagnol jusqu’au niveau C+, anglais et espagnol business, pour entreprises et particuliers.',
      },
      {
        period: '2020',
        role: 'Responsable de projet',
        org: 'Formaxess',
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
        role: 'Chef contrôle qualité',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: "Contrôle qualité et suivi des prestations d'une agence de services à la personne.",
      },
      {
        period: '1986 · 2015',
        role: 'Responsable de service, cadre territoriale',
        org: 'Région Guadeloupe',
        place: 'Basse-Terre, Guadeloupe',
        desc: 'Documentation, protocole, cabinets et presse des présidents de Région, affaires scolaires et formation professionnelle.',
      },
      {
        period: '2001 · 2008',
        role: 'Adjointe au maire',
        org: 'Ville de Trois-Rivières',
        place: 'Trois-Rivières, Guadeloupe',
        desc: "Déléguée au développement économique, aux affaires scolaires et aux transports ; présidente de la commission d'appel d'offres. Permanence hebdomadaire et gestion des affaires courantes.",
      },
    ],
  },
  education: {
    eyebrow: 'Formation',
    title: 'Formation & certifications',
    schools: [
      { school: 'Université des Antilles', note: 'Formation universitaire' },
      { school: 'Université Bordeaux 2', note: 'Formation universitaire' },
      { school: 'ICOPER', note: 'Diplomatie, relations extérieures et communication politique (2026)' },
      { school: 'Formation de formateurs', note: 'Certification (2011)' },
    ],
    extra: 'Complétée par des formations continues tout au long du parcours.',
    langsTitle: 'Langues de travail',
    langsNote: 'Un accompagnement possible en quatre langues.',
    langs: ['Français', 'Espagnol', 'Anglais', 'Portugais'],
  },
  forum: {
    eyebrow: 'Projet phare',
    title: 'Forum Amérique Latine & Caraïbe, Coopération & Développement',
    intro:
      "Un rendez-vous annuel imaginé pour réunir institutions, entreprises, femmes, jeunesse et cultures d'Amérique latine et de la Grande Caraïbe autour d'une ambition commune: construire ensemble l'Amérique latine et la Caraïbe de demain.",
    tabs: ['Vision', 'Le Forum Amérique Latine & Caraïbe', 'Édition pilote : Guadeloupe', 'Académie Leadership'],
    vision: {
      theme: "Construire ensemble l'Amérique latine et la Caraïbe de demain",
      durationLocation:
        '5 jours, en alternance chaque année (République dominicaine, Guadeloupe, Martinique, Sainte-Lucie, Barbade, Jamaïque, Colombie, Panama, Costa Rica...).',
      objectivesTitle: 'Les objectifs',
      objectives: [
        "Renforcer les échanges entre les territoires d'Amérique latine et de la Caraïbe",
        'Favoriser les investissements et les partenariats',
        'Valoriser les cultures latino-américaines et caribéennes',
        'Promouvoir le tourisme régional',
        "Soutenir l'entrepreneuriat féminin et des jeunes",
        'Donner une visibilité internationale aux initiatives de coopération',
      ],
      impactTitle: 'Retombées attendues',
      impact: [
        { label: 'Économiques', items: ['Fréquentation hôtelière', 'Restauration', 'Transport', 'Commerce', 'Artisanat'] },
        { label: 'Culturelles', items: ['Promotion des artistes', 'Valorisation du patrimoine'] },
        { label: 'Diplomatiques', items: ['Nouveaux partenariats', 'Coopération universitaire', 'Échanges institutionnels'] },
      ],
    },
    grandeCaraibe: {
      title: 'Cinq grands pôles',
      sub: "Du sommet institutionnel au festival des cultures, un forum pensé comme une vitrine complète de la coopération latino-américaine et caribéenne.",
      poles: [
        {
          title: 'Sommet institutionnel',
          items: ['Ministres, maires, parlementaires', 'Organisations régionales, chambres de commerce', 'Coopération économique, mobilité, transition énergétique'],
        },
        {
          title: 'Forum économique',
          items: ['Entreprises, investisseurs, banques, start-up', 'Rencontres B2B et rendez-vous investisseurs', "Salon de l'innovation"],
        },
        {
          title: 'Forum des femmes',
          items: ['Leadership et politique', 'Entrepreneuriat et microfinance', 'Santé et numérique'],
        },
        {
          title: 'Forum de la jeunesse',
          items: ['Universités, écoles, associations', "Concours d'éloquence, hackathon", 'Simulations diplomatiques'],
        },
        {
          title: 'Festival des cultures latino-américaines et caribéennes',
          items: ['Un pavillon par territoire', 'Gastronomie, artisanat, musique, danse', 'Tourisme et traditions'],
        },
      ],
      missTitle: 'Miss Amérique Latine et Caraïbes',
      missDesc:
        'Le concours est intégré au forum: les candidates deviennent des ambassadrices de leur territoire, évaluées sur leur présentation, leur discours, un projet de coopération et un entretien avec le jury.',
      prizesTitle: 'Les prix',
      prizes: [
        'Miss Amérique Latine et Caraïbes',
        'Prix Leadership',
        'Prix Innovation',
        'Prix Culture',
        'Prix Environnement',
        'Prix Solidarité',
        'Prix Entrepreneuriat',
        'Prix Diplomatie',
      ],
    },
    guadeloupe: {
      title: "La Guadeloupe, carrefour de l'Amérique latine et de la Caraïbe",
      sub: 'Une première édition pilote pour ancrer le forum avant de l’étendre progressivement aux autres territoires.',
      duration: 'Durée : 3 jours',
      days: [
        {
          label: 'Jour 1',
          title: 'Coopération économique',
          items: ['Ouverture officielle (Région, Préfet, consuls)', 'Conférences: commerce, export, économie bleue', 'Rencontres B2B'],
        },
        {
          label: 'Jour 2',
          title: 'Jeunesse et femmes',
          items: ['Leadership féminin', 'Entrepreneuriat', 'Remise des Prix de la Coopération'],
        },
        {
          label: 'Jour 3',
          title: 'Culture et tourisme',
          items: ['Village caribéen, un stand par territoire', 'Gastronomie, artisanat, musique', 'Élection de Miss Guadeloupe Coopération'],
        },
      ],
      missNote:
        "Une ambassadrice de la coopération régionale, et non un concours concurrent de Miss Guadeloupe: les candidates sont évaluées sur leur projet, leur connaissance de l'Amérique latine et de la Caraïbe et leur capacité à représenter le territoire.",
      prizesTitle: 'Les prix',
      prizes: [
        'Ambassadrice de la Coopération',
        'Prix du Leadership',
        "Prix de l'Innovation",
        'Prix Culture',
        'Prix Tourisme',
        'Prix Jeunesse',
      ],
      budgetLabel: 'Budget estimatif',
      budgetValue: '80 000 € – 150 000 €',
      partnersTitle: 'Partenaires envisagés',
      partners: [
        'Région Guadeloupe',
        'Département',
        "Communautés d'agglomération",
        'Communes',
        'Chambres consulaires',
        'Universités',
        'Acteurs du tourisme',
        'Entreprises locales',
      ],
    },
    academy: {
      title: 'Académie Latino-Américaine et Caribéenne de Leadership pour Femmes Élues',
      subtitle: 'Un programme de formation continue',
      intro:
        "Pensée pour les conseillères, maires, députées et sénatrices d'Amérique latine et de la Caraïbe, cette académie structure vingt thématiques clés de la gouvernance et du leadership politique, dans la continuité des formations d'élues menées depuis 2017.",
      topicsTitle: 'Les vingt thématiques',
      topics: [
        'Leadership politique et éthique',
        'Gouvernance et administration publique',
        'Communication politique et gestion des médias',
        'Art oratoire et débat public',
        'Élaboration et évaluation des politiques publiques',
        'Gestion de projets et développement territorial',
        'Budget public et finances locales',
        'Transparence, redevabilité et lutte contre la corruption',
        'Diplomatie territoriale et coopération internationale',
        'Négociation, médiation et résolution de conflits',
        'Égalité des genres et leadership inclusif',
        'Participation citoyenne et renforcement démocratique',
        "Gestion de crise et communication d'urgence",
        'Transformation numérique et gouvernement électronique',
        'Relations institutionnelles et protocole',
        'Développement durable et Agenda 2030 (ODD)',
        'Gestion de campagnes et stratégie électorale',
        "Plaidoyer politique et construction d'alliances",
        'Droits humains et cadre juridique de la fonction publique',
        'Développement économique local et entrepreneuriat',
      ],
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Travaillons ensemble',
    sub: "Basée en France, disponible pour des missions en Europe, en Amérique latine, dans la Caraïbe et à l'international. Parlons de votre projet.",
    whatsappLabel: 'Écrire sur WhatsApp',
    whatsappMessage: 'Bonjour Lydie, je souhaite échanger sur un projet.',
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
    title: 'Lydie Monthouel Lebron de Guarinos | Consultora internacional',
    description:
      'Consultora internacional. Diplomacia, cooperación, formación, inmigración, asuntos consulares, bienes raíces, microfinanzas, captación de fondos y gestión de crisis.',
  },
  nav: {
    about: 'Sobre mí',
    expertise: 'Especialidades',
    services: 'Servicios',
    career: 'Trayectoria',
    forum: 'Foro América Latina y Caribe',
    contact: 'Contacto',
  },
  hero: {
    eyebrow: 'Consultora internacional · Francia',
    name: 'Lydie Monthouel Lebron de Guarinos',
    headline: 'Conectar instituciones, empresas y personas más allá de las fronteras.',
    headlineGold: 'más allá de las fronteras',
    available: 'Disponible para nuevas misiones',
    sub: 'Acompaño a instituciones, empresas y particulares en diplomacia, cooperación, comunicación política, turismo, inmigración, asuntos consulares, microfinanzas, captación de fondos y gestión de crisis.',
    ctaPrimary: 'Hablemos de su proyecto',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '40+', label: 'años de experiencia' },
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
    p1: 'Después de veintinueve años al servicio de la Región Guadalupe, incluido un mandato como teniente de alcalde de Trois-Rivières, me dedico desde 2011 a la formación y la consultoría, en el cruce de la diplomacia, la cooperación y el desarrollo de proyectos. Desde 2017 formo a electas locales en el IEPP de París y acompaño a organizaciones públicas y privadas, en Francia y a nivel internacional.',
    p2: 'Formada en la Université des Antilles y en la Université Bordeaux 2, certificada como formadora de formadores (2011) y formada en el ICOPER en diplomacia, relaciones exteriores y comunicación política (2026), presto especial atención a la cooperación latinoamericana, caribeña e internacional. Mi enfoque combina rigor institucional, sentido práctico y cultura de resultados.',
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
      { name: 'Servicios migratorios', category: 'Movilidad internacional', tagline: 'Cambio de país, residencia y naturalización.' },
      { name: 'Servicios consulares', category: 'Movilidad internacional', tagline: 'Visados, trámites administrativos y acompañamiento consular.' },
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
    sub: 'Cuarenta años de servicio público, formación y gestión de proyectos.',
    items: [
      {
        period: '2024 · actualidad',
        role: 'Formadora independiente',
        org: 'AAA+ Formations et Insertion, Institut Paris 8',
        place: 'París',
        desc: 'Formación en inglés, español y francés como lengua extranjera (FLE).',
      },
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
        desc: 'Formación en gestión de proyectos, FLE, inglés y español hasta el nivel C+, inglés y español de negocios, para empresas y particulares.',
      },
      {
        period: '2020',
        role: 'Responsable de proyecto',
        org: 'Formaxess',
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
        role: 'Jefa de control de calidad',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: 'Control de calidad y seguimiento de las prestaciones de una agencia de servicios a domicilio.',
      },
      {
        period: '1986 · 2015',
        role: 'Responsable de servicio, cargo territorial',
        org: 'Región Guadalupe',
        place: 'Basse-Terre, Guadalupe',
        desc: 'Documentación, protocolo, gabinetes y prensa de los presidentes de la Región, asuntos escolares y formación profesional.',
      },
      {
        period: '2001 · 2008',
        role: 'Teniente de alcalde',
        org: 'Ciudad de Trois-Rivières',
        place: 'Trois-Rivières, Guadalupe',
        desc: 'Delegada de desarrollo económico, asuntos escolares y transporte; presidenta de la comisión de licitaciones. Atención semanal al público y gestión de los asuntos corrientes.',
      },
    ],
  },
  education: {
    eyebrow: 'Formación',
    title: 'Formación y certificaciones',
    schools: [
      { school: 'Université des Antilles', note: 'Formación universitaria' },
      { school: 'Université Bordeaux 2', note: 'Formación universitaria' },
      { school: 'ICOPER', note: 'Diplomacia, relaciones exteriores y comunicación política (2026)' },
      { school: 'Formación de formadores', note: 'Certificación (2011)' },
    ],
    extra: 'Completada con formación continua a lo largo de toda la trayectoria.',
    langsTitle: 'Idiomas de trabajo',
    langsNote: 'Acompañamiento posible en cuatro idiomas.',
    langs: ['Francés', 'Español', 'Inglés', 'Portugués'],
  },
  forum: {
    eyebrow: 'Proyecto insignia',
    title: 'Foro América Latina y Caribe, Cooperación y Desarrollo',
    intro:
      'Un encuentro anual pensado para reunir a instituciones, empresas, mujeres, juventud y culturas de América Latina y el Gran Caribe en torno a una ambición común: construir juntos América Latina y el Caribe de mañana.',
    tabs: ['Visión', 'El Foro América Latina y Caribe', 'Edición piloto: Guadalupe', 'Academia de Liderazgo'],
    vision: {
      theme: 'Construir juntos América Latina y el Caribe de mañana',
      durationLocation:
        '5 días, en sedes rotativas cada año (República Dominicana, Guadalupe, Martinica, Santa Lucía, Barbados, Jamaica, Colombia, Panamá, Costa Rica...).',
      objectivesTitle: 'Los objetivos',
      objectives: [
        'Fortalecer los intercambios entre los territorios de América Latina y el Caribe',
        'Favorecer las inversiones y las alianzas',
        'Valorizar las culturas latinoamericanas y caribeñas',
        'Promover el turismo regional',
        'Apoyar el emprendimiento femenino y juvenil',
        'Dar visibilidad internacional a las iniciativas de cooperación',
      ],
      impactTitle: 'Impacto esperado',
      impact: [
        { label: 'Económico', items: ['Ocupación hotelera', 'Restauración', 'Transporte', 'Comercio', 'Artesanía'] },
        { label: 'Cultural', items: ['Promoción de artistas', 'Valorización del patrimonio'] },
        { label: 'Diplomático', items: ['Nuevas alianzas', 'Cooperación universitaria', 'Intercambios institucionales'] },
      ],
    },
    grandeCaraibe: {
      title: 'Cinco grandes ejes',
      sub: 'De la cumbre institucional al festival de las culturas, un foro pensado como escaparate completo de la cooperación latinoamericana y caribeña.',
      poles: [
        {
          title: 'Cumbre institucional',
          items: ['Ministros, alcaldes, parlamentarios', 'Organizaciones regionales, cámaras de comercio', 'Cooperación económica, movilidad, transición energética'],
        },
        {
          title: 'Foro económico',
          items: ['Empresas, inversionistas, bancos, startups', 'Encuentros B2B y citas con inversionistas', 'Salón de la innovación'],
        },
        {
          title: 'Foro de mujeres',
          items: ['Liderazgo y política', 'Emprendimiento y microfinanzas', 'Salud y digital'],
        },
        {
          title: 'Foro de la juventud',
          items: ['Universidades, escuelas, asociaciones', 'Concursos de oratoria, hackathon', 'Simulaciones diplomáticas'],
        },
        {
          title: 'Festival de las culturas latinoamericanas y caribeñas',
          items: ['Un pabellón por territorio', 'Gastronomía, artesanía, música, danza', 'Turismo y tradiciones'],
        },
      ],
      missTitle: 'Miss América Latina y Caribe',
      missDesc:
        'El certamen se integra al foro: las candidatas se convierten en embajadoras de su territorio, evaluadas por su presentación, su discurso, un proyecto de cooperación y una entrevista con el jurado.',
      prizesTitle: 'Los premios',
      prizes: [
        'Miss América Latina y Caribe',
        'Premio Liderazgo',
        'Premio Innovación',
        'Premio Cultura',
        'Premio Medio Ambiente',
        'Premio Solidaridad',
        'Premio Emprendimiento',
        'Premio Diplomacia',
      ],
    },
    guadeloupe: {
      title: 'Guadalupe, encrucijada de América Latina y el Caribe',
      sub: 'Una primera edición piloto para consolidar el foro antes de extenderlo progresivamente a los demás territorios.',
      duration: 'Duración: 3 días',
      days: [
        {
          label: 'Día 1',
          title: 'Cooperación económica',
          items: ['Apertura oficial (Región, Prefecto, cónsules)', 'Conferencias: comercio, exportación, economía azul', 'Encuentros B2B'],
        },
        {
          label: 'Día 2',
          title: 'Juventud y mujeres',
          items: ['Liderazgo femenino', 'Emprendimiento', 'Entrega de los Premios de la Cooperación'],
        },
        {
          label: 'Día 3',
          title: 'Cultura y turismo',
          items: ['Aldea caribeña, un stand por territorio', 'Gastronomía, artesanía, música', 'Elección de Miss Guadalupe Cooperación'],
        },
      ],
      missNote:
        'Una embajadora de la cooperación regional, y no un certamen que compita con Miss Guadalupe: las candidatas son evaluadas por su proyecto, su conocimiento de América Latina y el Caribe y su capacidad de representar el territorio.',
      prizesTitle: 'Los premios',
      prizes: [
        'Embajadora de la Cooperación',
        'Premio al Liderazgo',
        'Premio a la Innovación',
        'Premio Cultura',
        'Premio Turismo',
        'Premio Juventud',
      ],
      budgetLabel: 'Presupuesto estimado',
      budgetValue: '80 000 € – 150 000 €',
      partnersTitle: 'Socios previstos',
      partners: [
        'Región Guadalupe',
        'Departamento',
        'Mancomunidades',
        'Municipios',
        'Cámaras consulares',
        'Universidades',
        'Actores del turismo',
        'Empresas locales',
      ],
    },
    academy: {
      title: 'Academia Latinoamericana y Caribeña de Liderazgo para Mujeres Electas',
      subtitle: 'Un programa de formación continua',
      intro:
        'Pensada para concejalas, alcaldesas, diputadas y senadoras de América Latina y el Caribe, esta academia estructura veinte temas clave de gobernanza y liderazgo político, en la continuidad de la formación de electas que llevo a cabo desde 2017.',
      topicsTitle: 'Los veinte temas',
      topics: [
        'Liderazgo político y ético',
        'Gobernanza y administración pública',
        'Comunicación política y manejo de medios',
        'Oratoria y debate público',
        'Elaboración y evaluación de políticas públicas',
        'Gestión de proyectos y desarrollo territorial',
        'Presupuesto público y finanzas locales',
        'Transparencia, rendición de cuentas y lucha contra la corrupción',
        'Diplomacia territorial y cooperación internacional',
        'Negociación, mediación y resolución de conflictos',
        'Igualdad de género y liderazgo inclusivo',
        'Participación ciudadana y fortalecimiento democrático',
        'Gestión de crisis y comunicación de emergencia',
        'Transformación digital y gobierno electrónico',
        'Relaciones institucionales y protocolo',
        'Desarrollo sostenible y Agenda 2030 (ODS)',
        'Gestión de campañas y estrategia electoral',
        'Incidencia política y construcción de alianzas',
        'Derechos humanos y marco jurídico de la función pública',
        'Desarrollo económico local y emprendimiento',
      ],
    },
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Trabajemos juntos',
    sub: 'Con base en Francia, disponible para misiones en Europa, América Latina, el Caribe y a nivel internacional. Hablemos de su proyecto.',
    whatsappLabel: 'Escribir por WhatsApp',
    whatsappMessage: 'Hola Lydie, me gustaría hablar sobre un proyecto.',
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
    title: 'Lydie Monthouel Lebron de Guarinos | International Consultant',
    description:
      'International consultant. Diplomacy, cooperation, training, immigration, consular affairs, real estate, microfinance, fundraising and crisis management.',
  },
  nav: {
    about: 'About',
    expertise: 'Expertise',
    services: 'Services',
    career: 'Career',
    forum: 'Latin America & Caribbean Forum',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'International consultant · France',
    name: 'Lydie Monthouel Lebron de Guarinos',
    headline: 'Connecting institutions, businesses and people across borders.',
    headlineGold: 'across borders',
    available: 'Available for new assignments',
    sub: 'I support institutions, businesses and individuals in diplomacy, cooperation, political communication, tourism, immigration, consular affairs, microfinance, fundraising and crisis management.',
    ctaPrimary: 'Let us talk about your project',
    ctaSecondary: 'LinkedIn',
    stats: [
      { value: '40+', label: 'years of experience' },
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
    p1: 'After twenty-nine years serving the Région Guadeloupe, including a term as Deputy Mayor of Trois-Rivières, I have devoted myself since 2011 to training and consulting, at the crossroads of diplomacy, cooperation and project development. Since 2017 I have been training locally elected officials at the IEPP in Paris, while supporting public and private organisations in France and internationally.',
    p2: 'Educated at the Université des Antilles and the Université Bordeaux 2, certified as a trainer of trainers (2011) and trained at ICOPER in diplomacy, foreign affairs and political communication (2026), I pay particular attention to Latin American, Caribbean and international cooperation. My approach combines institutional rigour, field experience and a focus on results.',
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
      { name: 'Migration services', category: 'International mobility', tagline: 'Changing country, residency and naturalisation.' },
      { name: 'Consular services', category: 'International mobility', tagline: 'Visas, administrative procedures and consular support.' },
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
    sub: 'Forty years of public service, training and project leadership.',
    items: [
      {
        period: '2024 · present',
        role: 'Independent trainer',
        org: 'AAA+ Formations et Insertion, Institut Paris 8',
        place: 'Paris',
        desc: 'English, Spanish and French as a foreign language (FLE) training.',
      },
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
        desc: 'Project management, French (FLE), English and Spanish training up to C+ level, plus business English and Spanish, for companies and individuals.',
      },
      {
        period: '2020',
        role: 'Project manager',
        org: 'Formaxess',
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
        role: 'Quality Control Manager',
        org: 'Axeo Services',
        place: 'Le Perreux-sur-Marne',
        desc: 'Quality control and service oversight for a home-services agency.',
      },
      {
        period: '1986 · 2015',
        role: 'Department head, territorial civil servant',
        org: 'Région Guadeloupe',
        place: 'Basse-Terre, Guadeloupe',
        desc: 'Documentation, protocol, offices and press service of the regional presidents, school affairs and vocational training.',
      },
      {
        period: '2001 · 2008',
        role: 'Deputy Mayor',
        org: 'Town of Trois-Rivières',
        place: 'Trois-Rivières, Guadeloupe',
        desc: 'In charge of economic development, school affairs and transport; chaired the public tender board. Weekly public office hours and day-to-day municipal affairs.',
      },
    ],
  },
  education: {
    eyebrow: 'Education',
    title: 'Education & certifications',
    schools: [
      { school: 'Université des Antilles', note: 'University education' },
      { school: 'Université Bordeaux 2', note: 'University education' },
      { school: 'ICOPER', note: 'Diplomacy, foreign affairs and political communication (2026)' },
      { school: 'Trainer of trainers', note: 'Certification (2011)' },
    ],
    extra: 'Complemented by continuing education throughout my career.',
    langsTitle: 'Working languages',
    langsNote: 'Support available in four languages.',
    langs: ['French', 'Spanish', 'English', 'Portuguese'],
  },
  forum: {
    eyebrow: 'Flagship initiative',
    title: 'Latin America & Caribbean Forum for Cooperation and Development',
    intro:
      "An annual gathering designed to bring together institutions, businesses, women, youth and cultures from Latin America and the Greater Caribbean around one shared ambition: building tomorrow's Latin America and Caribbean together.",
    tabs: ['Vision', 'The Latin America & Caribbean Forum', 'Pilot edition: Guadeloupe', 'Leadership Academy'],
    vision: {
      theme: "Building tomorrow's Latin America and Caribbean together",
      durationLocation:
        '5 days, hosted in rotation each year (Dominican Republic, Guadeloupe, Martinique, Saint Lucia, Barbados, Jamaica, Colombia, Panama, Costa Rica...).',
      objectivesTitle: 'The objectives',
      objectives: [
        'Strengthen exchange between Latin American and Caribbean territories',
        'Encourage investment and partnerships',
        'Showcase Latin American and Caribbean cultures',
        'Promote regional tourism',
        "Support women's and youth entrepreneurship",
        'Give international visibility to cooperation initiatives',
      ],
      impactTitle: 'Expected impact',
      impact: [
        { label: 'Economic', items: ['Hotel occupancy', 'Catering', 'Transport', 'Trade', 'Crafts'] },
        { label: 'Cultural', items: ['Artist promotion', 'Heritage showcasing'] },
        { label: 'Diplomatic', items: ['New partnerships', 'Academic cooperation', 'Institutional exchange'] },
      ],
    },
    grandeCaraibe: {
      title: 'Five flagship tracks',
      sub: 'From the institutional summit to the culture festival, a forum built as a full showcase of Latin American and Caribbean cooperation.',
      poles: [
        {
          title: 'Institutional summit',
          items: ['Ministers, mayors, members of parliament', 'Regional organisations, chambers of commerce', 'Economic cooperation, mobility, energy transition'],
        },
        {
          title: 'Economic forum',
          items: ['Businesses, investors, banks, start-ups', 'B2B meetings and investor meetings', 'Innovation showcase'],
        },
        {
          title: "Women's forum",
          items: ['Leadership and politics', 'Entrepreneurship and microfinance', 'Health and digital'],
        },
        {
          title: 'Youth forum',
          items: ['Universities, schools, associations', 'Public speaking contests, hackathon', 'Diplomatic simulations'],
        },
        {
          title: 'Latin American and Caribbean culture festival',
          items: ['One pavilion per territory', 'Gastronomy, crafts, music, dance', 'Tourism and traditions'],
        },
      ],
      missTitle: 'Miss Latin America and Caribbean',
      missDesc:
        'The pageant is built into the forum: contestants become ambassadors for their territory, judged on their presentation, a speech, a cooperation project and an interview with the jury.',
      prizesTitle: 'The awards',
      prizes: [
        'Miss Latin America and Caribbean',
        'Leadership Award',
        'Innovation Award',
        'Culture Award',
        'Environment Award',
        'Solidarity Award',
        'Entrepreneurship Award',
        'Diplomacy Award',
      ],
    },
    guadeloupe: {
      title: 'Guadeloupe, crossroads of Latin America and the Caribbean',
      sub: 'A pilot first edition to establish the forum before progressively extending it to other territories.',
      duration: 'Duration: 3 days',
      days: [
        {
          label: 'Day 1',
          title: 'Economic cooperation',
          items: ['Official opening (Region, Prefect, consuls)', 'Conferences: trade, export, blue economy', 'B2B meetings'],
        },
        {
          label: 'Day 2',
          title: 'Youth and women',
          items: ["Women's leadership", 'Entrepreneurship', 'Cooperation Awards ceremony'],
        },
        {
          label: 'Day 3',
          title: 'Culture and tourism',
          items: ['Caribbean village, one booth per territory', 'Gastronomy, crafts, music', 'Miss Guadeloupe Cooperation election'],
        },
      ],
      missNote:
        'An ambassador for regional cooperation, not a competing pageant to Miss Guadeloupe: contestants are judged on their project, their knowledge of Latin America and the Caribbean and their ability to represent the territory.',
      prizesTitle: 'The awards',
      prizes: [
        'Cooperation Ambassador',
        'Leadership Award',
        'Innovation Award',
        'Culture Award',
        'Tourism Award',
        'Youth Award',
      ],
      budgetLabel: 'Estimated budget',
      budgetValue: '€80,000 – €150,000',
      partnersTitle: 'Potential partners',
      partners: [
        'Guadeloupe Region',
        'Département',
        'Intermunicipal communities',
        'Municipalities',
        'Chambers of commerce',
        'Universities',
        'Tourism stakeholders',
        'Local businesses',
      ],
    },
    academy: {
      title: 'Latin American and Caribbean Leadership Academy for Elected Women',
      subtitle: 'A continuing-education programme',
      intro:
        'Designed for councilwomen, mayors, members of parliament and senators across Latin America and the Caribbean, this academy structures twenty key themes in governance and political leadership, building on the training of elected officials I have led since 2017.',
      topicsTitle: 'The twenty themes',
      topics: [
        'Political and ethical leadership',
        'Governance and public administration',
        'Political communication and media relations',
        'Public speaking and debate',
        'Public policy design and evaluation',
        'Project management and territorial development',
        'Public budgeting and local finance',
        'Transparency, accountability and anti-corruption',
        'Territorial diplomacy and international cooperation',
        'Negotiation, mediation and conflict resolution',
        'Gender equality and inclusive leadership',
        'Citizen participation and democratic strengthening',
        'Crisis management and emergency communication',
        'Digital transformation and e-government',
        'Institutional relations and protocol',
        'Sustainable development and the 2030 Agenda (SDGs)',
        'Campaign management and electoral strategy',
        'Political advocacy and coalition building',
        'Human rights and the legal framework of public office',
        'Local economic development and entrepreneurship',
      ],
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let us work together',
    sub: 'Based in France, available for assignments in Europe, Latin America, the Caribbean and worldwide. Tell me about your project.',
    whatsappLabel: 'Message on WhatsApp',
    whatsappMessage: "Hello Lydie, I'd like to talk about a project.",
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
