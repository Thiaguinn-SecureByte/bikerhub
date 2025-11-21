import { MotoData } from '../types';

// This file represents the structure requested for /data/motos.json
// Implemented as TS for direct import reliability in the frontend environment.

export const MOTO_DATA: MotoData = {
  yamaha: {
    id: 'yamaha',
    name: 'Yamaha',
    models: [
      { id: 'mt-07', name: 'MT-07', years: [2024, 2023, 2022, 2021, 2020, 2019, 2018] },
      { id: 'r1', name: 'YZF-R1', years: [2024, 2023, 2022, 2020, 2015, 2009, 1998] },
      { id: 'tenere-700', name: 'Ténéré 700', years: [2024, 2023, 2022, 2021, 2020] },
      { id: 'xmax-300', name: 'XMAX 300', years: [2023, 2022, 2021] }
    ]
  },
  honda: {
    id: 'honda',
    name: 'Honda',
    models: [
      { id: 'cbr1000rr', name: 'CBR1000RR-R Fireblade', years: [2024, 2022, 2020, 2017] },
      { id: 'africa-twin', name: 'CRF1100L Africa Twin', years: [2024, 2022, 2020, 2016] },
      { id: 'cb750', name: 'CB750 Hornet', years: [2023, 2024] },
      { id: 'rebel-500', name: 'Rebel 500', years: [2023, 2022, 2021, 2020] }
    ]
  },
  ducati: {
    id: 'ducati',
    name: 'Ducati',
    models: [
      { id: 'panigale-v4', name: 'Panigale V4', years: [2024, 2023, 2022, 2021] },
      { id: 'monster', name: 'Monster', years: [2023, 2021, 2015, 2008] },
      { id: 'multistrada-v4', name: 'Multistrada V4', years: [2024, 2022] },
      { id: 'scrambler', name: 'Scrambler Icon', years: [2023, 2020, 2015] }
    ]
  },
  kawasaki: {
    id: 'kawasaki',
    name: 'Kawasaki',
    models: [
      { id: 'ninja-h2', name: 'Ninja H2', years: [2023, 2020, 2015] },
      { id: 'z900', name: 'Z900', years: [2024, 2023, 2020, 2017] },
      { id: 'zx-10r', name: 'Ninja ZX-10R', years: [2024, 2021, 2016] },
      { id: 'versys-650', name: 'Versys 650', years: [2023, 2022, 2015] }
    ]
  },
  bmw: {
    id: 'bmw',
    name: 'BMW',
    models: [
      { id: 's1000rr', name: 'S 1000 RR', years: [2023, 2020, 2015, 2010] },
      { id: 'r1250gs', name: 'R 1250 GS', years: [2023, 2021, 2019] },
      { id: 'r1300gs', name: 'R 1300 GS', years: [2024] },
      { id: 'rninet', name: 'R nineT', years: [2023, 2020, 2014] }
    ]
  },
  suzuki: {
    id: 'suzuki',
    name: 'Suzuki',
    models: [
      { id: 'hayabusa', name: 'Hayabusa', years: [2023, 2022, 2008, 1999] },
      { id: 'gsx-r1000', name: 'GSX-R1000', years: [2023, 2017, 2009] },
      { id: 'v-strom-650', name: 'V-Strom 650', years: [2023, 2017, 2012] }
    ]
  },
  ktm: {
    id: 'ktm',
    name: 'KTM',
    models: [
      { id: 'duke-390', name: '390 Duke', years: [2024, 2020, 2017] },
      { id: 'super-duke-1290', name: '1290 Super Duke R', years: [2023, 2020, 2014] },
      { id: 'adventure-1290', name: '1290 Super Adventure', years: [2023, 2021] }
    ]
  },
  'harley-davidson': {
    id: 'harley-davidson',
    name: 'Harley-Davidson',
    models: [
      { id: 'sportster-s', name: 'Sportster S', years: [2023, 2021] },
      { id: 'pan-america', name: 'Pan America 1250', years: [2023, 2021] },
      { id: 'fat-boy', name: 'Fat Boy 114', years: [2023, 2020, 2010] }
    ]
  }
};