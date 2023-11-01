import axios from "axios";

export const addItem = (product) => {
    return ({
        type: "CART_ADD",
        payload: { product }
    });
};

export function decrementItem(id) {
    return {
        type: "CART_DECREMENT",
        payload: id,
    };
}

export function deleteItem(id) {
    return {
        type: "CART_DELETE",
        payload: id,
    };
}

export const setDiscount = (hasDiscount) => {
    return {
        type: "SET_DISCOUNT",
        payload: hasDiscount
    };
};

export const resetAndShowModal = () => {
    return {
        type: "RESET_AND_SHOW_MODAL",
    };
};

export const toggleModal = (isOpen) => {
    return {
        type: "TOGGLE_MODAL",
        payload: isOpen
    };
};

export const createOrder = (phoneNumber) => {
    return dispatch => {
        axios.post("http://localhost:3333/order/send", { phone: phoneNumber })
            .then(response => {
                const { data } = response;
                if (data.status === "OK") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    dispatch(resetAndShowModal());
                    dispatch(toggleModal(true));
                } else {
                    console.error(data.message);
                }
            })
            .catch(error => {
                console.error("Network error:", error);
            });
    };
};