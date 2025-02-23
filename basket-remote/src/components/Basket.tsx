import React, { useState } from 'react';
import './Basket.css';
import BasketItem from './BasketItem';
import { Button } from 'antd';
import { ShoppingCartOutlined, CloseCircleOutlined } from "@ant-design/icons";


const Basket = () => {  
  const [isOpen, setIsOpen] = useState(false);
  // Dummy data
  // TODO: Replace with real data from host app
  // TODO: Add quantity to items and update total
  const items = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];
   
    return (
      <div className={`${isOpen ? 'mainContent' : ''}`}>
        <Button className='basketToggle' icon={<ShoppingCartOutlined />} onClick={() => setIsOpen(!isOpen)} />

        <div className={`basketContainer ${isOpen ? 'open' : ''}`}>

          {isOpen && <Button className='closeBasket' icon={<CloseCircleOutlined />} onClick={() => setIsOpen(false)} />}

          <ul className='basketList'>
            {items.length > 0 ? (
              items.map((item, index) => 
                <BasketItem 
                  key={index} 
                  item={item}
                  />)
                ) : (
                <p className='text-gray-500'>Your basket is empty</p>
              )}
          </ul>

          <div className='basketFooter'>
            <p>Total: ${items.length > 0 ? items.length * 10 : 0}</p>
            <Button type='primary'>Checkout</Button>
          </div>
        </div>
      </div>
    );
  }

export default Basket;