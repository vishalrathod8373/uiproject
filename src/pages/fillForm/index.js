import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Button } from "@chakra-ui/react";
import firebase from "../../firebase";

import { addName, addMobileNumber } from './actions';
import "./style.css";

function FillForm(props) {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    const handleName = (eventName) => {
        setName(eventName.target.value);
        localStorage.setItem("localName", JSON.stringify(eventName.target.value));
    }
    const handleNumber = (addMobileNumber) => {
        setMobileNumber(addMobileNumber.target.value);
    }
    const setLocalName = localStorage.getItem("localName");
    const handleClick = () => {
        if (name.match(/[a-z]/)) {
            props.addOnNameClick(name);
            if (/^\d{10}$/.test(mobileNumber)) {
                props.addOnNumberClick(mobileNumber);
                firebase.collection("users").add({
                    mobilenumber: mobileNumber,
                    name: name
                })
            }
            else {
                window.alert("Invalid number, must be ten digits");
            }
        }
        else if (name === undefined || name === "") {
            window.alert("Name is required!")
        }
        else {
            window.alert("only alphabet allow in the name field.");
        }
    }
    return (
        <div class="container">
            <div class="container-fluid">
                <div class="col">
                    <p>Enter below details</p>
                    <div class="row">
                        <div class="div-space">
                            <Input placeholder="Enter name" size="sm" value={name} onChange={handleName} />
                        </div>
                    </div>
                    <div class="row">
                        <div class="div-space">
                            <Input placeholder="Enter mobile number" size="sm" value={mobileNumber} onChange={handleNumber} />
                        </div>
                    </div>
                    <Button onClick={handleClick}>submit</Button>
                    <p>Name from redux : {props.addName} {props.addMobileNumber}</p>
                    <p>Stored in local-storage :{setLocalName}</p>
                </div>
            </div>
        </div>
    );
};
const mapStateToProps = state => (
    {
        addName: state.addDetailsReducer.name,
        addMobileNumber: state.addDetailsReducer.mobileNumber
    }
);
const mapDispatchToProps = dispatch => {
    return {
        addOnNameClick: (setName) => dispatch(addName(setName)),
        addOnNumberClick: (setMobileNumber) => dispatch(addMobileNumber(setMobileNumber))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FillForm);
