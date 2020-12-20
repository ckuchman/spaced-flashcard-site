import React, { useState } from 'react';
import { Button, Container, InputGroup } from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import CardDisplay from './card-display';
import RateCard from './rate-card';

const sampleDeck = [
    {question: "2+2=", answer: "4"},
    {question: "2+3=", answer: "5"},
    {question: "2+4=", answer: "6"},
    {question: "2+5=", answer: "7"},
    {question: "2+6=", answer: "8"},
    {question: "2+7=", answer: "9"},
    {question: "2+8=", answer: "10"},

]

/* props should contain either the deck card data itself or the deck_id */
export default function RunDeck(props) {
    const [cardIndex, setCardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [rating, setRating] = useState("");

    function handleClick(event) {
        console.log("in the click handler now");
        setIsFlipped(!isFlipped);
    }

    console.log(`in deckrun function, sample deck is ${sampleDeck}`)

    let cards = []
    sampleDeck.forEach((card) => {
        cards.push(<CardDisplay question={card.question} answer={card.answer} handleClick={handleClick} />)
    })

    function handleRate(rating) {
        console.log(`in the rate function, i was passed ${rating}`)
        setRating(rating);
        if (cardIndex !== sampleDeck.length - 1) {
            setCardIndex(cardIndex + 1);
        }


    }


    // /* 3 buttons.. easy medium hard */
    // const rateCard = 
    //     <Container style={{display: "flex", alignContent: "center", justifyContent: "center"}}>
    //         <Button style={{flex: "1"}} onclick={handleRate("easy")}>Easy</Button>
    //         <Button style={{flex: "1"}} onclick={handleRate("medium")}>Medium</Button>
    //         <Button style={{flex: "1"}} onclick={handleRate("hard")}>Hard</Button>
    //     </Container>
    // }

    return(
        <>
        {cards[cardIndex]}
        <RateCard handleRate={handleRate}/>
        </>
        )
}