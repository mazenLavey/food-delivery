import { useState } from "react";

function useToggle() {
    const [toggle, setToggle] = useState(false);

    function changeStatus() {
        setToggle(oldValue => !oldValue);
    };

    return {toggle, changeStatus};
};

export default useToggle;