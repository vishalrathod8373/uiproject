import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

import { addToCart } from '../cart/cartActions';

function HomePageOfShopping(props) {

    const handleClick = (id) => {
        props.addToCart(id);
    }
    let itemList = props.items.map(item => {
        return (
            <div class="card" style={{ width: '22rem' }}>
                <img class="card-img-top" src={item.img} alt="Card image cap" />
                <div class="card-body">
                    <span>{item.title}</span>
                    <button class="float-right" onClick={() => { handleClick(item.id) }}>
                        <Fab color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                    </button>
                </div>
                <div class="card-body">
                    <p>{item.title}</p>
                    <p><b>Price: {item.price}$</b></p>
                </div>
            </div>
        )
    }
    )
    return (
        <div className="container">
            <h3 className="center">Our items</h3>
            <Link to="cart">
                <SvgIcon class="float-right" style={{ height: 30, width: 30 }}>
                    <path fill="#000000" d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15
                  ,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 
                  20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,
                  0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,
                  18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,
                  6H6.14L8.5,11H16Z" />
                </SvgIcon>
            </Link>
            <div className="box" style={{ width: '30%' }}> 
                {itemList}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCart(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePageOfShopping);