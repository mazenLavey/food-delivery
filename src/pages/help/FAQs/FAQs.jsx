import useFetch from 'hooks/useFetch';
import FAQsCSS from './FAQs.module.css';
import FAQsCard from 'pages/help/FAQs/FAQsCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';

const FAQs = () => {
    const { readyData, dataIsLoaded } = useFetch("faqs");

    function renderElements() {
        if (!dataIsLoaded) {
            return <LoadingSpan />
        }
        const elements = readyData.map(el => <FAQsCard key={el.id} data={el} />)
        return elements
    }

    return (
        <main className='container'>
            <h1 className={FAQsCSS.title}>FAQs</h1>
            <div className={`${FAQsCSS.wrapper} fadeIn-animation`}>
                {renderElements()}
            </div>
        </main>
    );
};

export default FAQs;