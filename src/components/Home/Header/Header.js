import React from 'react';
import './Header.css';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';

const Header = () => {

    return (

        <section className="header-container">
            
            <NavBar />
            <Banner/>
            
        </section>
    );
};

export default Header;