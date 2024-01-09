import { Icon } from '@iconify/react';
import { ALERT_ICON, ALERT_MESSAGE } from 'constants/alert';
import CustomToastCSS from './CustomToast.module.css';

const CustomToast = (type) => {

    return (
        <div className={CustomToastCSS.CustomToast}>
            <Icon icon={ALERT_ICON[type].name} color={ALERT_ICON[type].color} width="25" />
            <p className={CustomToastCSS.CustomToast__Text} >{ALERT_MESSAGE[type]}</p>
        </div>
    )
}

export default CustomToast;