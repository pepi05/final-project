import React from 'react';
import { useState, useEffect } from 'react';
import RouteHeader from '../widgets/routeheader';

import axios from 'axios';
import MiniDashboard from '../ui/MiniDashboard';


const Breakfast = () => {
    // useEffect(() => {
    //     fetchBreakfast();
    // }, []);

    // const [items, setItems] = useState([]);

    // const fetchBreakfast = async () => {
    //     await axios.get('/recipes/breakfast')
    //     .then((response) => {
    //         const data = response.data;
    //         console.log(data);
    //         setItems(data)
    //     })
    //     .catch(() => {
    //         alert('error fetching data...')
    //     })
    // }

    return (
        <div>
            <RouteHeader title="Breakfast" />
            <MiniDashboard category= 'breakfast' />
        </div>
    )
}

export default Breakfast;