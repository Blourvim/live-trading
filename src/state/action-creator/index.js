import * as actions from '../../constants/ActionTypes.js';

export const updateOrders = list => {
    return {
        type: actions.UPDATE_ORDERS,
        payload: list
    }
};
