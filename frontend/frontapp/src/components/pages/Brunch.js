import React from 'react';
import RouteHeader from '../widgets/routeheader';
import MiniDashboard from '../ui/MiniDashboard';

const Brunch = () => {
    return (
        <div>
            <RouteHeader title="Brunch" />
            <MiniDashboard category= 'brunch' />
        </div>
    )
}

export default Brunch;