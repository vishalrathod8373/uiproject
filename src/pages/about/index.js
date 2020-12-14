import React from 'react'
import { useRouteMatch, useParams } from "react-router-dom";

export default function About() {
    const { firstName } = useParams();
    const match = useRouteMatch('smith');
    const showMatch = match && match.isExact;
   
    return (
        <div>
            <p>{firstName}</p>
            {showMatch && <button>show button</button>}
            <p>About</p>
        </div>
    )
};
