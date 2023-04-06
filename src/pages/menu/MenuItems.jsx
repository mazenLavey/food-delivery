import React, {useContext} from "react";
import ProductCard from '../../components/ProductCard';
import {MenuDataContext} from '../../context/MenuDataContext';
import MenuItemsCSS from './MenuItems.module.css';
import CardSkeletonCSS from './CardSkeleton';

const MenuItems = ()=>{
    const {cartItems, dataIsLoaded, filterItems} = useContext(MenuDataContext);

    function renderMenuItems() {
        let menuElements;
        if (filterItems && filterItems !== 'all') {
            menuElements = cartItems.filter(el => el.category === filterItems).map(el => {
                return <ProductCard key={el.id} data={el} />
            });
        } else {
            menuElements = cartItems.map(el => {
                return <ProductCard key={el.id} data={el} />
            });
        }
        return menuElements
    }

    return (
        <div className={MenuItemsCSS.wrapper}>
            {dataIsLoaded?
                renderMenuItems()
                :
                <CardSkeletonCSS cards={6}/>
            }
        </div>
    )
};

export default React.memo(MenuItems);