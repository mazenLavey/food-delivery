import React, { useState } from 'react';
import ProductCardCSS from './ProductCard.module.css';
import OrderBtn from 'components/orderBtn/OrderBtn';
import priceFormatter from 'utils/priceFormatter';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonStyle = {
    display: 'inline-block',
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 0
}

const ProductCard = ({ data, showParagraph = true, SkeletonImgHeight = '230px' }) => {
    const [isComplete, setIsComplete] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handelLoading(e) {
        if (e.target.complete) {
            setTimeout(() => {
                setIsComplete(true);
            }, 200)
        };
    };

    return (
        <div className={ProductCardCSS.card} ref={ref}>
            <div className={ProductCardCSS.img}>
                {data.discount && <div className={ProductCardCSS.badge__sale}>Sale</div>}
                { inView && (
                    <>
                        { !isComplete && <Skeleton style={SkeletonStyle} /> }
                        <img src={data.image.src} alt={data.image.alt} onLoad={handelLoading} className={isComplete ? "fadeIn-animation" : ""} />
                    </>
                )}
                <div className={ProductCardCSS.nutrition}>
                    <p>{data.weight}g</p>
                    <p>{data.calorie}Kcal</p>
                </div>
            </div>
            <div className={ProductCardCSS.info}>
                <div className={ProductCardCSS.text}>
                    <h3>{data.title}</h3>
                    <p>{showParagraph ? data.description : null}</p>
                </div>
                <div className={ProductCardCSS.price}>
                    {
                        data.discount ?
                            <p><small><del style={{ color: '#adadad' }}>{priceFormatter(data.price)}</del></small> {priceFormatter(data.price * 0.8)}</p>
                            :
                            <p>{priceFormatter(data.price)} </p>
                    }
                    <OrderBtn text='Add to Cart' id={data.id} />
                </div>
            </div>
        </div>
    );
};

export default ProductCard;