import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import RestaurantCardCSS from "./RestaurantCard.module.css";

const RestaurantCard = ({ item }) => {
    const [isComplete, setSsComplete] = useState(false);

    function handelLoading(e) {
        if (e.target.complete) {
            setSsComplete(true);
        }
    }

    return (
        <div className={RestaurantCardCSS.wrapper}>
            {isComplete ? null : <Skeleton width={'100%'} height={'150px'} display={'flex'} />}
            <img src={item.image.src} alt={item.image.alt} onLoad={handelLoading} className={isComplete ? "fadeIn-animation" : ""} />
        </div>
    );
};

export default RestaurantCard;
