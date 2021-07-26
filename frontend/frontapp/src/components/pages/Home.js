import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RouteHeader from '../widgets/routeheader';
import Dashboard from "../ui/Dashboard";
import FreshNewRecipes from '../ui/FreshNewRecipes';

const Home = () => {
  // useEffect(() => {
  //   fetchFresh();
  // }, []);

  // useEffect(() => {
  //   fetchPopular();
  // },[])

  // const [freshItems, setFreshItems] = useState([]);
  // const [popularItems, setPopularItems] = useState([]);

  // const fetchFresh = async () => {
  //   await axios.get('/mainpage/fresh')
  //   .then((response) => {
  //     const data = response.data;
  //     console.log('New items', data);
  //     setFreshItems(data);
  //   })
  // };

  // const fetchPopular = async () => {
  //   await axios.get('/mainpage/popular')
  //   .then((response) => {
  //     const data = response.data;
  //     console.log(data);
  //     setPopularItems(data);
  //   })
  // };

  


  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Home;