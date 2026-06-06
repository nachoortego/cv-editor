export type ContactIcon = "linkedin" | "github";

export type ContactItem = {
  label: string;
  href?: string;
  icon?: ContactIcon;
};

export type ExperienceEntry = {
  role: string;
  roleHref?: string;
  roleDetail?: string;
  company: string;
  companyHref?: string;
  period: string;
  location: string;
  description: string;
};

export type ProjectItem =
  | string
  | {
      label: string;
      text: string;
    };

export type ProjectEntry = {
  title: string;
  subtitle?: string;
  items: ProjectItem[];
};

export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
};

export type LanguageEntry = {
  language: string;
  level: string;
  detail?: string;
};

export type CVLocaleData = {
  name: string;
  title: string;
  contact: ContactItem[];
  summary: string;
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  education: EducationEntry[];
  languages: LanguageEntry[];
  sectionLabels: {
    summary: string;
    experience: string;
    projects: string;
    education: string;
  };
};

export type Locale = "es" | "en";

/** Contenido ES/EN en paralelo — mantener ambas versiones alineadas al editar. */
export const cvContent: Record<Locale, CVLocaleData> = {
  es: {
    name: "Ignacio Ortego",
    title: "Desarrollador Full Stack",
    contact: [
      { label: "Argentina" },
      {
        label: "ignacioortego110@gmail.com",
        href: "mailto:ignacioortego110@gmail.com",
      },
      {
        label: "in/ignacio-ortego-40b819248",
        href: "https://www.linkedin.com/in/ignacio-ortego-40b819248",
        icon: "linkedin",
      },
      {
        label: "github.com/nachoortego",
        href: "https://github.com/nachoortego",
        icon: "github",
      },
    ],
    summary:
      "Desarrollador Full Stack con experiencia liderando equipos y llevando productos digitales de punta a punta. Combino criterio técnico, orientación a resultados y foco en la experiencia de usuario para convertir ideas en soluciones confiables y escalables. Perfil innovador, con fuerte capacidad para incorporar inteligencia artificial y automatización en procesos de desarrollo. Acostumbrado a entornos ágiles, colaborativos y de trabajo remoto.",
    experience: [
      {
        role: "Founder",
        roleHref: "https://lambdaworks.ar",
        company: "LambdaWorks",
        period: "2026 – Presente",
        location: "Argentina",
        description:
          "Fundé y dirijo LambdaWorks, agencia de software donde lidero al equipo de desarrollo de 8 personas. Diseñamos, construimos y entregamos MVPs y software especializado a medida, acompañando a clientes desde la idea inicial hasta productos en producción. Además, proveemos servicios de outsourcing para un cliente grande de forma continua. Coordino prioridades, calidad técnica y plazos del equipo.",
      },
      {
        role: "Desarrollador Web Líder",
        roleDetail: "T3 Stack | TypeScript, Tailwind, Next.js",
        company: "Fiduxion",
        period: "2022 – 2026",
        location: "Argentina",
        description:
          "Lideré el desarrollo web de la empresa, dirigiendo un equipo remoto distribuido. Impulsé el sitio principal Countryprop para bienes raíces, con foco en experiencia de usuario e interfaces claras, además de sitios para contratistas y clientes. Supervisé la implementación de funcionalidades, la revisión y refactorización de código, las pruebas automatizadas y el despliegue en producción, promoviendo buenas prácticas y mantenibilidad en el equipo.",
      },
      {
        role: "Gestión de Datos (Pasante)",
        company: "Canndico",
        period: "2021 – 2022",
        location: "Argentina",
        description:
          "Desarrollé scripts en Python para procesar, analizar y gestionar conjuntos de datos genómicos de cannabis.",
      },
    ],
    projects: [
      {
        title: "3er Puesto – AI Challenge 2022",
        subtitle: "Universidad de San Andrés & Etermax | Junio 2022",
        items: [
          "Competencia de programación enfocada en resolución de problemas de IA en C# dentro de Unity Engine.",
          "Colaboré en un equipo de 3 personas para diseñar e implementar soluciones eficientes bajo limitaciones de tiempo.",
        ],
      },
      {
        title: "Varios proyectos de Ciencias de la Computación",
        subtitle: "UNR Argentina",
        items: [
          {
            label: "Implementaciones de Pathfinding (C)",
            text: "Construí dos versiones: una para resolver un laberinto aleatorio conocido y otra para exploración cuando el laberinto es desconocido.",
          },
          {
            label: "Herramienta de Predicción de Texto (C, Python)",
            text: "Implementé lógica de texto predictivo utilizando modelos estadísticos para mejorar la precisión y eficiencia.",
          },
          {
            label: "Sistema de Transferencia de Archivos P2P (Erlang)",
            text: "Diseñé e implementé un sistema punto a punto para enviar y recibir archivos a través de una red.",
          },
          {
            label: "Intérprete de Álgebra Relacional (Haskell)",
            text: "Implementé un intérprete para consultas sobre bases de datos relacionales.",
          },
        ],
      },
    ],
    education: [
      {
        title: "Licenciatura en Ciencias de la Computación",
        institution: "UNR Argentina",
        period: "2022 – Presente · 4.º año · GPA 8.15",
      },
      {
        title: "Técnico en Informática",
        institution: "Instituto Politécnico Superior",
        period: "2017 – 2022",
      },
    ],
    languages: [
      {
        language: "Inglés C1",
        level: "University of Cambridge",
        detail: "2021",
      },
      {
        language: "Español",
        level: "Nativo",
      },
    ],
    sectionLabels: {
      summary: "RESUMEN",
      experience: "EXPERIENCIA PROFESIONAL",
      projects: "EXPERIENCIA Y PROYECTOS RELEVANTES",
      education: "EDUCACIÓN E IDIOMAS",
    },
  },
  en: {
    name: "Ignacio Ortego",
    title: "Full Stack Developer",
    contact: [
      { label: "Argentina" },
      {
        label: "ignacioortego110@gmail.com",
        href: "mailto:ignacioortego110@gmail.com",
      },
      {
        label: "in/ignacio-ortego-40b819248",
        href: "https://www.linkedin.com/in/ignacio-ortego-40b819248",
        icon: "linkedin",
      },
      {
        label: "github.com/nachoortego",
        href: "https://github.com/nachoortego",
        icon: "github",
      },
    ],
    summary:
      "Full Stack Developer with experience leading teams and delivering end-to-end digital products. I combine technical judgment, results orientation and user experience focus to turn ideas into reliable, scalable solutions. Innovative profile with strong ability to incorporate artificial intelligence and automation into development workflows. Accustomed to agile, collaborative and remote environments.",
    experience: [
      {
        role: "Founder",
        roleHref: "https://lambdaworks.ar",
        company: "LambdaWorks",
        period: "2026 – Present",
        location: "Argentina",
        description:
          "Founded and lead LambdaWorks, a software agency where I head an 8-person development team. We design, build and deliver MVPs and specialized custom software, supporting clients from initial idea through production. We also provide ongoing outsourcing services for a major long-term client. I coordinate team priorities, technical quality and delivery timelines.",
      },
      {
        role: "Lead Web Developer",
        roleDetail: "T3 Stack | TypeScript, Tailwind, Next.js",
        company: "Fiduxion",
        period: "2022 – 2026",
        location: "Argentina",
        description:
          "Led the company's web development, managing a distributed remote team. Drove the main Countryprop real estate platform with a focus on user experience and clear interfaces, along with sites for contractors and clients. Oversaw feature implementation, code review and refactoring, automated testing and production deployment while promoting best practices and maintainability across the team.",
      },
      {
        role: "Data Management Intern",
        company: "Canndico",
        period: "2021 – 2022",
        location: "Argentina",
        description:
          "Developed Python scripts to process, analyze and manage cannabis genomic datasets.",
      },
    ],
    projects: [
      {
        title: "3rd Place – AI Challenge 2022",
        subtitle: "University of San Andrés & Etermax | June 2022",
        items: [
          "Programming competition focused on AI problem-solving in C# within the Unity Engine.",
          "Collaborated in a 3-person team to design and implement efficient solutions under time constraints.",
        ],
      },
      {
        title: "Computer Science Projects",
        subtitle: "UNR Argentina",
        items: [
          {
            label: "Pathfinding Implementations (C)",
            text: "Built two versions: one to solve a known random maze and another for exploration when the maze is unknown.",
          },
          {
            label: "Text Prediction Tool (C, Python)",
            text: "Implemented predictive text logic using statistical models to improve accuracy and efficiency.",
          },
          {
            label: "P2P File Transfer System (Erlang)",
            text: "Designed and implemented a peer-to-peer system to send and receive files over a network.",
          },
          {
            label: "Relational Algebra Interpreter (Haskell)",
            text: "Implemented an interpreter for queries over relational databases.",
          },
        ],
      },
    ],
    education: [
      {
        title: "B.S. in Computer Science (in progress)",
        institution: "UNR Argentina",
        period: "2022 – Present · 4th year · GPA 8.15",
      },
      {
        title: "IT Technician",
        institution: "Instituto Politécnico Superior",
        period: "2017 – 2022",
      },
    ],
    languages: [
      {
        language: "English C1",
        level: "University of Cambridge",
        detail: "2021",
      },
      {
        language: "Spanish",
        level: "Native",
      },
    ],
    sectionLabels: {
      summary: "SUMMARY",
      experience: "PROFESSIONAL EXPERIENCE",
      projects: "RELEVANT EXPERIENCE & PROJECTS",
      education: "EDUCATION & LANGUAGES",
    },
  },
};

export type CVData = CVLocaleData & { locale: Locale };

export function getCVData(locale: Locale): CVData {
  return { locale, ...cvContent[locale] };
}
