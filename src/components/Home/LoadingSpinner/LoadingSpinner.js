import React from 'react';
import spinner from '../../../images/loadingSpinner.svg';
import { Image } from 'react-bootstrap';

const LoadingSpinner = () => {

    return (

        <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
            <Image src={spinner} />
        </section>

    );
};

export default LoadingSpinner;