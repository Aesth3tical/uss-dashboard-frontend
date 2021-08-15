import { Button } from '@chakra-ui/react';
import React from 'react';
// import { MenuComponent } from '../../components';
import { getUserDetails } from '../../../utils/api';

export function ItemManagement({ history }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const med = [
        "559200051629654026", // Aesthetical
        "435515556049715210", // AfterHours
        "528568862703091732" // Kayla
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

    const goToMed = () => window.location.href = "http://ussapi.ga/home/med";

    return !loading && (
        <div style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Button onClick={goToMed} colorScheme="blue" size="sm" fontSize="12" children="< Back to MED Portal" />
            <div style={{ paddingTop: 10 }}>
                <h1 style={{ paddingBottom: 10 }}>Item Management</h1>
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