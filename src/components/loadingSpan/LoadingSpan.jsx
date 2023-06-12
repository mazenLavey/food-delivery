import React from 'react';
import LoadingSpanCSS from './LoadingSpan.module.css';

const LoadingSpan = () => {
    return (
        <div className={LoadingSpanCSS.span__container}>
            <div className={LoadingSpanCSS.span__body}></div>
        </div>
    );
};

export default LoadingSpan;