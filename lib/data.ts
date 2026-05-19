export interface AntSpecies {
  id: string;
  name: string;
  scientificName: string;
  difficulty: "Principiante" | "Intermedio" | "Avanzado";
  colonySize: string;
  queenSize: string;
  workerSize: string;
  temperature: string;
  humidity: string;
  diet: string[];
  hibernation: boolean;
  description: string;
  price: number;
  image: string;
  category: "tropical" | "desertica" | "templada";
  inStock: boolean;
}

export interface Formicarium {
  id: string;
  name: string;
  material: string;
  modular: boolean;
  dimensions: string;
  capacity: string;
  compatibleAnts: string[];
  features: string[];
  price: number;
  image: string;
  category: "acrilico" | "ytong" | "vidrio" | "3d" | "natural";
  inStock: boolean;
}

export const antSpecies: AntSpecies[] = [
  {
    id: "lasius-niger",
    name: "Lasius Niger",
    scientificName: "Lasius niger",
    difficulty: "Principiante",
    colonySize: "15,000 - 30,000 obreras",
    queenSize: "8-9 mm",
    workerSize: "3-5 mm",
    temperature: "18-28°C",
    humidity: "50-70%",
    diet: ["Miel", "Insectos", "Semillas"],
    hibernation: true,
    description: "La hormiga de jardín común, perfecta para principiantes. Colonia resistente y fácil de mantener con actividad constante durante todo el año.",
    price: 25,
    image: "/images/lasius-niger.jpg",
    category: "templada",
    inStock: true,
  },
  {
    id: "messor-barbarus",
    name: "Messor Barbarus",
    scientificName: "Messor barbarus",
    difficulty: "Principiante",
    colonySize: "5,000 - 10,000 obreras",
    queenSize: "14-18 mm",
    workerSize: "3-14 mm (polimórficas)",
    temperature: "20-30°C",
    humidity: "40-60%",
    diet: ["Semillas", "Insectos ocasionalmente"],
    hibernation: true,
    description: "Hormigas granívoras con obreras de diferentes tamaños. Fascinantes de observar mientras procesan semillas.",
    price: 35,
    image: "/images/messor-barbarus.jpg",
    category: "desertica",
    inStock: true,
  },
  {
    id: "camponotus-herculeanus",
    name: "Camponotus Herculeanus",
    scientificName: "Camponotus herculeanus",
    difficulty: "Intermedio",
    colonySize: "3,000 - 10,000 obreras",
    queenSize: "16-18 mm",
    workerSize: "6-14 mm",
    temperature: "18-26°C",
    humidity: "50-70%",
    diet: ["Miel", "Insectos", "Frutas"],
    hibernation: true,
    description: "Impresionante hormiga carpintera de gran tamaño. Requiere espacio y paciencia para su desarrollo.",
    price: 55,
    image: "/images/camponotus-herculeanus.jpg",
    category: "templada",
    inStock: true,
  },
  {
    id: "atta-cephalotes",
    name: "Atta Cephalotes",
    scientificName: "Atta cephalotes",
    difficulty: "Avanzado",
    colonySize: "1,000,000+ obreras",
    queenSize: "20-25 mm",
    workerSize: "2-15 mm",
    temperature: "24-28°C",
    humidity: "70-90%",
    diet: ["Hojas frescas (cultivan hongos)"],
    hibernation: false,
    description: "Las famosas hormigas cortadoras de hojas. Cultivadoras de hongos con colonias masivas y estructura social compleja.",
    price: 120,
    image: "/images/atta-cephalotes.jpg",
    category: "tropical",
    inStock: false,
  },
  {
    id: "pheidole-pallidula",
    name: "Pheidole Pallidula",
    scientificName: "Pheidole pallidula",
    difficulty: "Principiante",
    colonySize: "2,000 - 5,000 obreras",
    queenSize: "6-7 mm",
    workerSize: "1.5-4 mm",
    temperature: "22-30°C",
    humidity: "50-70%",
    diet: ["Miel", "Insectos", "Semillas"],
    hibernation: false,
    description: "Pequeñas pero activas, con soldados de cabeza grande. Crecimiento rápido y muy entretenidas.",
    price: 30,
    image: "/images/pheidole-pallidula.jpg",
    category: "tropical",
    inStock: true,
  },
  {
    id: "pogonomyrmex-barbatus",
    name: "Pogonomyrmex Barbatus",
    scientificName: "Pogonomyrmex barbatus",
    difficulty: "Intermedio",
    colonySize: "5,000 - 12,000 obreras",
    queenSize: "10-12 mm",
    workerSize: "6-9 mm",
    temperature: "25-35°C",
    humidity: "30-50%",
    diet: ["Semillas exclusivamente"],
    hibernation: false,
    description: "Hormigas cosechadoras del desierto con picadura potente. Requieren condiciones secas y calurosas.",
    price: 65,
    image: "/images/pogonomyrmex-barbatus.jpg",
    category: "desertica",
    inStock: true,
  },
];

