import React, { createContext, useEffect, useState } from 'react';
import { FIREBASE_DATA_NAME } from 'constants/firebase';
import { ref, get } from "firebase/database";
import { db } from 'config/firebase';
import { notify } from 'components/alertBox/AlertBox';
import { ALERT_TYPE } from 'constants/alert';

const GlobalContext = createContext();

const GlobalProvider = (props) => {
    const [menuData, setMenuData] = useState([]);
    const [restaurants, setRestaurants] = useState([]);
    const [specialities, setSpecialities] = useState([]);
    const [faq, setFaq] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
        setIsLoading(true);

        try {
            const snapshot = await get(ref(db));

            if (!snapshot.exists()) {
                setIsLoading(false);
                return;
            }

            const data = snapshot.val()[0];

            setMenuData(data[FIREBASE_DATA_NAME.MENU]);
            setRestaurants(data[FIREBASE_DATA_NAME.RESTAURANTS]);
            setSpecialities(data[FIREBASE_DATA_NAME.SPECIALITIES]);
            setFaq(data[FIREBASE_DATA_NAME.FAQ]);

            setIsLoading(false);

        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
            notify(ALERT_TYPE.ERROR)
        }
    };

    fetchData();
    }, []);
    

    return (
        <GlobalContext.Provider value={{ 
                menuData,
                restaurants,
                specialities,
                faq,
                isLoading, 
            }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export { GlobalProvider, GlobalContext }