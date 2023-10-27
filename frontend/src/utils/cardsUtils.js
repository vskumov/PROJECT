export const goToCategory = (navigate, categoryId) => {
    navigate(`/categories/${categoryId}`);
};

export const goToProduct = (navigate, id) => {
    navigate(`/products/${id}`);
};

export const handleKeyPress = (event, navigate, categoryId, id) => {
    if (event.key === "Enter" || event.key === " ") {

        console.log(categoryId);
        categoryId !== undefined
            ? goToCategory(navigate, categoryId)
            : goToProduct(navigate, id)
    }
};