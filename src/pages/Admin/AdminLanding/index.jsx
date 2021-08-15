import { Button } from '@chakra-ui/react';
import React from 'react';
// import { MenuComponent } from '../../components';
import { getUserDetails } from '../../../utils/api';

export function AdminPage({ history }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const admins = [
        "559200051629654026", // Aesthetical
        "528568862703091732", // Kayla
        "432320481245528064", // Xavier
        "594028894483644438" // AOC
    ]

    React.useEffect(() => {
        getUserDetails().then(({ data }) => {
            if (!admins.includes(data.uid)) {
                history.push('/')
            }
            // setUser(data)
            setLoading(false);
        }).catch((err) => {
            console.log(err)
            history.push('/');
            setLoading(false);
        })
    }, [])

    const adminInvites = () => window.location.href = "http://ussapi.ga/home/admin/invites";
    const goToHome = () => window.location.href = "http://ussapi.ga/home"

    return !loading && (
        <div style={{ paddingLeft: 20, paddingTop: 20 }}>
            <div style={{ paddingBottom: 10 }}>
                <Button onClick={goToHome} colorScheme="blue" size="sm" fontSize="12" children="< Back to Home" />
            </div>
            <h1>Welcome to the admin portal</h1>
            <div style={{ paddingTop: 10 }}>
                <li>
                    <Button onClick={adminInvites} colorScheme="blue" size="sm" fontSize="12" children="Admin Invites"/>
                </li>
            </div>
        </div>
    )
    
    /*
    return !loading && (
        <div style={{ paddingTop: 20, paddingLeft: 20}}>
            <h1>Welcome to the business menu! A list of businesses which you own is below, with a link to the dashboard of each</h1>
            <br/>
            <MenuComponent businesses={businesses}/>
        </div>
    );
    */
}