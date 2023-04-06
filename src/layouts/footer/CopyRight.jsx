import React from "react";
import CopyRightCSS from './CopyRight.module.css';

const CopyRight = ()=>{
    function getCurrentYear() {
        let date = new Date().getFullYear()
        return date
    }

    return (
        <div className={CopyRightCSS.copyRight}>
            <p>&#169; {getCurrentYear()} Yellow kitchen</p>
        </div>
    );
};

export default CopyRight;