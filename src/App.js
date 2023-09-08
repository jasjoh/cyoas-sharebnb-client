import { BrowserRouter } from "react-router-dom";
import RoutesList from './RoutesList'
import Navigation from './Navigation'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
