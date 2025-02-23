import React from 'react';
import './Basket.css';
import { DeleteOutlined } from '@ant-design/icons';

interface BasketItemProps {
    item: {
        name: string;
        quantity: number;
    };
}

const BasketItem: React.FC<BasketItemProps> = ({ item }) => {
    // TODO: Add function delete to items and update total
    return (
        <div className='basketItem'>
            <span>{item.name}</span>
            <span>{item.quantity}</span>
            <DeleteOutlined
                style={{ color: 'gray' }}
                onClick={() => console.log('Delete item')}
            />
        </div>
    );
};

export default BasketItem;
