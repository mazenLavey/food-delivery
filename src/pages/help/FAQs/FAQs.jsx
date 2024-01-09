import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import Collapse from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import './FAQs.css';

const FAQs = () => {
    const { faq, isLoading } = useContext(GlobalContext);

    const elements = faq.map(el => {
        return {
            key: el.id, 
            label: el.title, 
            children: el.answer
        }
    });

    return (
        <main className="container">
            <h1 className="faq__title">FAQs</h1>

            {
                isLoading ?
                <LoadingSpan />
                :
                <Collapse className="faq__collapse"  defaultActiveKey="0" accordion={true} items={elements} />
            }
        </main>
    );
};

export default FAQs;