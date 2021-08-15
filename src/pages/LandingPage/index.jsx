import React from 'react';
import { Button } from '@chakra-ui/react';

export function LandingPage(props) {
    const login = () => window.location.href = 'http://ussapi.ga:3001/api/auth/discord'
    const toMenu = () => window.location.href = 'http://ussapi.ga/menu'
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button
                onClick={login}
                colorScheme="blue"
            >Welcome! Click here to login</Button>
        </div>
    )
}