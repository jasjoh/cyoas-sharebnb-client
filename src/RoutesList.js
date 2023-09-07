import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import {useContext} from "react";
import userContext from "./userContext";
import Homepage from "./Homepage";


/** */
function RoutesList({ login, signup, update }){


  return (
    <div className='RoutesList'>

      <Routes>
        <Route path='/' element={<Homepage /> }></Route>
      </Routes>



    </div>


  )

}