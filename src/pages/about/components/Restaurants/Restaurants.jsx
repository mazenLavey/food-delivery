import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import RestaurantsCSS from './Restaurants.module.css';
import AboutRestaurantCard from './AboutRestaurantCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';

const Restaurants = () => {
    const { restaurants, isLoading } = useContext(GlobalContext);

    function renderList() {
        if (isLoading) {
            return <LoadingSpan />
        }

        const elements = restaurants.map((el, index) => <AboutRestaurantCard key={index} data={el} />);
        return elements
    };

    return (
        <div className={RestaurantsCSS.wrapper}>
            <h2>Restaurants</h2>
            {renderList()}
        </div>
    )
}

export default Restaurants;