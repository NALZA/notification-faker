import { useEffect } from "react";

const useServiceWorker = () => {

    useEffect(() => {
        if (!('serviceWorker' in navigator)) {
            console.log('Service worker not supported');
            //create alert to say no service worker
            window.alert('Service worker not supported');
            return;
        }
    }, []);

};

export default useServiceWorker;