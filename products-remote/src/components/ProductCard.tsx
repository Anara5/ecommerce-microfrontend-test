import { Card, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FC } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductCard: FC<{ product: Product }> = ({ product })=> {

  //TODO: Add function to add item to cart

  return (
    <Card
      hoverable
      cover={<img src={product.image} alt={product.name} className='h-48 object-cover' />}
      className='w-full rounded-lg shadow-md'
    >
      <h2 className='text-lg font-semibold'>{product.name}</h2>
      <p className='text-gray-500'>${product.price.toFixed(2)}</p>
      <Button 
        type='primary' 
        icon={<ShoppingCartOutlined />} 
        className='mt-4 w-full'
        onClick={() => console.log('Add item')}
        >
        Add to Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
