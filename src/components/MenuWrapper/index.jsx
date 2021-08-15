import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import React from 'react';

export function MenuComponent({ businesses }) {
    
    return (
        <div style={{ paddingLeft: 25 }}>
            {businesses.map(business => (
                <div>
                    <h2>{business.name}</h2>
                    <li><Link to={`/dashboard/${business.bid}`}><Button color="blue" size="sm" fontSize="12">View Dashboard</Button></Link></li>
                </div>
            ))}
        </div>
    )
}