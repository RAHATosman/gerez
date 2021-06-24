import React from 'react';
import About from '../components/Home/About/About';
import ServicePricing from '../components/Home/ServicePricing/ServicePricing';
import Services from '../components/Home/Services/Services';
import Testimonials from '../components/Home/Testimonials/Testimonials';
import Contact from '../components/Home/Contact/Contact';
import Header from '../components/Home/Header/Header';
import Footer from '../components/Home/Footer/Footer';


const Home = () => {
    return (
        <main>
            <Header />
            <About />
            <Services />
            <ServicePricing />
            <Testimonials />
            <Contact />
            <Footer />
        </main>
    );
};

export default Home;