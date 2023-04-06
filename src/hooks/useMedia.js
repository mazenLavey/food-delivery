import { useEffect, useState } from "react";

const useMedia = ()=> {
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 575px)').matches);

    useEffect(()=>{
        function findScreenSize() {
            let smallScreen = window.matchMedia('(max-width: 575px)').matches;
            if (smallScreen) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener('resize', findScreenSize);

        return ()=> window.removeEventListener('resize', findScreenSize)
    }, []);

    return {isMobile};
};

export default useMedia;