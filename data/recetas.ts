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
    slug: "ensalada-fresca-temporada",
    nombre: "Ensalada Fresca de Temporada",
    descripcion: "Una mezcla perfecta de vegetales frescos con aderezo casero que resalta todos los sabores naturales",
    imagen: "/placeholder.svg?height=400&width=600&text=Ensalada+Fresca",
    tiempo: "15 min",
    porciones: "4 personas",
    ingredientes: [
      "2 lechugas criollas frescas",
      "4 tomates cherry cortados por la mitad",
      "1 zanahoria grande rallada",
      "1/2 cebolla morada en juliana",
      "3 cucharadas de aceite de oliva extra virgen",
      "1 cucharada de vinagre de manzana",
      "Sal y pimienta a gusto",
      "Semillas de girasol (opcional)"
    ],
    pasos: [
      "Lavar muy bien todas las verduras bajo agua fría corriente",
      "Cortar las lechugas en trozos medianos y colocar en un bowl grande",
      "Agregar los tomates cherry cortados por la mitad",
      "Incorporar la zanahoria rallada y la cebolla morada",
      "En un recipiente pequeño, mezclar el aceite de oliva con el vinagre",
      "Condimentar con sal y pimienta, batir bien el aderezo",
      "Verter el aderezo sobre la ensalada justo antes de servir",
      "Mezclar suavemente y decorar con semillas de girasol si se desea"
    ],
    dificultad: "Muy Fácil"
  },
  {
    slug: "pollo-horno-verduras",
    nombre: "Pollo al Horno con Verduras",
    descripcion: "Jugoso pollo acompañado de vegetales asados al punto perfecto, una comida completa y nutritiva",
    imagen: "/placeholder.svg?height=400&width=600&text=Pollo+al+Horno",
    tiempo: "90 min",
    porciones: "6 personas",
    ingredientes: [
      "1 pollo entero de 2 kg aproximadamente",
      "4 papas medianas cortadas en cuartos",
      "3 zanahorias cortadas en bastones",
      "2 cebollas cortadas en cuartos",
      "2 pimientos rojos cortados en tiras",
      "4 dientes de ajo picados",
      "Romero, tomillo y orégano frescos",
      "Aceite de oliva, sal y pimienta"
    ],
    pasos: [
      "Precalentar el horno a 200°C",
      "Limpiar bien el pollo y secarlo con papel absorbente",
      "Condimentar el pollo por dentro y por fuera con sal, pimienta y hierbas",
      "En una fuente para horno, colocar todas las verduras cortadas",
      "Rociar las verduras with aceite de oliva y condimentar",
      "Colocar el pollo sobre las verduras",
      "Hornear durante 60-70 minutos hasta que esté dorado",
      "Dejar reposar 10 minutos antes de cortar y servir"
    ],
    dificultad: "Intermedio"
  },
  {
    slug: "smoothie-energetico",
    nombre: "Smoothie Energético",
    descripcion: "Batido nutritivo con frutas frescas perfecto para empezar el día con energía y vitalidad",
    imagen: "/placeholder.svg?height=400&width=600&text=Smoothie+Energético",
    tiempo: "5 min",
    porciones: "2 personas",
    ingredientes: [
      "2 bananas maduras",
      "1 manzana verde sin piel",
      "Jugo de 2 naranjas frescas",
      "1 taza de yogur natural",
      "2 cucharadas de miel pura",
      "1/2 taza de hielo",
      "Hojas de menta fresca (opcional)"
    ],
    pasos: [
      "Pelar las bananas y cortar en rodajas",
      "Cortar la manzana en trozos pequeños",
      "Exprimir las naranjas para obtener el jugo fresco",
      "Colocar todos los ingredientes en la licuadora",
      "Licuar a velocidad alta durante 2-3 minutos",
      "Verificar la consistencia y agregar más hielo si es necesario",
      "Servir inmediatamente en vasos altos",
      "Decorar con hojas de menta si se desea"
    ],
    dificultad: "Muy Fácil"
  },
  {
    slug: "guiso-carne-verduras",
    nombre: "Guiso de Carne con Verduras",
    descripcion: "Tradicional guiso argentino con carne tierna y vegetales, perfecto para los días fríos",
    imagen: "/placeholder.svg?height=400&width=600&text=Guiso+de+Carne",
    tiempo: "120 min",
    porciones: "8 personas",
    ingredientes: [
      "1 kg de carne de res cortada en cubos",
      "4 papas grandes cortadas en cubos",
      "1/2 calabaza cortada en trozos",
      "2 choclos desgranados",
      "2 cebollas picadas",
      "3 tomates pelados y picados",
      "Pimentón dulce, comino y laurel",
      "Caldo de verduras, aceite, sal y pimienta"
    ],
    pasos: [
      "En una olla grande, dorar la carne en aceite caliente",
      "Agregar las cebollas y cocinar hasta que estén transparentes",
      "Incorporar los tomates y las especias, cocinar 5 minutos",
      "Cubrir con caldo caliente y cocinar a fuego lento 45 minutos",
      "Agregar las papas y la calabaza, cocinar 20 minutos más",
      "Incorporar el choclo y cocinar 15 minutos adicionales",
      "Verificar la cocción de las verduras y ajustar condimentos",
      "Servir bien caliente acompañado de pan casero"
    ],
    dificultad: "Intermedio"
  },
  {
    slug: "tarta-verduras",
    nombre: "Tarta de Verduras",
    descripcion: "Deliciosa tarta con masa casera y relleno de vegetales frescos, ideal para almorzar o cenar",
    imagen: "/placeholder.svg?height=400&width=600&text=Tarta+de+Verduras",
    tiempo: "75 min",
    porciones: "6 personas",
    ingredientes: [
      "1 masa para tarta casera o comprada",
      "2 tazas de espinaca fresca",
      "1 taza de acelga picada",
      "2 cebollas grandes cortadas en juliana",
      "4 huevos batidos",
      "200g de queso cremoso",
      "Crema de leche, nuez moscada",
      "Aceite de oliva, sal y pimienta"
    ],
    pasos: [
      "Precalentar el horno a 180°C y engrasar un molde para tarta",
      "Extender la masa en el molde y pinchar con un tenedor",
      "Saltear las cebollas en aceite hasta que estén doradas",
      "Agregar las espinacas y acelga, cocinar hasta que se reduzcan",
      "En un bowl, batir los huevos con la crema y condimentos",
      "Mezclar las verduras salteadas con la preparación de huevos",
      "Verter el relleno sobre la masa y cubrir con queso",
      "Hornear 35-40 minutos hasta que esté dorada y firme"
    ],
    dificultad: "Intermedio"
  },
  {
    slug: "macedonia-frutas",
    nombre: "Macedonia de Frutas",
    descripcion: "Refrescante mezcla de frutas de estación con almíbar natural, perfecta para el postre",
    imagen: "/placeholder.svg?height=400&width=600&text=Macedonia+de+Frutas",
    tiempo: "25 min",
    porciones: "6 personas",
    ingredientes: [
      "3 manzanas rojas cortadas en cubos",
      "3 peras maduras cortadas en cubos",
      "2 naranjas peladas y en gajos",
      "3 bananas cortadas en rodajas",
      "1 taza de uvas verdes sin semillas",
      "Jugo de 2 limones",
      "3 cucharadas de azúcar",
      "Hojas de menta para decorar"
    ],
    pasos: [
      "Lavar muy bien todas las frutas",
      "Cortar las manzanas y peras en cubos uniformes",
      "Pelar las naranjas y separar en gajos sin piel blanca",
      "Cortar las bananas en rodajas no muy finas",
      "Colocar todas las frutas en un bowl grande",
      "Rociar con jugo de limón para evitar oxidación",
      "Espolvorear con azúcar y mezclar suavemente",
      "Refrigerar 15 minutos y servir decorado con menta"
    ],
    dificultad: "Muy Fácil"
  }
]
