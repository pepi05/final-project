import React from 'react';
import RouteHeader from '../widgets/routeheader';
import MiniDashboard from '../ui/MiniDashboard';

const Breakfast = () => {
    return (
        <div>
            <RouteHeader title="Breakfast" />
            <MiniDashboard category= 'breakfast' />
        </div>
    )
}

export default Breakfast;