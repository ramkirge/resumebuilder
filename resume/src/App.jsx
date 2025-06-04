import React from 'react'

import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import Nav from './components/Nav.jsx'
import Header from './components/Header'
import Feature from './components/Feature'
import Footer from './components/Footer'
import Main from './components/Main'
import Account from './components/Account'
import Example from './components/Example'
import Tempalte from './components/Template'
import Resume from './components/Resume'

import Signup from './components/Signup'
import Protected from './components/Protected'


import { AuthProvider } from './context/useAuth.jsx';

import Login from './routes/login';
import Menu from './routes/menu';
import Register from './routes/register';

import Layout from './components/layout.jsx';
import PrivateRoute from './components/private_route';




{/*import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import AccountPage from './pages/Account';
import HomePage from './pages/Home';*/}


function App() {


  
  const token = localStorage.getItem('token');

  return (

  <BrowserRouter>
   <AuthProvider>
  
    
      <div className=''>

        <Nav/>
        <Routes>
          <Route path="/" element={

            <>

              <Header/>
              <Feature/>
              <Main/>

            </>
           } />

           <Route path="/template" element={<Tempalte/>} /> 
           <Route path="/editor/:templateId" element={<PrivateRoute><Resume /></PrivateRoute>} />
           <Route path="/example" element={<Example />} />
           
           <Route element={<Layout><Login /></Layout>} path='/login' /> 
            <Route element={<Layout><Register /></Layout>} path='/register' /> 
           <Route path="/signup" element={<Signup />} />
        
           <Route path="/protected" element={<Protected />} />
           <Route element={<PrivateRoute><Layout><Menu /></Layout></PrivateRoute>} path='/account' /> 

          
          </Routes>
        <Footer/>


      </div>

      </AuthProvider>
    
    </BrowserRouter>

    
  )
}

export default App