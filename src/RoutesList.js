import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';
import FindProperty from './FindProperty'
import ListPropertyForm from './ListPropertyForm';


/** */
function RoutesList({ login, signup, update }){


  return (
    <div className='RoutesList'>

      <Routes>
        <Route path='/properties' element={<FindProperty /> }></Route>
        <Route path='/properties/list' element={<ListPropertyForm /> }></Route>
        <Route path='*' element={<Navigate to='/properties' /> }></Route>

      </Routes>

    </div>


  )

}

export default RoutesList;