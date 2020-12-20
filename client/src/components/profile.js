import React, { useState, useEffect } from 'react';

export default function Profile() {
    const [decks, setDecks] = useState([]);

    useEffect(() => {
        /* on component load, fetch user's decks from backend, add to state */
        alert("fetch user's decks");
        return;
    }, [])

    return(
        <>
        <h1>profile page... protected!</h1>
        </>
    )
}