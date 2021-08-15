import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import React from 'react';

export function AdminButton({ isAdmin }) {
    const goToAdmin = () => window.location.href = 'http://ussapi.ga/home/admin';

    if (isAdmin === true) {
        return (
            <Button
                onClick={goToAdmin}
                colorScheme="blue"
                size="sm"
                fontSize="12"
            >
                Admin portal
            </Button>
        )
    } else if (isAdmin === false) {
        return (
            <p></p>
        )
    }
}