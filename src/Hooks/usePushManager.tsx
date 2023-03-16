import { useEffect } from "react";

let window: any;

const usePushManager = () => {

    useEffect(() => {
        if (!('PushManager' in window)) {
            console.log('PushManager not supported');
            //create alert to say no service worker
            window.alert('PushManager not supported');
            return;
        }
    }, []);

};

export default usePushManager;