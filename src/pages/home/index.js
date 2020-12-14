import React from 'react';
import { connect } from 'react-redux';
import { Button } from "@chakra-ui/react";

import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div class="container">
            <p>Home</p>
            <p>Name from redux : {props.addName}</p>
            <Button>
                <Link to="fillform">Register</Link>
            </Button>
        </div>
    );
};

const mapStateToProps = state => (
    {
        addName: state.addDetailsReducer.name,
    }
);
export default connect(mapStateToProps)(Home);