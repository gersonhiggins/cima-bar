import images from './images';


const breakfast = [
  {
    title: 'Empanadas Moteras',
    price: '€2',
    tags: 'Clásicas y tostaditas, rellenas de carne mechada o queso.',
  },
  {
    title: 'Arepas',
    price: '€4',
    tags: 'Del budare a tu mesa, rellenas de carne mechada o queso.',
  },
  {
    title: 'Huevos Cima Bar',
    price: '€7',
    tags: 'Huevos rancheros en omelett con chorizo ahumado, queso mozzarella, pepperoncini y arepa asada.',
  },
];

const entradas = [
  {
    title: 'Papas Fritas',
    price: '€3',
    tags: 'Ración de 140g de las clásicas papas fritas doraditas con Ketchup.',
  },
  {
    title: 'Papas Cheddar',
    price: '€4',
    tags: 'Ración de 140g papas fritas con queso cheddar fundido y tocineta crujiente.',
  },
  {
    title: 'Tequeños',
    price: '€4',
    tags: '7 unidades.',
  },
  {
    title: 'Golden Chicken Wings',
    price: '€6',
    tags: '500g de la mejor selección de alitas de pollo acompañadas de salsa BBQ.',
  },
  {
    title: 'Mozzarella Sticks',
    price: '€5',
    tags: '7 unidades de crujientes dedos de mozzarella empanizados con panko, acompañados de salsa nápole de la casa.',
  },
  {
    title: 'Tenders de Pollo',
    price: '€8',
    tags: 'Crujiente pechuga de pollo empanizada con salsa BBQ o Ketchup acompañado de papas fritas.',
  },
];

const almuerzo = [
  {
    title: 'Capital Burger',
    price: '€7',
    tags: '140g carne / 140g pollo crispy / 140g camarón rebosado. Con queso cheddar Kraft, tocineta, lechuga, tomate, cebolla, pan de tu preferencia, acompañado de papas fritas.',
  },
  {
    title: 'Parrilla Motera',
    price: '€5',
    tags: '250g de solomo al carbón, pollo y chorizo ahumado, acompañada pimentón, cebolla, tomate salteado, yuca y guasacaca de la casa.',
  },
  {
    title: 'Choripan',
    price: '€5',
    tags: 'Pan canilla, chorizo, queso cheddar, cebolla caramelizada y salsas.',
  },
  {
    title: 'Sopa Dominguera',
    price: '€5',
    tags: 'Hervido de la casa cocinado a la leña, acompañado con 2 arepitas fritas.',
  },
];

const pizzas = [
  {
    title: 'Margarita',
    price: '€6',
    tags: 'Salsa nápole de la casa, queso mozzarella y orégano.',
  },
  {
    title: 'La Pepperoni',
    price: '€10',
    tags: 'Salsa nápole de la casa, queso mozzarella, orégano y mucho pepperoni.',
  },
  {
    title: 'Capresa',
    price: '€13',
    tags: 'Salsa nápole de la casa, queso mozzarella, queso de búfala, tomate manzano, pesto de albahaca y aceite de oliva.',
  },
  {
    title: 'Capresa Especial',
    price: '€13',
    tags: 'Con base de berenjena, salsa nápole de la casa, queso mozzarella, queso de búfala, tomate manzano, pesto de albahaca y aceite de oliva.',
  },
  {
    title: 'Jamón y Hongos',
    price: '€12',
    tags: 'Salsa nápole de la casa, queso mozzarella, jamón de pierna y champiñones frescos.',
  },
  {
    title: 'Cima Bar',
    price: '€15',
    tags: 'Salsa nápole de la casa, queso mozzarella, jamón serrano, ricota y rúgula.',
  },
];

const postres = [
  {
    title: 'Quesillo / Marquesa de Chocolate',
    price: '€3',
    tags: '',
  },
  {
    title: 'Fresas con Crema',
    price: '€4',
    tags: '',
  },
];

const promos = [
  {
    title: 'Tobo del Jueves Motero',
    price: '€8',
    tags: '12 Zulia, Polarcita o Solera Azul.',
  },
  {
    title: 'Tobo Motero + Ración de Tequeños',
    price: '€11',
    tags: '',
  },
  {
    title: 'Tobo Motero + Pizza Margarita',
    price: '€13',
    tags: '',
  },
];

