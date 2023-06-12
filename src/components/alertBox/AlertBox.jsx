import React, { useContext, useEffect } from 'react';
import { MenuDataContext } from 'context/MenuDataContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AlertBox = () => {
    const { newItemToCart, dataError } = useContext(MenuDataContext);
    useEffect(() => {
        if (dataError) {
            notify('error');
        };

        if (newItemToCart !== 0) {
            notify('success');
        };
    }, [newItemToCart, dataError])

    function notify(type) {
        if (type === 'error') {
            toast.error("Something wrong with the server (Refresh the page or Contact us)", {
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                pauseOnFocusLoss: false,
                progress: undefined,
                theme: "light",
            });
        } else if (type === 'success') {
            toast.success("Nem Item's added", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                pauseOnFocusLoss: false,
                progress: undefined,
                theme: "light",
            });
        };
    };


    return <ToastContainer />;
};

export default AlertBox;