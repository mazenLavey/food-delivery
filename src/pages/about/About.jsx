import useFetch from '../../hooks/useFetch';
import AboutCSS from './About.module.css';
import RestaurantCard from '../../components/RestaurantCard';
import bg01 from '../../assets/about-bg01.jpg';
import bg02 from '../../assets/about-bg02.jpg';
import bg03 from '../../assets/about-bg03.jpg';
import bg04 from '../../assets/about-bg04.jpg';


const About = ()=>{
    const {readyData, dataIsLoaded} = useFetch("restaurants");

    function renderList() {
        if (dataIsLoaded) {
            const elements = readyData.map(el => {
                return (
                    <article className={AboutCSS.card} key={el.id}>
                        <div className={AboutCSS.card__text}>
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>
                            <p><strong>Working Hours:</strong> {el.workHours}</p>
                        </div>
                        <div className={AboutCSS.card__img}>
                            <RestaurantCard key={el.id} item={el} />
                        </div>
                    </article>
                )
            });
            return elements
        };
    };

    return (
        <>
        <div className={`${AboutCSS.banner}`}>
            <h1>About Us</h1>
            <div className={AboutCSS.banner__bg}>
                <img src={bg01} alt="restaurant" />
                <img src={bg02} alt="restaurant" />
                <img src={bg03} alt="restaurant" />
                <img src={bg04} alt="restaurant" />
            </div>
        </div>
        <div className={`${AboutCSS.section} container`}>
            <article className={AboutCSS.concept}>
                <h2>Concept</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, esse dolores. Error eos qui non repellendus deserunt ipsum sapiente. Ad officia magni eos explicabo! Adipisci inventore amet veritatis soluta ad.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus impedit, temporibus inventore quas consequatur iusto cumque veritatis beatae officia, omnis ipsa. Optio, sed! Eveniet, ad accusantium! Distinctio libero mollitia at.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi id illo iure neque assumenda? Cupiditate sint provident ut dignissimos consequatur quisquam perferendis minima molestias quas odio dicta magni deleniti iusto nihil fuga temporibus, doloremque quae suscipit quo minus. Tenetur, sint fugiat. Dolore ullam voluptates mollitia corrupti consequuntur reiciendis reprehenderit quia.</p>
            </article>
            <div className={AboutCSS.wrapper}>
                <h2>Restaurants</h2>
                {renderList()}
            </div> 
        </div>
        </>
    );
};

export default About