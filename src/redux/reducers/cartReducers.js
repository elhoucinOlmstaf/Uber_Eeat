let defaultState = {
  selectedItems: { items: [], restaurantName: ''},
};

let cartReducers = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...state.selectedItems.items, action.payload],
        restaurantName: action.payload.restaurantName,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

export default cartReducers;
