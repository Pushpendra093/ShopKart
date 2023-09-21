import { Routes,BrowserRouter as Router,Route } from "react-router-dom";

import UserHome from "./CompanyWork/UserHome";
import MenuOption from "./CompanyWork/MenuOption";


function App() {
  return (
    <div>
        <Router>
          <Routes>
           <Route element={<UserHome/>} path="/userhome" />
            <Route element={<MenuOption/>} path="/menuoption" />
            
             </Routes>
        </Router>
    </div>
  )
}

export default App;
