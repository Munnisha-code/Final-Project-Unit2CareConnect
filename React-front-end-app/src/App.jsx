
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import RegisterForm from './pages/RegisterForm';
import TrustedContactForm from './pages/TrustedContactForm';
import OneClickSendMessage from './pages/OneClickSendMessage';
import ThankYou from './pages/Thankyou';
import LiveLocation from './pages/LiveLocation';


function ProtectedRoute({ children }) {
    const userId = localStorage.getItem("userId");

    if (!userId) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

function App() {
 
  return (
      <>
       < BrowserRouter basename="/Final-Project-Unit1-CareConnect">

          <Header/>

             <Routes> 

                <Route path ="/" element = {<Home/>} />
                <Route path ="/about" element = {<About/>} />
                <Route path ="/login" element = {<Login/>}/>
                <Route path ="/registerForm" element = {<RegisterForm />} />
                <Route path ="/trusted-contacts" element = {<TrustedContactForm/>} />
                <Route path = "/one-click-send-message" element = {<OneClickSendMessage/>} />
                <Route path = "/thank-you" element = {<ThankYou/>} />
                <Route path = "/live-location" element ={<ProtectedRoute> <LiveLocation/> </ProtectedRoute>} />

            </Routes>
            
          <Footer/>

       </BrowserRouter>
      </>
  );
}

export default App;
