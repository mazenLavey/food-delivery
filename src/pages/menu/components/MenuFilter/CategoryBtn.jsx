import React, { useContext } from "react";
import { MenuContext } from 'context/MenuContext';

const CategoryBtn = ({ name, ChangeCategory }) => {
    const { filterMenu } = useContext(MenuContext);

    return (
        <span className={filterMenu === name ? 'active' : null} data-category={name} onClick={ChangeCategory}>{name}</span>
    );
};

export default CategoryBtn;