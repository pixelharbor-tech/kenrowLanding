import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom"
function App() {
   const navigate = useNavigate();

  useEffect(() => {
    const currentHostname = window.location.hostname;

    if (currentHostname === 'www.localhost:3000'){
      navigate('/')
    }
  }, [navigate])
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={'Hello world'} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
