// function sorting products by categories inside 'categories' data structure:
export const categoriesCalculator = (productsData) => {
    let categories = {};
    for (const product of productsData) {
        if (!categories[product.category]) {
            categories[product.category] = { totalValue: 0 };
        }
        categories[product.category].totalValue += (product.price);
    }
    return categories;
}