import React, { useContext } from "react";
import ProductCard from 'components/productCard/ProductCard';
import { MenuContext } from 'context/MenuContext';
import MenuItemsCSS from './MenuItems.module.css';
import CardSkeletonCSS from './CardSkeleton';

const MenuItems = () => {
    const { menuItems, isLoading, filterMenu } = useContext(MenuContext);

    function renderMenuItems() {
        if (filterMenu && filterMenu !== 'all') {
            const menuElements = menuItems.filter(el => el.category === filterMenu).map(el => <ProductCard key={el.id} data={el} />);

            return menuElements;
        };

        const menuElements = menuItems?.map(el => <ProductCard key={el.id} data={el} />);
        
        return menuElements;
    }

    return (
        <div className={MenuItemsCSS.wrapper}>
            {isLoading ?
                <CardSkeletonCSS cards={6} />
                :
                renderMenuItems()
            }
        </div>
    )
};

export default React.memo(MenuItems);