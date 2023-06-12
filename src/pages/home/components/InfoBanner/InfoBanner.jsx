import InfoBannerCSS from './InfoBanner.module.css';

const Info = () => {
    return (
        <section className={InfoBannerCSS.section}>
            <div className={InfoBannerCSS.wrapper}>
                <div className={InfoBannerCSS.card}>
                    <div>1</div>
                    <p>Kitchen</p>
                </div>
                <div className={InfoBannerCSS.card}>
                    <div>11</div>
                    <p>Specialties</p>
                </div>
                <div className={InfoBannerCSS.card}>
                    <div>11</div>
                    <p>Restaurants</p>
                </div>
                <div className={InfoBannerCSS.card} >
                    <div>1</div>
                    <p>Transport costs</p>
                </div>
            </div>
        </section>
    );
};

export default Info;