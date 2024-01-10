import { useContext } from 'react';
import { MenuContext } from 'context/MenuContext';
import MenuCSS from './Menu.module.css';
import MenuFilter from './components/MenuFilter/MenuFilter';
import MenuItems from './components/MenuItems/MenuItems';
import MenuSkeleton from './components/MenuSkeleton/MenuSkeleton';
import { useSearchParams } from 'react-router-dom';

const Menu = () => {
    const { menuItems, dishesCategories, isLoading } = useContext(MenuContext);
    const [searchParams] = useSearchParams();
    const searchCategory = searchParams.get('category')?? '';

    return (
        <main className={`${MenuCSS.section} container`}>
            { isLoading ?
                <MenuSkeleton />
                :
                <>
                    <MenuFilter menuFilter={searchCategory} dishesCategories={dishesCategories} />
                    <MenuItems menuItems={menuItems} menuFilter={searchCategory}/>
                </>
            }
        </main>
    );
};

export default Menu;