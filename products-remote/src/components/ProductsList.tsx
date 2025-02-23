import dynamic from 'next/dynamic';
const ProductCard = dynamic(() => import('./ProductCard'), { ssr: false });
import { FC } from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface ProductsListProps {
    products: Product[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {

    if (!products || products.length === 0) return <p>No products available.</p>; // Safety check

    return (
        <div className='container mx-auto px-4 py-8'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
