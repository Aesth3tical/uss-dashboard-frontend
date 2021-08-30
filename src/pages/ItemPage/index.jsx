import React from 'react';
import { getBusinessConfig, getUserDetails } from '../../utils/api';
import { AddEmployee } from '../../components';
import { addEmployee } from '../../utils/api';
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export function ItemPage({ history, match }) {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [employee, setEmployee] = React.useState('Input employee\'s Discord userID here')
    const [config, setConfig] = React.useState({});

    React.useEffect(() => {
        getUserDetails().then(({ data }) => {
            console.log(data)
            setUser(data)
            return getBusinessConfig(match.params.id);
        }).then(({ data }) => {
            console.log(data)
            setConfig(data)
            setLoading(false)
        }).catch((err) => {
            console.log(err)
            history.push('/');
            setLoading(false);
        })
    }, [])
    
    const addEmployeeParent = async (bid, employee, ownerID) => {
        try {
            const add = await addEmployee(bid, employee, ownerID)
            console.log(add)
        } catch (err) {
            console.log(err)
        }
    }

    const toHome = () => window.location.href = 'http://ussapi.ga/home';

    return !loading && (
        <div style={{ paddingLeft: 20, paddingTop: 20 }}>
            <Button onClick={toHome} colorScheme="blue" size="sm" fontSize="12" children="< Return to Home"/>
            <h1 style={{ paddingTop: 10 }}>Dashboard - {match.params.id}</h1>
            <div>
                <AddEmployee user={user} config={config} addEmployee={addEmployeeParent} />
            </div>
        </div>
    );
}