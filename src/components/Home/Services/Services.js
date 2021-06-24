import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import axios from 'axios';
import toast from 'react-hot-toast';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import './Services.css';

const Services = () => {

    const [loading, setLoading] = useState(true);
    const [services, setServices] = useState([]);

    useEffect(() => {

        axios.get('https://gerez-server.herokuapp.com/services')
            .then(res => {
                setServices(res.data);
                setLoading(false);
            })

            .catch(error => toast.error(error.message))
    }, [])

    return (

        <section className="text-center py-5" id="services">

            <h5>What We Do</h5>

            <h1>Services We Provide</h1>

            <Row className="justify-content-center pt-5 mx-auto mt-md-5">

                {
                    loading ? <Spinner animation="border" variant="danger" /> :
                        services.map(service => <ServiceDetail key={service._id} service={service} />)
                }
                
            </Row>
            
        </section>
    );
};

export default Services;