import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import RestaurantsCSS from "./Restaurants.module.css";
import RestaurantCard from './RestaurantCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import SectionHeader from "components/sectionHeader/SectionHeader";

const Restaurants = () => {
    const { restaurants, isLoading } = useContext(GlobalContext);

    function renderList() {
        const elements = restaurants.map(el => {
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
            {isLoading ?
                <LoadingSpan />
                :
                <div className={RestaurantsCSS.list}>
                    {renderList()}
                </div>
            }
        </section>
    );
}

export default Restaurants;