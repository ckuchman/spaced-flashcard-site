import React from 'react';
import { Container, Button } from "react-bootstrap";

export default function RateCard(props) {

    function handleClick(rating) {
        console.log(`in ratecard handleclick, rating i was passed is ${rating}`);
        props.handleRate(rating)
    }

    return(
        <>
            <Container>
                <Button onClick={alert("hey man i clicked easy")}>Easy</Button>
                <Button onClick={handleClick("medium")}>Medium</Button>
                <Button onClick={handleClick("hard")}>Hard</Button>
            </Container>
        </>
        )
}