import axios from "axios";
import { useState } from "react";

import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from 'react';


const BASE_URL = 'http://localhost:5001';

function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <RoutesList />

      </BrowserRouter>


    </div>
  );
}

export default App;
