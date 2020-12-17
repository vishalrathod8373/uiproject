import phoneOne from '../../../assets/images/phoneOne.jfif';
import phoneTwo from '../../../assets/images/phoneTwo.jfif';
import tabletOne from '../../../assets/images/tabletOne.jfif';
import tabletTwo from '../../../assets/images/tabletTwo.jfif';
import { ADD_TO_CART, ADD_QUANTITY, REMOVE_ITEM, SUB_QUANTITY } from '../../../actionTypes';

const initialState = {
    items: [
        { id: 1, title: "samsung", desc: "M21 series", price: 210, img: phoneOne },
        { id: 2, title: "motorola", desc: "Motorola series", price: 180, img: phoneTwo },
        { id: 3, title: "tablet", desc: "Large display", price: 250, img: tabletOne },
        { id: 4, title: "tablet E2", desc: "medium display", price: 290, img: tabletTwo },
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                //check if the action id exists in the addedItems
                let existed_item = state.addedItems.find(item => action.id === item.id)
                if (existed_item) {
                    addedItem.quantity = addedItem.quantity + 1
                    return {
                        ...state,
                        total: state.total + addedItem.price
                    }
                }
                else {
                    addedItem.quantity = 1;
                    //calculating the total
                    let newTotal = state.total + addedItem.price
                    return {
                        ...state,
                        addedItems: [...state.addedItems, addedItem],
                        total: newTotal
                    }
                }
            };
        case REMOVE_ITEM:
            {
                let itemToRemove = state.addedItems.find(item => action.id === item.id)
                let new_items = state.addedItems.filter(item => action.id !== item.id)

                //calculating the total
                let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            };
        case ADD_QUANTITY:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                addedItem.quantity = addedItem.quantity + 1
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    total: newTotal
                }
            };
        case SUB_QUANTITY:
            {
                let addedItem = state.items.find(item => item.id === action.id)
                //if the qt == 0 then it should be removed
                if (addedItem.quantity === 1) {
                    let new_items = state.addedItems.filter(item => item.id !== action.id)
                    let newTotal = state.total - addedItem.price
                    return {
                        ...state,
                        addedItems: new_items,
                        total: newTotal
                    }
                }
                else {
                    addedItem.quantity = addedItem.quantity - 1
                    let newTotal = state.total - addedItem.price
                    return {
                        ...state,
                        total: newTotal
                    }
                }
            };
        default: return state
    }
}

export default cartReducer;