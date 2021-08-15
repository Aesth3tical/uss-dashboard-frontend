import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';
import React from 'react';

export function MEDButton({ isMED }) {
    const goToMED = () => window.location.href = 'http://ussapi.ga/home/med';

    if (isMED === true) {
        return (
            <Button
                onClick={goToMED}
                colorScheme="blue"
                size="sm"
                fontSize="12"
            >
                MED portal
            </Button>
        )
    } else if (isMED === false) {
        return (
            <p></p>
        )
    }
}