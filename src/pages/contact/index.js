import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Contact() {
    const history = useHistory();
    const handleClick = (firstName) => {
        history.push(`/about/${firstName}`);
    }
    const firstName = "smith"
    return (
        <div className="container">
            <p>contact</p>
            <Button onClick={() => handleClick(firstName)}>To {firstName}</Button>
        </div>
    );
};
export default Contact;
