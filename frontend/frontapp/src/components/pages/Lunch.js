import React from 'react';
import RouteHeader from '../widgets/routeheader';
import MiniDashboard from '../ui/MiniDashboard';

const Lunch = () => {
    return (
        <div>
            <RouteHeader title="Lunch" />
            <MiniDashboard category= 'lunch' />
        </div>
    )

}

export default Lunch;