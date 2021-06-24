import { Card } from 'react-bootstrap';
import React from 'react';

const Testimonial = ({ testimonial: { name, img, address , description } }) => {

    return (

        <Card className="my-4">

            <Card.Img variant="top" src={img} width="60" />

            <Card.Body className="text-center">

                <h5>{name} <br />

                    <span>{address}</span>

                </h5>

                <Card.Text>{description.slice(0, 165)}</Card.Text>
                
            </Card.Body>
        </Card>
    );
};

export default Testimonial;