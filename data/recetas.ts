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
      "Osobuco tierno cocinado a fuego lento con papas y cebolla. Un clásico de puchero reconfortante y lleno de sabor.",
    imagen: "/images/osobucoalacaserola.png",
    tiempo: "120 min",
    porciones: "4 personas",
    ingredientes: [
      "1 kg de osobuco (puchero)",
      "3 papas medianas cortadas en cubos",
      "2 cebollas cortadas en cubos",
      "3 dientes de ajo picados",
      "1 taza de vino blanco",
      "2 tazas de caldo de carne",
      "Laurel, sal y pimienta",
      "Aceite de oliva",
    ],
    pasos: [
      "Dorar el osobuco en una cacerola con aceite caliente hasta sellar por todos lados.",
      "Agregar la cebolla y el ajo, cocinar hasta que estén transparentes.",
      "Incorporar el vino y dejar reducir por 5 minutos.",
      "Añadir el caldo, sumar las papas y el laurel.",
      "Cocinar a fuego bajo con tapa durante 90-100 minutos hasta que la carne esté muy tierna.",
      "Servir con el jugo de cocción y pan casero.",
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
      "2 kg de alitas de pollo",
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
    slug: "pata-muslo-al-horno",
    nombre: "Pata y Muslo al Horno con Papas",
    descripcion:
      "Pata y muslo de pollo jugosos al horno con papas crocantes, cebolla y especias aromáticas.",
    imagen: "/images/patamusloalhornoconpapas.png",
    tiempo: "75 min",
    porciones: "4 personas",
    ingredientes: [
      "2 kg de pata y muslo de pollo",
      "1.5 kg de papas cortadas en gajos",
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
    slug: "guiso-de-arroz-con-pulpa-de-cerdo",
    nombre: "Guiso de Arroz con Pulpa de Cerdo y Verduras",
    descripcion:
      "Un guiso sabroso y rendidor con pulpa de cerdo, arroz, tomate, papa y cebolla.",
    imagen: "/images/guiso-arroz-pulpa.png",
    tiempo: "60 min",
    porciones: "6 personas",
    ingredientes: [
      "1 kg de pulpa de cerdo en cubos",
      "1 cebolla picada",
      "2 tomates cubeteados",
      "2 papas en cubos",
      "1 zanahoria en rodajas (opcional)",
      "1 taza de arroz",
      "3 tazas de caldo",
      "Pimentón, laurel, sal y pimienta",
      "Aceite",
    ],
    pasos: [
      "Sofreír la cebolla en aceite, agregar la pulpa y dorar.",
      "Sumar tomate, condimentos y las papas; mezclar.",
      "Añadir el arroz y el caldo; cocinar a fuego medio-bajo hasta que el arroz esté tierno.",
      "Rectificar sal y pimienta y servir caliente.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "pollo-fresco-al-horno-con-papas",
    nombre: "Pollo Fresco al Horno con Papas y Cebolla",
    descripcion:
      "Pollo fresco al horno con papas y cebolla, simple y delicioso para todos los días.",
    imagen: "/images/pollohornopapas.png",
    tiempo: "70 min",
    porciones: "4-5 personas",
    ingredientes: [
      "1.5 kg de pollo fresco en presas",
      "1 kg de papas en gajos",
      "2 cebollas en pluma",
      "3 dientes de ajo picados",
      "Romero o tomillo",
      "Aceite de oliva, sal y pimienta",
      "Jugo de 1/2 limón",
    ],
    pasos: [
      "Precalentar el horno a 200°C.",
      "Condimentar el pollo y mezclar con papas y cebollas.",
      "Disponer en fuente aceitada y hornear 60-70 minutos hasta dorar.",
      "Reposar 5 minutos y servir.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "tortilla-de-papas-y-cebolla",
    nombre: "Tortilla de Papas y Cebolla",
    descripcion:
      "La clásica tortilla bien jugosa, ideal para usar papa y cebolla en oferta.",
    imagen: "/images/tortilla-papas.png",
    tiempo: "35 min",
    porciones: "4 personas",
    ingredientes: [
      "800 g de papas en rodajas finas",
      "1 cebolla en juliana",
      "5 huevos",
      "Aceite, sal y pimienta",
    ],
    pasos: [
      "Freír las papas con la cebolla a fuego medio hasta tiernas.",
      "Batir los huevos con sal y pimienta; mezclar con las papas.",
      "Cuajar en sartén por ambos lados hasta el punto deseado.",
    ],
    dificultad: "Muy Fácil",
  },
  {
    slug: "ensalada-de-tomate-lechuga-y-palta",
    nombre: "Ensalada de Tomate, Lechuga y Palta",
    descripcion:
      "Ensalada fresca y nutritiva con productos de estación: tomate, lechuga repollada y palta.",
    imagen: "/images/ensalada-huerta.png",
    tiempo: "15 min",
    porciones: "4 personas",
    ingredientes: [
      "2 tomates en gajos",
      "1 lechuga repollada lavada y trozada",
      "2 paltas en cubos",
      "1/2 cebolla en pluma (opcional)",
      "Aceite de oliva, jugo de limón, sal y pimienta",
    ],
    pasos: [
      "Mezclar todos los ingredientes en un bowl grande.",
      "Aliñar con aceite, limón, sal y pimienta a gusto.",
      "Servir inmediatamente.",
    ],
    dificultad: "Muy Fácil",
  },
  {
    slug: "brocoli-salteado-al-ajo",
    nombre: "Brócoli Salteado al Ajo",
    descripcion:
      "Brócoli fresco salteado con ajo y un toque de limón. Rápido y saludable.",
    imagen: "/images/brocolisalteado.png",
    tiempo: "20 min",
    porciones: "3-4 personas",
    ingredientes: [
      "2 unidades de brócoli en flores",
      "2 dientes de ajo laminados",
      "Aceite de oliva",
      "Sal, pimienta y jugo de limón",
    ],
    pasos: [
      "Blanquear el brócoli 2 minutos y cortar cocción.",
      "Saltear el ajo en aceite, sumar el brócoli y condimentos.",
      "Saltear 2-3 minutos más y terminar con limón.",
    ],
    dificultad: "Muy Fácil",
  },
  {
    slug: "carne-molida-con-tomate-y-papas",
    nombre: "Carne Molida con Tomate y Papas a la Olla",
    descripcion:
      "Un guiso rápido con carne molida, tomate y papa; ideal para toda la familia.",
    imagen: "/images/guisoconmolida.png",
    tiempo: "40 min",
    porciones: "5 personas",
    ingredientes: [
      "800 g de carne molida",
      "1 cebolla picada",
      "2 tomates cubeteados",
      "2 papas en cubos",
      "1 cucharadita de pimentón",
      "1/2 cucharadita de comino",
      "1 taza de caldo",
      "Aceite, sal y pimienta",
    ],
    pasos: [
      "Sofreír cebolla, añadir la carne y dorar.",
      "Sumar tomate, especias y las papas; mezclar.",
      "Agregar caldo y cocinar tapado 20-25 minutos hasta tiernas las papas.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "tarta-de-acelga-y-zanahoria",
    nombre: "Tarta de Acelga y Zanahoria",
    descripcion:
      "Tarta sabrosa con acelga, cebolla y zanahoria; perfecta para la vianda.",
    imagen: "/images/tarta-acelga-zanahoria.png",
    tiempo: "50 min",
    porciones: "6-8 porciones",
    ingredientes: [
      "1 atado grande de acelga",
      "1 cebolla picada",
      "1 zanahoria rallada",
      "3 huevos",
      "150 g de queso rallado",
      "2 tapas para tarta",
      "Aceite, sal y pimienta",
    ],
    pasos: [
      "Rehogar cebolla, sumar acelga picada y cocinar hasta tierna.",
      "Mezclar con zanahoria, huevos batidos y queso; condimentar.",
      "Rellenar la tarta, tapar y hornear a 190°C por 30-35 minutos.",
    ],
    dificultad: "Fácil",
  },
];
