import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RouteHeader from '../widgets/routeheader';
import Dashboard from "../ui/Dashboard";
import FreshNewRecipes from '../ui/FreshNewRecipes';
import { Component } from 'react';

const Home = (props) => {

  // useEffect(() => {
  //   (
  //     async () => {
  //       await fetch('/auth/user', {
  //         headers: {'Content-Type': 'application/json'},
  //         credentials: 'include',
  //       })
  //     }
  //   )();
  // },[])





  return (
    <div>
      <Dashboard title1="Fresh & New" title2="Most Popular Recipes" />

      {props.user ? 'Hi' +  props.user.first_name + props.user.user_id : 'You are not authenticated'}
      
    </div>
  );
};

export default Home;