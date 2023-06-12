import MenuCSS from './Menu.module.css';
import MenuFilter from './components/MenuFilter/MenuFilter';
import MenuItems from './components/MenuItems/MenuItems';

const Menu = () => {
    return (
        <main className={`${MenuCSS.section} container`}>
            <h1>Menu</h1>
            <MenuFilter />
            <MenuItems />
        </main>
    );
};

export default Menu;