import React, { useState, createContext, useEffect, useContext } from 'react';
import sumTotal from 'utils/sumTotal';
import priceFormatter from 'utils/priceFormatter';
import { GlobalContext } from './GlobalContext';
import { ORDER_TYPE } from 'constants/order';

const MenuContext = createContext();

const MenuProvider = (props) => {
    const { menuData } = useContext(GlobalContext);

    const [menuItems, setMenuItems] = useState([]);
    const [dishesCategories, setDishesCategories] = useState([]);
    const [numItemsInCart, setNumItemsInCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState("");
    const [orderType, setOrderType] = useState(ORDER_TYPE.DELIVERY);

    useEffect(() => {
        function findCategory(menu) {
            let list = [];
            menu.map(el => list.push(el.category));
            return Array.from(new Set(list))
        };

        if (menuData) {
            const dishesCategories = findCategory(menuData)

            setMenuItems(menuData);
            setDishesCategories(dishesCategories);
        }

    }, [menuData]);


    useEffect(() => {
        function getPrice(arrayOfElements) {
            const sum = sumTotal(arrayOfElements);
            const price = priceFormatter(sum);
            return price;
        }

        setTotalPrice(() => getPrice(menuItems));
    }, [menuItems])

    function addToCart(itemId) {
        if (!menuItems) return;

        let updateCart = menuItems.map(el => {
            return el.id === itemId ? { ...el, orders: el.orders + 1 } : el;
        });
        setMenuItems(updateCart);
        setNumItemsInCart(oldValue => oldValue + 1);
    };

    function removeFromCart(itemId) {
        if (!menuItems) return;

        let updateCart = menuItems.map(el => {
            return el.id === itemId ? { ...el, orders: el.orders - 1 } : el;
        });
        setMenuItems(updateCart);
        setNumItemsInCart(oldValue => oldValue - 1);
    };

    function emptyCart() {
        if (!menuItems) return;

        let updateCart = menuItems.map(el => {
            return el.orders > 0 ? { ...el, orders: 0 } : el;
        });
        setMenuItems(updateCart);
        setNumItemsInCart(0);
    };

    return (
        <MenuContext.Provider value={{ 
            menuItems,
            dishesCategories,
            numItemsInCart, 
            totalPrice, 
            addToCart, 
            removeFromCart, 
            emptyCart,
            setOrderType,
            orderType
        }}>
            {props.children}
        </MenuContext.Provider>
    );
};

export { MenuProvider, MenuContext }