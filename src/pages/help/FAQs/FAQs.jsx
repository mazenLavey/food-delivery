import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import FAQsCSS from './FAQs.module.css';
import FAQsCard from 'pages/help/FAQs/FAQsCard';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';

const FAQs = () => {
    const { faq, isLoading } = useContext(GlobalContext);

    function renderElements() {
        if (isLoading) {
            return <LoadingSpan />
        }
        const elements = faq.map(el => <FAQsCard key={el.id} data={el} />)
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