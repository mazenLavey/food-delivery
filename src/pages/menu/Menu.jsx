import React from 'react';
import MenuCSS from './Menu.module.css';
import MenuFilter from './MenuFilter';
import MenuItems from './MenuItems';


const Menu = ()=>{

    return (
        <main className={`${MenuCSS.section} container`}>
            <h1>Menu</h1>
            <MenuFilter />
            <MenuItems />
        </main>
    );
};

export default React.memo(Menu);