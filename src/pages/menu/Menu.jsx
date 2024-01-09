import { useContext } from 'react';
import { MenuContext } from 'context/MenuContext';
import MenuCSS from './Menu.module.css';
import MenuFilter from './components/MenuFilter/MenuFilter';
import MenuItems from './components/MenuItems/MenuItems';
import MenuSkeleton from './components/MenuSkeleton/MenuSkeleton';

const Menu = () => {
    const { menuItems, filterMenu, isLoading } = useContext(MenuContext);

    return (
        <main className={`${MenuCSS.section} container`}>
            { isLoading ?
                <MenuSkeleton />
                :
                <>
                    <MenuFilter />
                    <MenuItems menuItems={menuItems} filterMenu={filterMenu}/>
                </>
            }
        </main>
    );
};

export default Menu;