import React from 'react';
import {Link} from 'react-router-dom';
import PrimaryBtnCSS from './PrimaryBtn.module.css';

const PrimaryBtn = (props)=>{
    return (
        <>
        <Link to={props.link} target={props.target? props.target: null} rel={props.rel? props.rel: null}>
            <button className={props.type === 'gray'? PrimaryBtnCSS.primaryBtnGray : PrimaryBtnCSS.primaryBtnYellow}>{props.text}</button>
        </Link>
        </>
    );
};

export default PrimaryBtn;