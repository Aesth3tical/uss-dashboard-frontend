import axios from 'axios';

export function getUserDetails() {
    return axios.get('http://ussapi.ga:3001/api/auth', {
        withCredentials: true
    })
}

export function getBusinesses() {
    return axios.get('http://ussapi.ga:3001/api/discord/businesses', {
        withCredentials: true
    })
}

export function getBusinessConfig(bid) {
    return axios.get(`http://ussapi.ga:3001/api/discord/businesses/${bid}/config`, {
        withCredentials: true
    })
}

export function addEmployee(bid, employee, ownerID) {
    if (employee.length !== 18 || typeof(employee) !== "string") return 'Invalid employee userID';
    if (ownerID.length !== 18 || typeof(employee) !== "string") return 'Invalid ownerID';
    if (String(bid).length > 10 || typeof(bid) !== "number") return 'Invalid businessID';

    return axios.put(`http://ussapi.ga:3001/api/discord/businesses/${ownerID}/${bid}/employees`, {
        employee
    }, {
        withCredentials: true
    })
}