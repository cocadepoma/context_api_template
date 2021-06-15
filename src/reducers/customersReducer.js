
export const customersReducer = (state, action) => {

    console.log(state, action)
    switch (action.type) {

        case 'ADD_CUSTOMER':
            return {
                customers: [...state.customers, action.payload]
            }

        default:
            return state;
    }

}