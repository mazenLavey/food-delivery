import React, { useState, createContext, useEffect } from 'react';
import useFetch from 'hooks/useFetch';
import sumTotal from 'utils/sumTotal';
import priceFormatter from 'utils/priceFormatter';

const MenuDataContext = createContext();

const MenuDataContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [numItemsInCart, setNumItemsInCart] = useState(0);
    const [filterItems, setFilterItems] = useState('');
    const [newItemToCart, setNewItemToCart] = useState(0);
    const [totalPrice, setTotalPrice] = useState("");
    const { readyData, dataIsLoaded, dataError } = useFetch("menu-item");

    useEffect(() => {
        setCartItems(readyData);
    }, [readyData])

    useEffect(() => {
        function getPrice(arrayOfElements) {
            const sum = sumTotal(arrayOfElements);
            const price = priceFormatter(sum);
            return price;
        }

        setTotalPrice(() => getPrice(cartItems));
    }, [cartItems])


    function addToCart(itemId) {
        if (dataIsLoaded) {
            let updateCart = cartItems.map(el => {
                return el.id === itemId ? { ...el, orders: el.orders + 1 } : el;
            });
            setCartItems(updateCart);
            setNumItemsInCart(oldValue => oldValue + 1);
        };
    };

    function removeFromCart(itemId) {
        if (dataIsLoaded) {
            let updateCart = cartItems.map(el => {
                return el.id === itemId ? { ...el, orders: el.orders - 1 } : el;
            });
            setCartItems(updateCart);
            setNumItemsInCart(oldValue => oldValue - 1);
        };
    };

    function emptyCart() {
        if (dataIsLoaded) {
            let updateCart = cartItems.map(el => {
                return el.orders > 0 ? { ...el, orders: 0 } : el;
            });
            setCartItems(updateCart);
            setNumItemsInCart(0);
            setNewItemToCart(0);
        };
    };

    function useMenuFilter(itemCategory) {
        if (dataIsLoaded) {
            setFilterItems(itemCategory);
        }
    };

    function newItemIsAdded() {
        if (dataIsLoaded) {
            setNewItemToCart(oldValue => oldValue += 1);
        };
    };

    return (
        <MenuDataContext.Provider value={{ cartItems, dataIsLoaded, numItemsInCart, filterItems, newItemToCart, dataError, totalPrice, addToCart, removeFromCart, emptyCart, useMenuFilter, newItemIsAdded }}>
            {props.children}
        </MenuDataContext.Provider>
    );
};

export { MenuDataContextProvider, MenuDataContext }