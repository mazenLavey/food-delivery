import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryBtnCSS from './PrimaryBtn.module.css';

const PrimaryBtn = ({ link, target, rel, type, text }) => {
    return (
        <Link to={link} target={target ? target : null} rel={rel ? rel : null}>
            <button className={type === 'gray' ? PrimaryBtnCSS.primaryBtnGray : PrimaryBtnCSS.primaryBtnYellow}>{text}</button>
        </Link>
    );
};

export default PrimaryBtn;