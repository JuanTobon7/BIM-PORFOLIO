export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  details: { label: string; value: string }[];
  images: string[];
  cover: string;
  large?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'carrillo-puerto',
    title: 'Tren Maya Estación Carrillo Puerto',
    category: 'Infraestructura',
    year: '2024',
    location: 'Carrillo Puerto, Champotón, México',
    description:
      'El proyecto contempla el desarrollo de una estación de pasajeros del Tren Maya, de acuerdo a su análisis de demanda de viajeros tiene la categoría de "demanda baja", con una distribución de dos vías + 1 andén, con los componentes de plaza de acceso, gran vestíbulo, andén, zona de abordaje, comercios y servicios públicos, zona operativa, servicios técnicos, cuartos técnicos, infraestructura y zona exterior.',
    details: [
      { label: 'Cliente', value: 'ARCH+DE CONSULTORÍA' },
      { label: 'Nombre', value: 'Tren Maya Estación Carrillo Puerto' },
      { label: 'Alcance', value: 'Modelado y Coordinación BIM Multidisciplinaria' },
      { label: 'Software', value: 'Revit, Navisworks' },
      { label: 'Ubicación', value: 'Carrillo Puerto, Champotón, México' },
    ],
    images: [
      '/carrillo_puerto/Imagen%201.jpg',
      '/carrillo_puerto/Imagen%203.jpg',
      '/carrillo_puerto/Imagen%204.jpg',
      '/carrillo_puerto/WhatsApp%20Image%202026-09-08%20at%208.36.24%20PM.jpeg',
      '/carrillo_puerto/IMG_1344.jpg',
      '/carrillo_puerto/IMG_1345.jpg',
      '/carrillo_puerto/IMG_1375.jpg',
      '/carrillo_puerto/IMG_1382.jpg',
    ],
    cover: '/carrillo_puerto/IMG_1344.jpg',
    large: true,
  },
  {
    slug: 'hecelchakan',
    title: 'Tren Maya Estación Hecelchakan',
    category: 'Infraestructura',
    year: '2024',
    location: 'Hecelchakan, Campeche, México',
    description:
      'El proyecto contempla el desarrollo de una estación de pasajeros del Tren Maya, de acuerdo a su análisis de demanda de viajeros tiene la categoría de "demanda baja", con una distribución de 3 vías + 2 andenes, con los componentes de plaza de acceso, gran vestíbulo, andenes, zona de abordaje, módulo banbien, comercios y servicios públicos, zona operativa, servicios técnicos, cuartos técnicos, infraestructura, paso puente elevado y zona exterior.',
    details: [
      { label: 'Cliente', value: 'ARCH+DE CONSULTORÍA' },
      { label: 'Nombre', value: 'Tren Maya Estación Hecelchakan' },
      { label: 'Alcance', value: 'Modelado y Coordinación BIM Multidisciplinaria' },
      { label: 'Software', value: 'Revit, Navisworks' },
      { label: 'Ubicación', value: 'Hecelchakan, Campeche, México' },
    ],
    images: [
      '/hecelchak/Copia%20de%202.jpg',
      '/hecelchak/Copia%20de%203.jpg',
      '/hecelchak/Copia%20de%204.jpg',
      '/hecelchak/Copia%20de%20IMG_20230831_182827.jpg',
      '/hecelchak/Copia%20de%20IMG_20230918_164226.jpg',
      '/hecelchak/Copia%20de%20IMG_0353.jpg',
      '/hecelchak/Copia%20de%20IMG_0758.jpg',
    ],
    cover: '/hecelchak/Copia%20de%20IMG_0758.jpg',
    large: false,
  },

  {
    slug: 'escarcega',
    title: 'Tren Maya Estación Escárcega',
    category: 'Infraestructura',
    year: '2023',
    location: 'Escárcega, Campeche, México',
    description:
      'El proyecto contempla el desarrollo de una estación de pasajeros del Tren Maya, considerada como de "demanda media", con un esquema de 03 (tres) vías + 02 (dos) andenes, y sus componentes tales como, plaza de acceso, vestíbulo, andenes, zona de abordaje, comercios y servicios públicos, zona operativa, servicios técnicos, cuartos técnicos, infraestructura y zona exterior.',
    details: [
      { label: 'Cliente', value: 'ARCH+DE CONSULTORÍA' },
      { label: 'Nombre', value: 'Tren Maya Estación Escárcega' },
      { label: 'Alcance', value: 'Modelado y Coordinación BIM Multidisciplinaria' },
      { label: 'Software', value: 'Revit, Navisworks' },
      { label: 'Ubicación', value: 'Escárcega, Campeche, México' },
    ],
    images: [
      '/escarcega/Foto%20Obra%202.jpg',
      '/escarcega/Imagen%201%20Instalaciones%201.jpg',
      '/escarcega/Imagen%201%20Instalaciones.jpg',
      '/escarcega/Imagen%202%20Instalaciones.jpg',
    ],
    cover: '/escarcega/Foto%20Obra%202.jpg',
    large: false,
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}