
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props) => {
    const {pathname} = useLocation();
    useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
    });
    }, [pathname]);

    return null
};

export default ScrollToTop;