export const formicaria: Formicarium[] = [
  {
    id: "acrilico-modular-s",
    name: "Hormiguero Acrílico Modular S",
    material: "Acrílico transparente 8mm",
    modular: true,
    dimensions: "15 x 10 x 2 cm",
    capacity: "Hasta 500 obreras",
    compatibleAnts: ["Lasius Niger", "Pheidole Pallidula", "Tetramorium"],
    features: ["Ampliable", "Sistema antiescape", "Fácil limpieza", "Zona de forrajeo incluida"],
    price: 45,
    image: "/images/acrilico-modular-s.jpg",
    category: "acrilico",
    inStock: true,
  },
  {
    id: "acrilico-modular-l",
    name: "Hormiguero Acrílico Modular L",
    material: "Acrílico transparente 10mm",
    modular: true,
    dimensions: "30 x 20 x 3 cm",
    capacity: "Hasta 5,000 obreras",
    compatibleAnts: ["Messor Barbarus", "Camponotus", "Lasius Niger"],
    features: ["3 módulos conectables", "Sistema de humidificación", "Doble zona de forrajeo", "LED opcional"],
    price: 95,
    image: "/images/acrilico-modular-l.jpg",
    category: "acrilico",
    inStock: true,
  },
  {
    id: "ytong-natural",
    name: "Hormiguero Ytong Natural",
    material: "Hormigón celular Ytong",
    modular: false,
    dimensions: "20 x 15 x 4 cm",
    capacity: "Hasta 2,000 obreras",
    compatibleAnts: ["Messor Barbarus", "Pogonomyrmex", "Pheidole"],
    features: ["Retención de humedad natural", "Diseño de cámaras natural", "Antiescape integrado"],
    price: 55,
    image: "/images/ytong-natural.jpg",
    category: "ytong",
    inStock: true,
  },
  {
    id: "vidrio-observacion",
    name: "Hormiguero de Vidrio Premium",
    material: "Vidrio templado 6mm + marco aluminio",
    modular: false,
    dimensions: "25 x 18 x 2 cm",
    capacity: "Hasta 1,500 obreras",
    compatibleAnts: ["Lasius Niger", "Camponotus Herculeanus", "Formica"],
    features: ["Visibilidad perfecta", "Marco elegante", "Sistema de ventilación", "Incluye tapa con malla"],
    price: 120,
    image: "/images/vidrio-observacion.jpg",
    category: "vidrio",
    inStock: true,
  },
  {
    id: "impresion-3d-custom",
    name: "Hormiguero Impresión 3D Personalizado",
    material: "PLA/PETG biodegradable",
    modular: true,
    dimensions: "Personalizable",
    capacity: "Variable según diseño",
    compatibleAnts: ["Todas las especies"],
    features: ["Diseño a medida", "Colores personalizables", "Modular infinito", "Piezas de repuesto disponibles"],
    price: 75,
    image: "/images/3d-custom.jpg",
    category: "3d",
    inStock: true,
  },
  {
    id: "terrario-tropical",
    name: "Terrario Tropical XL",
    material: "Vidrio + sustrato natural",
    modular: false,
    dimensions: "40 x 30 x 25 cm",
    capacity: "Colonias grandes 10,000+",
    compatibleAnts: ["Atta Cephalotes", "Acromyrmex", "Oecophylla"],
    features: ["Ecosistema completo", "Sistema de riego automático", "Iluminación LED", "Plantas vivas compatibles"],
    price: 250,
    image: "/images/terrario-tropical.jpg",
    category: "natural",
    inStock: true,
  },
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: string;
  slug: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  productName?: string;
  date: string;
  avatar: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Guía para principiantes: Cómo iniciar tu primera colonia de hormigas",
    excerpt: "Todo lo que necesitas saber para dar tus primeros pasos en el fascinante mundo de la mirmecología.",
    content: "Iniciar una colonia de hormigas puede parecer intimidante, pero con la información correcta es una experiencia gratificante. En esta guía cubrimos desde la elección de la especie adecuada hasta la preparación del hormiguero ideal para principiantes.\n\n## Elegir tu primera especie\n\nLas especies recomendadas para principiantes incluyen Lasius niger y Messor barbarus. Ambas son resistentes, toleran pequeños errores de cuidado y tienen un crecimiento visible que mantiene el interés.\n\n## El hormiguero adecuado\n\nPara empezar, recomendamos un hormiguero acrílico modular. Es fácil de limpiar, permite observar el desarrollo de la colonia y puede expandirse a medida que crece.\n\n## Alimentación básica\n\nLa mayoría de las especies necesitan una fuente de carbohidratos (agua con miel) y proteínas (insectos). Las especies granívoras como Messor barbarus también necesitan semillas variadas.",
    category: "Guías",
    image: "/images/lasius-niger.jpg",
    date: "2026-05-15",
    author: "BlueAnts",
    slug: "guia-principiantes-primera-colonia",
  },
  {
    id: "2",
    title: "Tipos de hormigueros: ¿Cuál elegir según tu especie?",
    excerpt: "Acrílico, Ytong, vidrio o impresión 3D - te explicamos las ventajas de cada material según la especie que tengas.",
    content: "Cada material de hormiguero tiene propiedades únicas que lo hacen más adecuado para ciertas especies. Conoce las diferencias y elige el mejor para tu colonia.",
    category: "Hormigueros",
    image: "/images/acrilico-modular-l.jpg",
    date: "2026-05-10",
    author: "BlueAnts",
    slug: "tipos-hormigueros-cual-elegir",
  },
  {
    id: "3",
    title: "La importancia de la hibernación en colonias de clima templado",
    excerpt: "Muchas especies necesitan un período de descanso invernal. Aprende cómo preparar tu colonia para la hibernación.",
    content: "La hibernación es un proceso natural crucial para muchas especies de hormigas de clima templado. Durante este período, la colonia reduce su metabolismo y entra en un estado de letargo que es esencial para su ciclo reproductivo anual.",
    category: "Cuidados",
    image: "/images/camponotus-herculeanus.jpg",
    date: "2026-04-28",
    author: "BlueAnts",
    slug: "importancia-hibernacion-colonias",
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Carlos Mendoza",
    rating: 5,
    text: "Excelente calidad. Mi colonia de Lasius niger llegó en perfectas condiciones y ya está creciendo rapidísimo. Muy recomendados.",
    productName: "Lasius Niger",
    date: "2026-05-01",
    avatar: "CM",
  },
  {
    id: "2",
    name: "María García",
    rating: 5,
    text: "El hormiguero acrílico modular es una maravilla. La calidad de construcción es superior y las hormigas se adaptaron inmediatamente.",
    productName: "Hormiguero Acrílico Modular S",
    date: "2026-04-20",
    avatar: "MG",
  },
  {
    id: "3",
    name: "Ana Torres",
    rating: 4,
    text: "Muy buena atención y asesoría. Me ayudaron a elegir mi primera especie y todo el proceso fue sencillo.",
    date: "2026-04-15",
    avatar: "AT",
  },
  {
    id: "4",
    name: "Roberto Jiménez",
    rating: 5,
    text: "Llevo un año comprando con ellos y siempre recibo colonias saludables. Sin duda los mejores en México.",
    productName: "Messor Barbarus",
    date: "2026-03-30",
    avatar: "RJ",
  },
];

export const storeInfo = {
  name: "BlueAnts",
  slogan: "Tu mundo de hormigas",
  phone: "+52 55 1234 5678",
  whatsapp: "5215512345678",
  email: "contacto@blueants.mx",
  address: "Av. Insurgentes Sur 1234, Col. Del Valle, CDMX, México",
  coordinates: { lat: 19.3797, lng: -99.1778 },
  hours: {
    weekdays: "10:00 - 19:00",
    saturday: "10:00 - 15:00",
    sunday: "Cerrado",
  },
  social: {
    instagram: "@blueantsmx",
    facebook: "BlueAntsMX",
    youtube: "BlueAntsMexico",
  },
};
