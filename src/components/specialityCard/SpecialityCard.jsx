import React, { useContext } from 'react';
import SpecialityCardCSS from './SpecialityCard.module.css';
import { Link } from 'react-router-dom';
import { GlobalContext } from 'context/GlobalContext';

const SpecialityCard = ({ img, title, category }) => {
    const { useMenuFilter } = useContext(GlobalContext);

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