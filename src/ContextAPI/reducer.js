export const initialState = {
  basket: [],
  user: null,

};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, amount) => amount.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // Need to find the index and then remove it
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //Now copy the basket to a new variable
      let newBasket = [...state.basket];

      //Now if there is an index remove it from the copied basket or send a error message
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      // And finally set the basket to the value of the copied basket
      return {
        ...state,
        basket: newBasket,
      };

      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: [],
        }

      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
    default:
      return state;
  }
};

export default reducer;
