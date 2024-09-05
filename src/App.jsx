// App.jsx
import './App.css';
import { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import { Auth0Provider } from "@auth0/auth0-react";
import Navbar from './Components/Navbar'; 
import { RoleProvider } from './context/RoleContext'; 
import SelectRole from './Pages/select-role';

const domain = "dev-dmgurz6ijryv8xgt.us.auth0.com";
const clientId = "kqW4knSd8naEoFFG9UD5qRiOVVkiSyhU"; 

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: window.location.origin}}
    >
      <RoleProvider> 
        <Navbar />
        <Routes>
          <Route path="/select-role" element={<SelectRole />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </RoleProvider>
    </Auth0Provider>
  );
}

export default App;
