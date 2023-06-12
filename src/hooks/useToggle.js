import { useState } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false);

    function changeStatus() {
        setToggle(oldValue => !oldValue);
    };

    return { toggle, changeStatus };
};

export default useToggle;