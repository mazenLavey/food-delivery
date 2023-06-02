import useFetch from '../../hooks/useFetch';
import FAQsCSS from './FAQs.module.css';
import FAQsCard from './FAQsCard';
import LoadingSpan from '../../components/LoadingSpan';

const FAQs = () => {
    const { readyData, dataIsLoaded } = useFetch("faqs");

    function renderElements() {
        if (dataIsLoaded) {
            const elements = readyData.map(el => {
                return <FAQsCard key={el.id} data={el} />
            });

            return elements
        }
    }

    return (
        <>
            <main className='container'>
                <h1 className={FAQsCSS.title}>FAQs</h1>
                {
                    dataIsLoaded ?
                        <div className={`${FAQsCSS.wrapper} fadeIn-animation`}>
                            {renderElements()}
                        </div>
                        :
                        <LoadingSpan />
                }
            </main>
        </>
    );
};

export default FAQs;