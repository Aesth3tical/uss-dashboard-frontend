import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import React from 'react';

export function ItemConfig({ items }) {
    
    return (
        <div style={{ paddingLeft: 25 }}>
            {items.map(item => (
                <div>
                    <h2>{item.name}</h2> <Link to={`/home/med/item-management/${item.name.replace(' ', '-')}`}><Button color="blue" size="sm" fontSize="12">Configure Item</Button></Link>
                    <li><h3>Price: ${item.price}</h3></li>
                    <li><h3>Description: {item.description}</h3></li>
                </div>
            ))}
        </div>
    )
}