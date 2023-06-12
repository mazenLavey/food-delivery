import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CardSkeletonCSS from './CardSkeleton.module.css';

const CardSkeleton = ({ cards }) => {
    return (
        Array(cards).fill(0).map((item, index) => {
            return (
                <div className={CardSkeletonCSS.card} key={index}>
                    <div className={CardSkeletonCSS.img}>
                        <Skeleton height={'100%'} style={{ display: 'flex' }} />
                    </div>
                    <div className={CardSkeletonCSS.body}>
                        <div>
                            <h3><Skeleton width={'40%'} /></h3>
                            <p><Skeleton count={4.5} /></p>
                        </div>
                        <div>
                            <Skeleton style={{ marginTop: '20px' }} height={40} />
                        </div>
                    </div>
                </div>
            )
        })

    );
};

export default CardSkeleton;