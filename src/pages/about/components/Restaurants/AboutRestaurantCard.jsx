
import AboutRestaurantCardCSS from './AboutRestaurantCard.module.css';

const AboutRestaurantCard = ({ data }) => {
    return (
        <article className={AboutRestaurantCardCSS.card} key={data.id}>
            <div className={AboutRestaurantCardCSS.card__text}>
                <h3>{data.name}</h3>
                <p>{data.description}</p>
                <p><strong>Working Hours:</strong> {data.workHours}</p>
            </div>
            <div className={AboutRestaurantCardCSS.card__img}>
                <img src={data.image.src} alt={data.image.alt} />
            </div>
        </article>
    )
}

export default AboutRestaurantCard;