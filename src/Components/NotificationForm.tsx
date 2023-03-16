import { Flex, Button, FormControl, Input } from "@chakra-ui/react";

type Props = {}
const NotificationForm = (props: Props) => {

    const onSendNotification = (title: string, body: string, icon: string) => {
        //request permission for push using notification push api
        // Notification.requestPermission().then((permission) => {
        //     if (permission === 'granted') {
        //         //create notification
        //         const notification = new Notification(title, {
        //             body: body,
        //             icon: icon

        //         });
        //     }
        // });

        //send push notification ios 16.4
        navigator.serviceWorker.ready.then((registration) => {
            registration.showNotification(title, {
                body: body,
                icon: icon
            });
        });
    }

    return (
        <Flex align={'center'} paddingTop={['5rem']} flexDir={'column'} gap="8">
            <FormControl><Input /><Button onClick={() => onSendNotification('NOTIFICATION', "NOTIFICATION BODY", '/logo512.png')}>Send Push</Button></FormControl>
        </Flex>
    )
}
export default NotificationForm