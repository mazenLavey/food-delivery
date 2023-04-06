import React, {useContext} from "react";
import {MenuDataContext} from '../../context/MenuDataContext';

const CategoryBtn = ({name, ChangeCategory})=>{
    const {filterItems} = useContext(MenuDataContext);

    return (
        <>  
            <span className={filterItems === name? 'active' : null}  data-category={name} onClick={ChangeCategory}>{name}</span>
        </>
    );
};

export default CategoryBtn;