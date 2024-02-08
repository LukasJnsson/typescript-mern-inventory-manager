
import { useEffect } from "react";


/**
 * Hook that set the page title
 * @param {String} title - The page title
 */
export const useTitle = (title: string) => {
    useEffect(() => {
        document.title = title;
    }, [title]);
};


export default useTitle;