import { useState } from "react";
import PhotoCardCSS from './PhotoCard.module.css';
import { useInView } from 'react-intersection-observer';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const PhotoCard = ({ src }) => {
    const [isComplete, setIsComplete] = useState(false)
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    function handleLoading(e) {
        if (e.target.complete) {
            setIsComplete(true)
        }
    }

    return (
        <div className={PhotoCardCSS.imgContainer} ref={ref} style={{ position: "relative" }}>
            {isComplete ? null : <Skeleton width={"100%"} height={"100%"} style={{ position: "absolute" }} />}
            {inView && <img src={src} alt="instagram gallery" onLoad={handleLoading} style={isComplete ? { visibility: "visible" } : { visibility: "hidden" }} className={isComplete ? "fadeIn-animation" : ""} />}
        </div>
    )
}
export default PhotoCard;