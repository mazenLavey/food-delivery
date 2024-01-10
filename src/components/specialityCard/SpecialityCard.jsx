import SpecialityCardCSS from './SpecialityCard.module.css';
import { useNavigate } from 'react-router-dom';
import routes from 'routes';

const SpecialityCard = ({ img, title, category }) => {
    const navigate = useNavigate();

    function ChangeCategory() {
        navigate(`${routes.menu}?category=${category}`);
    };

    return (
        <button className={SpecialityCardCSS.card} onClick={ChangeCategory}>
            <img src={img.src} alt={img.alt} />
            <p>{title}</p>
        </button>
    )
};

export default SpecialityCard;