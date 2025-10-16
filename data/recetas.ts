export interface Receta {
  slug: string
  nombre: string
  descripcion: string
  imagen: string
  tiempo: string
  porciones: string
  ingredientes: string[]
  pasos: string[]
  dificultad: string
}

export const recetas: Receta[] = [
  {
    slug: "osobuco-a-la-cacerola",
    nombre: "Osobuco a la Cacerola con Verduras",
    descripcion:
      "Osobuco tierno cocinado a fuego lento con zanahorias, papas y cebolla. Un plato reconfortante lleno de sabor casero.",
    imagen: "/images/osobucoalacaserola.png",
    tiempo: "120 min",
    porciones: "4 personas",
    ingredientes: [
      "1 kg de osobuco",
      "2 kg de zanahorias cortadas en rodajas",
      "4 papas medianas cortadas en cubos",
      "2 cebollas cortadas en cubos",
      "3 dientes de ajo picados",
      "1 taza de vino blanco",
      "2 tazas de caldo de carne",
      "Tomillo, laurel, sal y pimienta",
      "Aceite de oliva",
    ],
    pasos: [
      "Dorar el osobuco en una cacerola con aceite caliente hasta sellar por todos lados.",
      "Agregar la cebolla y el ajo, cocinar hasta que estén transparentes.",
      "Incorporar el vino y dejar reducir por 5 minutos.",
      "Añadir el caldo, las zanahorias, las papas y las hierbas.",
      "Cocinar a fuego bajo con tapa durante 90-100 minutos hasta que la carne esté muy tierna.",
      "Servir caliente con el jugo de cocción y pan casero.",
    ],
    dificultad: "Intermedio",
  },
  {
    slug: "alitas-de-pollo-al-horno",
    nombre: "Alitas de Pollo al Horno Crocantes",
    descripcion:
      "Alitas doradas y crujientes al horno con especias. Perfectas para compartir en familia o con amigos.",
    imagen: "/images/alitasdepollocrocantes.png",
    tiempo: "50 min",
    porciones: "6 personas",
    ingredientes: [
      "3 kg de alitas de pollo",
      "3 cucharadas de aceite",
      "2 cucharadas de pimentón dulce",
      "1 cucharada de ajo en polvo",
      "1 cucharadita de comino",
      "Sal, pimienta y orégano",
      "Salsa BBQ o picante para acompañar (opcional)",
    ],
    pasos: [
      "Precalentar el horno a 200°C.",
      "Secar bien las alitas con papel absorbente.",
      "En un bowl, mezclar las alitas con aceite y todas las especias.",
      "Colocar en una asadera forrada con papel manteca, sin apilar.",
      "Hornear 40-45 minutos, dando vuelta a la mitad del tiempo.",
      "Servir calientes con tu salsa favorita.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "milanesas-de-carne-con-ensalada",
    nombre: "Milanesas de Carne con Ensalada Mixta",
    descripcion:
      "Milanesas crujientes acompañadas de una ensalada fresca de zanahorias ralladas, cebolla y tomate. Clásico que nunca falla.",
    imagen: "/images/milanesaconensaladamixta.png",
    tiempo: "30 min",
    porciones: "6 personas",
    ingredientes: [
      "2 kg de milanesas de carne",
      "Pan rallado",
      "2 huevos batidos",
      "Aceite para freír",
      "Sal y pimienta",
      "Para la ensalada:",
      "2 kg de zanahorias ralladas",
      "1 cebolla en juliana",
      "2 tomates cortados",
      "Aceite, vinagre y sal",
    ],
    pasos: [
      "Condimentar las milanesas con sal y pimienta.",
      "Pasar cada milanesa por huevo batido y luego por pan rallado.",
      "Freír en aceite caliente hasta que estén doradas de ambos lados.",
      "Escurrir sobre papel absorbente.",
      "Preparar la ensalada mezclando todos los ingredientes.",
      "Servir las milanesas calientes acompañadas de la ensalada fresca.",
    ],
    dificultad: "Fácil",
  },  
  {
    slug: "asado-casero-al-horno",
    nombre: "Asado Casero al Horno - Especial Día de la Madre",
    descripcion:
      "Cortes surtidos de asado cocinados al horno con papas y cebollas. Perfecto para reuniones familiares y celebraciones especiales.",
    imagen: "/images/asadoalhorno.png",
    tiempo: "150 min",
    porciones: "10-12 personas",
    ingredientes: [
      "5 kg de asado surtido",
      "4 kg de papas cortadas en gajos",
      "4 cebollas cortadas en cubos grandes",
      "Chimichurri casero",
      "Aceite, sal gruesa y pimienta",
      "Romero y tomillo",
    ],
    pasos: [
      "Precalentar el horno a 180°C.",
      "Condimentar el asado con sal gruesa, pimienta y hierbas.",
      "Colocar en una fuente grande para horno junto con las papas y cebollas.",
      "Rociar con aceite generosamente.",
      "Hornear durante 2-2.5 horas, volteando la carne a mitad de cocción.",
      "Servir bien caliente con chimichurri y ensaladas.",
    ],
    dificultad: "Intermedio",
  },
  {
    slug: "pata-muslo-al-horno",
    nombre: "Pata y Muslo al Horno con Papas",
    descripcion:
      "Pata y muslo de pollo jugosos al horno con papas crocantes, cebolla caramelizada y especias aromáticas.",
    imagen: "/images/patamusloalhornoconpapas.png",
    tiempo: "75 min",
    porciones: "4 personas",
    ingredientes: [
      "2 kg de pata y muslo de pollo",
      "4 kg de papas cortadas en gajos",
      "2 cebollas cortadas en cubos",
      "3 dientes de ajo picados",
      "Romero y tomillo fresco",
      "Aceite de oliva, sal y pimienta",
      "Jugo de 1 limón",
    ],
    pasos: [
      "Precalentar el horno a 200°C.",
      "Condimentar el pollo con sal, pimienta, ajo y jugo de limón.",
      "Colocar en una fuente para horno junto con las papas y cebollas.",
      "Agregar las hierbas aromáticas y rociar con aceite.",
      "Hornear 60-70 minutos hasta que el pollo esté dorado y las papas crocantes.",
      "Servir caliente con ensalada fresca.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "pure-de-zanahorias",
    nombre: "Puré Cremoso de Zanahorias",
    descripcion:
      "Un acompañamiento suave y nutritivo. Zanahorias frescas convertidas en un puré cremoso y delicioso.",
    imagen: "/images/puredezanahorias.png",
    tiempo: "30 min",
    porciones: "6 personas",
    ingredientes: [
      "2 kg de zanahorias peladas y cortadas",
      "2 papas medianas",
      "2 cucharadas de manteca",
      "1/2 taza de leche o crema",
      "Sal, pimienta y nuez moscada",
    ],
    pasos: [
      "Hervir las zanahorias y las papas en agua con sal hasta que estén tiernas.",
      "Escurrir bien y hacer puré con un pisapapas o procesadora.",
      "Agregar la manteca, la leche y los condimentos.",
      "Mezclar hasta obtener una consistencia cremosa.",
      "Servir caliente como acompañamiento de carnes o aves.",
    ],
    dificultad: "Muy Fácil",
  },
];
