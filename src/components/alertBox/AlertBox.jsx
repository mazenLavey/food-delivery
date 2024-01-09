import React, { useContext, useEffect } from 'react';
import { MenuDataContext } from 'context/MenuDataContext';
import { ALERT_TYPE } from 'constants/alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomToast from './CustomToast';
import CustomToastCSS from './CustomToast.module.css';

const options = {
    position: "bottom-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    pauseOnFocusLoss: false,
    theme: "dark",
}

const AlertBox = () => {
    const { newItemToCart, dataError } = useContext(MenuDataContext);
    useEffect(() => {
        if (dataError) {
            notify(ALERT_TYPE.ERROR);
        };

        if (newItemToCart !== 0) {
            notify(ALERT_TYPE.SUCCESS);
        };
    }, [newItemToCart, dataError])

    function notify(type) {
        toast(CustomToast(type), {...options});
    };

    return <ToastContainer 
                toastClassName={CustomToastCSS.CustomToast__Body} 
                newestOnTop 
            />;
};

export default AlertBox;