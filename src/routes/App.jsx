import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from '../containers/Layout.jsx';
import '../styles/Global.css';
// import '../styles/App.css';
import Home from '../pages/Home.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path='/' element={<Home/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
