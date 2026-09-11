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
    title: 'Carrillo Puerto',
    category: 'Edificio Comercial',
    year: '2024',
    location: 'Carrillo Puerto, QR',
    description:
      'Edificio comercial modelado y coordinado en BIM. Coordinación de instalaciones, detección de interferencias y generación de documentación ejecutiva para su construcción.',
    details: [
      { label: 'Cliente', value: 'Privado' },
      { label: 'Alcance', value: 'Modelado 3D, Coordinación' },
      { label: 'Software', value: 'Revit, Navisworks' },
      { label: 'Ubicación', value: 'Carrillo Puerto, QR' },
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
    title: 'Hecelchakan',
    category: 'Residencial',
    year: '2024',
    location: 'Hecelchakán, CM',
    description:
      'Proyecto residencial modelado en BIM. Modelado arquitectónico, estructural y de instalaciones con documentación para construcción.',
    details: [
      { label: 'Cliente', value: 'Privado' },
      { label: 'Alcance', value: 'Modelado 3D, Documentación' },
      { label: 'Software', value: 'Revit' },
      { label: 'Ubicación', value: 'Hecelchakán, CM' },
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
    title: 'Escarcerga',
    category: 'Industrial',
    year: '2023',
    location: 'Escárcega, CM',
    description:
      'Proyecto industrial con modelado de instalaciones y obra. Levantamiento, modelado y documentación técnica para la ejecución de la obra.',
    details: [
      { label: 'Cliente', value: 'Privado' },
      { label: 'Alcance', value: 'Instalaciones, Obra' },
      { label: 'Software', value: 'Revit, AutoCAD' },
      { label: 'Ubicación', value: 'Escárcega, CM' },
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