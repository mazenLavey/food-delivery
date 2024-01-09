import ProductCard from 'components/productCard/ProductCard';
import MenuItemsCSS from './MenuItems.module.css';

const MenuItems = ({menuItems, filterMenu}) => {

    function renderMenuItems() {
        if (filterMenu && filterMenu !== 'all') {
            const menuElements = menuItems?.filter(el => el.category === filterMenu).map(el => <ProductCard key={el.id} data={el} />);

            return menuElements;
        };

        const menuElements = menuItems?.map(el => <ProductCard key={el.id} data={el} />);
        
        return menuElements;
    }

    return (
        <div className={MenuItemsCSS.wrapper}>
            { renderMenuItems() }
        </div>
    )
};

export default MenuItems;