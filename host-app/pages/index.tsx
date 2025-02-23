'use client';

import React, { FC } from 'react';
import { ProductsIndex, Basket } from './bootstrap';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Products extends Array<Product> {}

const Home: FC<{ products: Products }> = ({ products }) => {

  return (
    <div className='flex min-h-screen'>
      <section className='flex-1 p-4'>
        <ProductsIndex products={products} />
      </section>
      <section>
        <Basket />
      </section>
    </div>
  );
}

export default Home;
