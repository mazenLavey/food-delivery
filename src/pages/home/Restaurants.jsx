import React from "react";
import useFetch from '../../hooks/useFetch';
import RestaurantsCSS from "./Restaurants.module.css";
import RestaurantCard from '../../components/RestaurantCard';
import LoadingSpan from '../../components/LoadingSpan';
import SectionHeader from "../../components/SectionHeader";

function Restaurants() {
    const { readyData, dataIsLoaded } = useFetch("restaurants");

    function renderList() {
        if (dataIsLoaded) {
            const elements = readyData.map(el => {
                return (
                    <div className={RestaurantsCSS.card} key={el.id}>
                        <RestaurantCard item={el} />
                    </div>
                )
            });
            return elements
        };
    };

    return (
        <>
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
        </>
    );
}

export default Restaurants;