const bebidas = [
  // Cervezas
  {
    title: 'Birritas Moteras',
    price: '€1',
    tags: 'Polarcita / Light / Zulia / Solera Azul',
  },
  {
    title: 'Solera Verde',
    price: '€1.20',
    tags: '',
  },
  {
    title: 'Michelada',
    price: '€2',
    tags: 'Cerveza con zumo de limón, sal y un toque de picante.',
  },
  {
    title: 'Tobo Motero',
    price: '€8',
    tags: '12 unidades. Polarcita / Light / Zulia / Solera Azul.',
  },
  {
    title: 'Tobo Solera',
    price: '€10',
    tags: '10 unidades. Solera Verde.',
  },

  // Servicios
  {
    title: 'Vino',
    price: '€15',
    tags: 'Vino blanco o tinto.',
  },
  {
    title: "Vodka/Ginebra Gordon's",
    price: '€22',
    tags: 'Con jugo de naranja o parchita.',
  },
  {
    title: 'Vodka Absolut',
    price: '€25',
    tags: 'Con jugo de naranja o parchita.',
  },
  {
    title: 'Ron Gran Reserva',
    price: '€25',
    tags: '2 botellas de refresco + limón natural.',
  },
  {
    title: 'Whisky Black & White',
    price: '€27',
    tags: 'Whiskey 8 años. 2 agua mineral + 1 soda.',
  },
  {
    title: 'Vodka Balinoff',
    price: '€50',
    tags: 'Con jugo de naranja o parchita.',
  },
  {
    title: "Whisky Buchanan's",
    price: '€56',
    tags: 'Whiskey 12 años. 2 agua mineral + 1 soda.',
  },

  // Descorches
  {
    title: 'Vino',
    price: '€6',
    tags: 'Tu botellita de vino en la montaña.',
  },
  {
    title: 'Ron',
    price: '€12',
    tags: 'Incluye hielo, 2 refrescos de botella y limón natural.',
  },
  {
    title: 'Whisky',
    price: '€14',
    tags: 'Incluye hielo, 2 agua mineral y 1 soda.',
  },
];

const bebidasCalientes = [
  {
    title: 'Infusiones',
    price: '€1.50',
    tags: '',
  },
  {
    title: 'Café Pequeño',
    price: '€2',
    tags: 'Guayoyo, americano, marrón, con leche, tetero...',
  },
  {
    title: 'Café Grande',
    price: '€3',
    tags: 'Guayoyo, americano, marrón, con leche, tetero...',
  },
  {
    title: 'Capuccino Americano',
    price: '€4',
    tags: 'Café expreso con crema chantilly y sirope.',
  },
  {
    title: 'Mocaccino',
    price: '€4',
    tags: 'Café expreso con chocolate, crema chantilly y sirope.',
  },
  {
    title: 'Chocolate Caliente',
    price: '€4',
    tags: '',
  },
];

const bebidasRefrescantes = [
  {
    title: 'Agua Mineral',
    price: '€1.50',
    tags: '',
  },
  {
    title: 'Malta',
    price: '€1.50',
    tags: '',
  },
  {
    title: 'Refrescos',
    price: '€1.90',
    tags: '350ml, botella de vidrio.',
  },
  {
    title: 'Naturales',
    price: '€2.50',
    tags: 'Limonada con yerbabuena, papelón con limón. Jugos: pregunta por las frutas de la temporada.',
  },
];

const cocktails = [
  {
    title: 'Mojito',
    price: '€4',
    tags: '',
  },
  {
    title: 'Daiquiri',
    price: '€4',
    tags: '',
  },
  {
    title: 'Cuba Libre',
    price: '€4',
    tags: '',
  },
  {
    title: 'Submarino',
    price: '€4',
    tags: '',
  },
  {
    title: 'Maraquita',
    price: '€4',
    tags: '',
  },
  {
    title: 'Tinto de Verano',
    price: '€4',
    tags: '',
  },
  {
    title: 'Destornillador',
    price: '€4',
    tags: '',
  },
  {
    title: 'Vodka Tonic',
    price: '€4',
    tags: '',
  },
  {
    title: 'Vodka Sunrise',
    price: '€4',
    tags: '',
  },
  {
    title: 'Dirty Martini',
    price: '€4',
    tags: '',
  },
  {
    title: 'Promo 2 Mojitos',
    price: '€6',
    tags: '',
  },
  {
    title: 'Cocktail Tequila Sunrise',
    price: '€6',
    tags: '',
  },
];

const shots = [
  {
    title: 'Ron, Vodka, Anís, Ginebra',
    price: '€2',
    tags: '',
  },
  {
    title: 'Frangelico, Sambuca, Triple Seco, Whisky 8 Años',
    price: '€4',
    tags: '',
  },
  {
    title: 'Sambuca Pol, Tequila, Vodka Balinoff',
    price: '€5',
    tags: '',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { bebidasCalientes, bebidasRefrescantes, cocktails, awards, breakfast, entradas, almuerzo, pizzas, postres, bebidas, promos, shots };
