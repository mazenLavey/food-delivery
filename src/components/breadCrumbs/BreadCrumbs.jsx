import React from 'react';
import BreadCrumbsCSS from './BreadCrumbs.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = '';
    const linksList = location.pathname.split('/').filter(el => el !== '');

    const breadcrumb = linksList.map((el, index) => {
        currentLink += `/${el}`;
        return <li key={index}><Link to={currentLink}>{el}</Link></li>
    });

    return (
        <>
            {
                linksList.length > 1 && linksList[0] === "help" ?
                    <div className='container'>
                        <ul className={BreadCrumbsCSS.breadcrumbs}>
                            {breadcrumb}
                        </ul>
                    </div>
                    :
                    null
            }
        </>
    );
};

export default BreadCrumbs;