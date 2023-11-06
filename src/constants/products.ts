export interface IProduct {
  slug: string;
  name: string;
  description: string;
  image: string;
  price: number;
}

import alqueria from '../../public/alqueria.jpg';
import detoditorojo from '../../public/detoditorojo.jpeg';
import detoditomix from '../../public/detoditomix.jpeg';
import detoditoverde from '../../public/detoditoverde.jpeg';
import chocokrispis from '../../public/chocokrispis.jpg';
import frootloops from '../../public/frootloops.jpeg';
import lechecolanta from '../../public/lechecolanta.png';
import milo from '../../public/milo.jpg';
import nescafe from '../../public/nescafe.jpg';
import nescafedecaf from '../../public/nescafedecaf.jpg';
import tarritorojo from '../../public/tarritorojo.jpg';
import zucaritas from '../../public/zucaritas.jpeg';

export const products: IProduct[] = [
  {
    slug: 'milk-alqueria',
    name: 'Milk',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: alqueria,
    price: 6200,
  },
  {
    slug: 'de-todito-bbq',
    name: 'DeTodito BBQ',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: detoditorojo,
    price: 2810,
  },
  {
    slug: 'milo',
    name: 'Milo',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: milo,
    price: 10700,
  },
  {
    slug: 'zucaritas',
    name: 'Zucaritas',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: zucaritas,
    price: 23000,
  },
  {
    slug: 'milk-colanta',
    name: 'Leche Colanta',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: lechecolanta,
    price: 4200,
  },
  {
    slug: 'nescafe-traditional',
    name: 'Nescafe tradicional',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: nescafe,
    price: 21000,
  },
  {
    slug: 'nescafe-decaf',
    name: 'Nescafe descafeinado',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: nescafedecaf,
    price: 21000,
  },
  {
    slug: 'de-todito-limon',
    name: 'DeTodito Limón',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: detoditoverde,
    price: 2810,
  },
  {
    slug: 'chocokrispis',
    name: 'Chocokrispis',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: chocokrispis,
    price: 23000,
  },
  {
    slug: 'de-todito-mix',
    name: 'DeTodito Mix',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: detoditomix,
    price: 2810,
  },
  {
    slug: 'tarrito-rojo',
    name: 'Tarrito Rojo',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: detoditorojo,
    price: 24000,
  },
  {
    slug: 'frootloops',
    name: 'FrootLoops',
    description:
      'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
    image: frootloops,
    price: 23000,
  },
];
