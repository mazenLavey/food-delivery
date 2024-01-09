import { useContext } from 'react';
import { GlobalContext } from 'context/GlobalContext';
import LoadingSpan from 'components/loadingSpan/LoadingSpan';
import Collapse, { Panel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import './FAQs.css';

const FAQs = () => {
    const { faq, isLoading } = useContext(GlobalContext);

    function renderElements() {
        const elements = faq.map(el => {
            return(
                    <Panel header={el.title} headerClass="faq__item">
                        <p>{el.answer}</p>
                    </Panel>
                );
        });
        
        return elements
    }

    return (
        <main className="container">
            <h1 className="faq__title">FAQs</h1>

            {
                isLoading ?
                <LoadingSpan />
                :
                <Collapse className="faq__collapse" defaultActiveKey="0" accordion={true} >
                    {renderElements()}
                </Collapse>
            }
        </main>
    );
};

export default FAQs;