export interface IProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const products: IProduct[] = [
  {
    slug: 'milk-alqueria',
    name: 'Milk',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBK3ZNSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--888481f06235dfa99e4f9299855799ab71806874/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7702177001783.jpg?locale=es',
    price: 6200,
  },
  {
    slug: 'de-todito-bbq',
    name: 'DeTodito BBQ',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      // 'https://mistiendas.com.co/1774-large_default/detodito-fritolay-x45-bbq.jpg',
      'http://cdn.shopify.com/s/files/1/0046/4129/2357/products/image_e8160bd9-456b-4d6a-9098-3b9b9d624271_1200x1200.jpg?v=1588993759',
    price: 2810,
  },
  {
    slug: 'milo',
    name: 'Milo',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://merkepaisa.com/wp-content/uploads/2021/02/7702024056102-A-1.jpg',
    price: 10700,
  },
  {
    slug: 'zucaritas',
    name: 'Zucaritas',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'http://images.kglobalservices.com/www.kelloggs.com.co/es_co/product/product_4508506/kicproductimage-121045_kicproductimage-121045.jpg',
    price: 23000,
  },
  {
    slug: 'milk-colanta',
    name: 'Leche Colanta',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://cdnx.jumpseller.com/supermercados-k/image/11578241/7702129003650.jpg?1655417083',
    price: 4200,
  },
  {
    slug: 'nescafe-traditional',
    name: 'Nescafe tradicional',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://elviejoparisvirtual.com/rails/active_storage/representations/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBL3FNSWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--171b9f5fdd23c6d41b32c0550ca14c6c5203a8d4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDRG9TY21WemFYcGxYM1J2WDJacGRGc0hhUUlnQTJrQ0lBTTZER052Ym5abGNuUkpJZ2hxY0djR09nWkZWRG9LYzJGMlpYSjdDRG9NY1hWaGJHbDBlV2xmT2dwemRISnBjRlE2RDJKaFkydG5jbTkxYm1SYkNHa0IvMmtCLzJrQi93PT0iLCJleHAiOm51bGwsInB1ciI6InZhcmlhdGlvbiJ9fQ==--f9b6205701877dad933126b17f2a1a57fbbba520/7702024005780.jpg?locale=es',
    price: 21000,
  },
  {
    slug: 'nescafe-decaf',
    name: 'Nescafe descafeinado',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://cdn10.totalcode.net/mercacentro/product-zoom/es/cafe%C2%90--nescafe-decaf-frasco-200-g-1.webp',
    price: 21000,
  },
  {
    slug: 'de-todito-limon',
    name: 'DeTodito Limón',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'http://cdn.shopify.com/s/files/1/0046/4129/2357/products/image_08796a26-a7cc-48ec-823f-a6ae021b68bd_1200x1200.jpg?v=1588993821',
    price: 2810,
  },
  {
    slug: 'chocokrispis',
    name: 'Chocokrispis',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://jumbocolombiaio.vtexassets.com/arquivos/ids/223520/7702103407221.jpg?v=637816531177630000',
    price: 23000,
  },
  {
    slug: 'de-todito-mix',
    name: 'DeTodito Mix',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61fHSZTiVyL.jpg',
    price: 2810,
  },
  {
    slug: 'tarrito-rojo',
    name: 'Tarrito Rojo',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'https://locatelcolombia.vtexassets.com/arquivos/ids/322785/7702560026072_2_Kola-Granulada-Tarrito-Rojo-Tradicional-Jgb-X-380G.jpg?v=637969979245670000',
    price: 24000,
  },
  {
    slug: 'frootloops',
    name: 'FrootLoops',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image:
      'http://images.kglobalservices.com/www.kelloggs.com.co/es_co/product/product_4508497/prod_img-3394699_prod_img-3394699.jpg',
    price: 23000,
  },
];
