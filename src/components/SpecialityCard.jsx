import React, {useContext} from 'react';
import SpecialityCardCSS from './SpecialityCard.module.css';
import {Link} from 'react-router-dom';
import {MenuDataContext} from '../context/MenuDataContext';

const SpecialityCard = ({img, title, category})=>{
    const {useMenuFilter} = useContext(MenuDataContext);

    function ChangeCategory() {
        useMenuFilter(category);
    };

    return (
        <Link to="/menu" className={SpecialityCardCSS.card} onClick={ChangeCategory}>
            <img src={img.src} alt={img.alt} />
            <p>{title}</p>
        </Link>
    )
};

export default SpecialityCard;