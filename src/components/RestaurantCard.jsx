import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const RestaurantCard = ({item})=>{
    const [isComplete, setSsComplete] = useState(false);

    function handelLoading(e) {
        if(e.target.complete) {
            setSsComplete(true);
        }
    }

    return (
        <>
            {
                isComplete?
                null
                :
                <Skeleton width={'100%'} height={'150px'} display={'flex'}/>
            }
            <img src={item.image.src} alt={item.image.alt} onLoad={handelLoading} style={isComplete? {}: {display: 'none'}}/>
            {
                isComplete?
                null
                :
                <Skeleton height={'40px'}/>
            }
            <img src={item.logo.src} alt={item.logo.alt} style={isComplete? {}: {display: 'none'}}/>
        </>
    );
};

export default RestaurantCard;
