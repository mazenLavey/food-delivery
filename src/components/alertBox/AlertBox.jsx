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

export function notify(type) {
    toast(CustomToast(type), {...options});
};

const AlertBox = () => {
    return (
        <ToastContainer 
            toastClassName={CustomToastCSS.CustomToast__Body} 
            newestOnTop />
    );
};

export default AlertBox;