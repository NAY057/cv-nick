import React from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../pages/Home.jsx'

const Layout = ({children}) => {
    return(
        <div>
            <Header/>
            <Home/>
            {/* {children} */}
            <Footer/>
        </div>
    )
}

export default Layout