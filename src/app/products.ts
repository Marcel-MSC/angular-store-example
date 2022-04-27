export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'IPhone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    path: 'assets/img/iphonexl.png'
  },
  {
    id: 2,
    name: 'IPhone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
    path: 'assets/img/iphonemini.png'
  },
  {
    id: 3,
    name: 'IPhone 13',
    price: 1000,
    description: 'Best phone ever',
    path: 'assets/img/iphone13.png'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/