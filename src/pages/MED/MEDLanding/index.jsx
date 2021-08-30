import { Button } from '@chakra-ui/react';
import React from 'react';
// import { MenuComponent } from '../../components';
import { getUserDetails } from '../../../utils/api';

export function MEDPage({ history }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const med = [
        "559200051629654026", // Aesthetical
        "435515556049715210", // AfterHours
        "528568862703091732", // Kayla
        "212556981234302976" // Sysadmin
    ]

    React.useEffect(() => {
        getUserDetails().then(({ data }) => {
            if (!med.includes(data.uid)) {
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

    const goToMenu = () => window.location.href = "http://ussapi.ga/home"
    const itemManagement = () => window.location.href = "http://ussapi.ga/home/med/item-management"

    return !loading && (
        <div style={{ paddingLeft: 20, paddingTop: 20 }}>
            <div style={{ paddingBottom: 10 }}>
                <Button onClick={goToMenu} colorScheme="blue" size="sm" fontSize="12" children="< Back to Menu" />
            </div>
            <h1>Welcome to the MED portal</h1>
            <div style={{ paddingTop: 10 }}>
                <li>
                    <Button onClick={itemManagement} colorScheme="blue" size="sm" fontSize="12" children="Item Management"/>
                </li>
            </div>
        </div>
    )
    
    /*
    return (
        <div style={{ paddingTop: 10 }}>
            <li>
                <Button onClick={adminInvites} colorScheme="blue" size="sm" fontSize="12" children="Admin Invites"/>
            </li>
        </div>
    )
    */
}