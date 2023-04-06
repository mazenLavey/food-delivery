
function sumTotal(elementInMenu) {
    let sumPrice = 0;
    if (Array.isArray(elementInMenu)) {
        elementInMenu.map(el => {
            return sumPrice += el.price * el.orders;
        });
    } else {
        return
    }
    return sumPrice
}

export default sumTotal;