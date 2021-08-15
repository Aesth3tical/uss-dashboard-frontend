import { Button } from '@chakra-ui/react';
import React from 'react';
// import { MenuComponent } from '../../components';
import { getUserDetails } from '../../../utils/api';

export function AdminInvites({ history }) {
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

    const goToAdmin = () => window.location.href = "http://ussapi.ga/home/admin";

    const openInvite = (url) => {
        const newTab = window.open(url, '_blank', 'noopener', 'noreferrer')
        if (newTab) newTab.opener = null
    }

    const invites = {
        main: 'https://discord.com/oauth2/authorize?client_id=841675036716695573&guild_id=841666956384796762&permissions=8&scope=bot%20applications.commands',
        congress: 'https://discord.com/oauth2/authorize?client_id=841675036716695573&guild_id=843560519982252093&permissions=8&scope=bot%20applications.commands',
        white_house: 'https://discord.com/oauth2/authorize?client_id=841675036716695573&guild_id=857052835488727070&permissions=8&scope=bot%20applications.commands',
        courts: 'https://discord.com/oauth2/authorize?client_id=841675036716695573&guild_id=864877276135161926&permissions=8&scope=bot%20applications.commands',
        business: 'https://discord.com/oauth2/authorize?client_id=841675036716695573&guild_id=855464940986695681&permissions=8&scope=bot%20applications.commands'
    }

    return !loading && (
        <div style={{ paddingTop: 20, paddingLeft: 20 }}>
            <Button onClick={goToAdmin} colorScheme="blue" size="sm" fontSize="12" children="< Back to Admin Portal" />
            <div style={{ paddingTop: 10 }}>
                <h1 style={{ paddingBottom: 10 }}>Admin invites</h1>
                <li style={{ paddingBottom: 5 }}><Button onClick={() => openInvite(invites.main)} colorScheme="blue" size="sm" fontSize="12" children="Invite to Main Server" target="_blank" /></li>
                <li style={{ paddingBottom: 5 }}><Button onClick={() => openInvite(invites.congress)} colorScheme="blue" size="sm" fontSize="12" children="Invite to Congressional Server" target="_blank" /></li>
                <li style={{ paddingBottom: 5 }}><Button onClick={() => openInvite(invites.white_house)} colorScheme="blue" size="sm" fontSize="12" children="Invite to White House Server" target="_blank" /></li>
                <li style={{ paddingBottom: 5 }}><Button onClick={() => openInvite(invites.courts)} colorScheme="blue" size="sm" fontSize="12" children="Invite to Courts Server" target="_blank" /></li>
                <li style={{ paddingBottom: 5 }}><Button onClick={() => openInvite(invites.business)} colorScheme="blue" size="sm" fontSize="12" children="Invite to Businesses Server" target="_blank" /></li>
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