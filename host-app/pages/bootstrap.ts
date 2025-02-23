import dynamic from 'next/dynamic';

export const ProductsIndex = dynamic(() => import('productsRemote/index'), { ssr: false });
export const Basket = dynamic(() => import('basketRemote/Basket'), { ssr: false });
