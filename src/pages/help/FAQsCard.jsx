import React from 'react';
import useToggle from '../../hooks/useToggle';

const FAQsCard = ({ data }) => {
    const { toggle, changeStatus } = useToggle();

    return (
        <>
            <article>
                <h2 onClick={changeStatus}>{data.title}</h2>
                {
                    toggle ?
                        <>
                            <p>{data.answer}</p>
                        </>
                        :
                        null
                }

            </article>
        </>
    );
};

export default FAQsCard;