import useFetch from 'hooks/useFetch';
import RestaurantsCSS from "./Restaurants.module.css";
import RestaurantCard from './RestaurantCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import SectionHeader from "components/sectionHeader/SectionHeader";

const Restaurants = () => {
    const { readyData, dataIsLoaded } = useFetch("restaurants");

    function renderList() {
        const elements = readyData.map(el => {
            return (
                <div className={RestaurantsCSS.card} key={el.id}>
                    <RestaurantCard item={el} />
                </div>
            )
        });
        return elements
    };

    return (
        <section className={`${RestaurantsCSS.section} container`} id="restaurants">
            <SectionHeader text={"Restaurants"} button={true} buttonLink="/about" buttonText="Show All" buttonType="gray" />
            {dataIsLoaded ?
                <div className={RestaurantsCSS.list}>
                    {renderList()}
                </div>
                :
                <LoadingSpan />
            }
        </section>
    );
}

export default Restaurants;