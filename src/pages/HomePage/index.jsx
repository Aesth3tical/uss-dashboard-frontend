import React from 'react';
import { MenuComponent, AdminButton, MEDButton } from '../../components';
import { getBusinesses, getUserDetails } from '../../utils/api';

export function HomePage({ history }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [businesses, setBusinesses] = React.useState([]);
    const [isAdmin, setAdmin] = React.useState(false);
    const [isMED, setMED] = React.useState(false);

    const admins = [
        "559200051629654026", // Aesthetical
        "528568862703091732", // Kayla
        "432320481245528064", // Xavier
        "594028894483644438" // AOC
    ]

    const med = [
        "559200051629654026", // Aesthetical
        "435515556049715210", // AfterHours
        "528568862703091732" // Kayla
    ]

    React.useEffect(() => {
        getUserDetails().then(({ data }) => {
            console.log(data)
            setUser(data)
            const getAdmin = admins.includes(data.uid) ? true : false;
            const getMED = med.includes(data.uid) ? true : false;
            setAdmin(getAdmin)
            setMED(getMED)
            setLoading(false);
            return getBusinesses();
        }).then(({ data}) => {
            console.log(data)
            setBusinesses(data)
        }).catch((err) => {
            console.log(err)
            history.push('/');
            setLoading(false);
        })
    }, [])
    
    return !loading && (
        <div style={{ paddingTop: 20, paddingLeft: 20}}>
            <AdminButton isAdmin={isAdmin} /> <MEDButton isMED={isMED} />
            <div style={{ paddingTop: 10 }}>
                <h1>Welcome to the business menu! A list of businesses which you own is below, with a link to the dashboard of each</h1>
                <br/>
                <MenuComponent businesses={businesses}/>
            </div>
        </div>
    );
}