import React from 'react';
import RouteHeader from '../widgets/routeheader';
import MiniDashboard from '../ui/MiniDashboard';

const Dinner = () => {
    return (
        <div>
            <RouteHeader title="Dinner" />
            <MiniDashboard category= 'dinner' />
        </div>
    )

}

export default Dinner;