import useFetch from 'hooks/useFetch';
import RestaurantsCSS from './Restaurants.module.css';
import AboutRestaurantCard from './AboutRestaurantCard';
import { nanoid } from 'nanoid';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';

const Restaurants = () => {
    const { readyData, dataIsLoaded } = useFetch("restaurants");

    function renderList() {
        if (!dataIsLoaded) {
            return <LoadingSpan />
        }
        const elements = readyData.map(el => <AboutRestaurantCard key={nanoid()} data={el} />);
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