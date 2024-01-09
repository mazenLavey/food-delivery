import CardSkeleton from './CardSkeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import MenuSkeletonCSS from './MenuSkeleton.module.css';

const MenuSkeleton = () => {
    return(
        <>
            <Skeleton count={0.9} height={35} />
            <div className={MenuSkeletonCSS.wrapper}>
                <CardSkeleton cards={6} />
            </div>
        </>
    );
};

export default MenuSkeleton;