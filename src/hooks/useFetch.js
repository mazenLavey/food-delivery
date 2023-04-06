import {useState, useEffect} from 'react';
import { ref, onValue} from "firebase/database";
import {db} from '../config/firebase';


const useFetch = (dataName)=>{
    const [readyData, setReadyData] = useState([]);
    const [dataIsLoaded, setDataIsLoaded] = useState(false);
    const [dataError, setDataError] = useState(false);

    useEffect(()=>{
        onValue(ref(db), data =>{
            setReadyData(data.val()[0][dataName]);
            setDataIsLoaded(true);
            setDataError(false);
        })
    }, [dataName]);

    return {readyData, dataIsLoaded, dataError};
};

export default useFetch;