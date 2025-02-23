'use client';

import ProductsList from '@/components/ProductsList';
import { FC } from 'react';
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface Products extends Array<Product> {}

const Home: FC<{ products: Products }> = () => {
  // swr hook for fetching data on client side
  // Bug: The products are not displayed on the page
  const { data: products } = useSWR('https://fakestoreapi.com/products', fetcher);

  return (
    <ProductsList products={products} />
  );
}

export default Home;
