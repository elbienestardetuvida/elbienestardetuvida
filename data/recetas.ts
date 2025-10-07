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
    slug: "pollo-al-horno-con-papas-y-cebolla",
    nombre: "Pollo al Horno con Papas y Cebolla",
    descripcion:
      "Un clásico que nunca falla: muslos de pollo tiernos al horno con papas doradas, cebolla caramelizada y un toque de romero.",
    imagen: "/images/pollohornopapas.png",
    tiempo: "75 min",
    porciones: "4 personas",
    ingredientes: [
      "2 kg de pata muslo",
      "4 papas medianas cortadas en rodajas gruesas",
      "2 cebollas cortadas en pluma",
      "3 dientes de ajo picados",
      "Romero fresco o seco",
      "Aceite de oliva, sal y pimienta a gusto",
    ],
    pasos: [
      "Precalentar el horno a 200°C.",
      "Colocar el pollo en una fuente para horno y condimentar con sal, pimienta y romero.",
      "Agregar las papas y la cebolla, rociar con aceite de oliva.",
      "Hornear durante 60-70 minutos, removiendo a mitad de cocción.",
      "Servir caliente con una ensalada fresca.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "tarta-de-acelga-y-zanahoria",
    nombre: "Tarta de Acelga y Zanahoria",
    descripcion:
      "Ideal para una comida liviana y casera. Acelga fresca y zanahoria rallada con un relleno cremoso y dorado al horno.",
    imagen: "/images/tarta-acelga-zanahoria.png",
    tiempo: "60 min",
    porciones: "6 personas",
    ingredientes: [
      "1 masa para tarta",
      "2 atados de acelga",
      "1 zanahoria grande rallada",
      "1 cebolla picada",
      "3 huevos batidos",
      "150g de queso rallado o cremoso",
      "Sal, pimienta y nuez moscada",
    ],
    pasos: [
      "Lavar bien la acelga y hervirla 5 minutos. Escurrir y picar.",
      "Saltear la cebolla con la zanahoria hasta que estén tiernas.",
      "Agregar la acelga y cocinar unos minutos más.",
      "Mezclar las verduras con los huevos, queso y condimentos.",
      "Volcar sobre la masa y hornear a 180°C durante 35-40 minutos.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "guiso-de-arroz-con-pulpa",
    nombre: "Guiso de Arroz con Pulpa",
    descripcion:
      "Un clásico bien casero: guiso de arroz con pulpa tierna, papas, verduras y el sabor inconfundible de la cocina del hogar.",
    imagen: "/images/guiso-arroz-pulpa.png",
    tiempo: "80 min",
    porciones: "6 personas",
    ingredientes: [
      "1 kg de pulpa en trozo cortada en cubos",
      "2 tazas de arroz",
      "2 papas medianas cortadas en cubos",
      "1 cebolla grande picada",
      "2 tomates picados o 1 taza de puré de tomate",
      "1 zanahoria rallada o en cubos pequeños",
      "1 pimiento rojo picado (opcional)",
      "1 litro y medio de caldo de carne o verduras",
      "2 cucharadas de aceite",
      "Pimentón dulce, comino, sal, pimienta y una hoja de laurel",
    ],
    pasos: [
      "En una olla grande, calentar el aceite y dorar la pulpa hasta sellarla por todos lados.",
      "Agregar la cebolla, el tomate, el pimiento y la zanahoria. Cocinar hasta que se ablanden.",
      "Incorporar el caldo caliente, las papas, el laurel y los condimentos. Cocinar 40 minutos a fuego medio-bajo.",
      "Agregar el arroz y revolver bien para que no se pegue.",
      "Cocinar 15-20 minutos más, agregando caldo si es necesario, hasta que el arroz esté tierno y el guiso espeso.",
      "Servir bien caliente, con un toque de perejil picado o queso rallado si se desea.",
    ],
    dificultad: "Intermedio",
  },  
  {
    slug: "ensalada-fresca-de-huerta",
    nombre: "Ensalada Fresca de Huerta",
    descripcion:
      "Colorida y natural, combina los sabores frescos del tomate, la lechuga y la zanahoria. Perfecta para acompañar cualquier comida.",
    imagen: "/images/ensalada-huerta.png",
    tiempo: "10 min",
    porciones: "2 personas",
    ingredientes: [
      "1 atado de lechuga fresca",
      "2 tomates medianos cortados en cubos",
      "1 zanahoria rallada",
      "1/2 cebolla en juliana",
      "Aceite de oliva, vinagre y sal a gusto",
    ],
    pasos: [
      "Lavar y preparar todos los vegetales.",
      "Colocar en un bowl la lechuga trozada, los tomates, la zanahoria y la cebolla.",
      "Condimentar con aceite, vinagre y sal justo antes de servir.",
    ],
    dificultad: "Muy Fácil",
  },
  {
    slug: "revuelto-de-pollo-y-verduras",
    nombre: "Revuelto de Pollo y Verduras",
    descripcion:
      "Una opción rápida y deliciosa: pechuga de pollo salteada con verduras frescas y un toque de salsa de soja.",
    imagen: "/images/revuelto-pollo-verduras.png",
    tiempo: "25 min",
    porciones: "3 personas",
    ingredientes: [
      "2 pechugas de pollo en tiras",
      "1 zanahoria cortada en bastones",
      "1 cebolla en juliana",
      "1 pimiento rojo en tiras (opcional)",
      "2 cucharadas de salsa de soja",
      "Aceite, sal y pimienta",
    ],
    pasos: [
      "Calentar una sartén con un poco de aceite.",
      "Saltear las tiras de pollo hasta que estén doradas.",
      "Agregar las verduras y cocinar 5-7 minutos más.",
      "Incorporar la salsa de soja y cocinar 2 minutos adicionales.",
      "Servir caliente acompañado de arroz o pan.",
    ],
    dificultad: "Fácil",
  },
  {
    slug: "tortilla-de-papas-y-cebollas",
    nombre: "Tortilla de Papas y Cebollas",
    descripcion:
      "Clásica tortilla criolla con papas doradas, cebolla y huevos. Simple, sabrosa y rendidora.",
    imagen: "/images/tortilla-papas.png",
    tiempo: "35 min",
    porciones: "4 personas",
    ingredientes: [
      "4 papas medianas",
      "1 cebolla grande",
      "4 huevos",
      "Aceite, sal y pimienta",
    ],
    pasos: [
      "Pelar y cortar las papas en rodajas finas.",
      "Freírlas en aceite hasta que estén tiernas, retirar y escurrir.",
      "En la misma sartén, dorar la cebolla.",
      "Batir los huevos, agregar las papas y cebolla, y mezclar bien.",
      "Cocinar la mezcla a fuego medio de ambos lados hasta que quede dorada.",
    ],
    dificultad: "Muy Fácil",
  },
];
